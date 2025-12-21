import { z } from "zod";
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { startScrapeJob, getScrapeJobStatus } from "../api.js";

const MAX_WAIT_MS = 120_000; // 2 minutes
const POLL_INTERVAL_MS = 3_000; // 3 seconds

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function registerScrapeTool(server: McpServer) {
  server.tool(
    "scrape_requests",
    "Start an on-demand scrape job to collect fresh feature requests from Reddit, X, and GitHub. Counts against realtime API quota.",
    {
      topic: z.string().min(2).max(100).describe("Topic to scrape (e.g., 'graphene battery', 'AI code review')"),
      platforms: z.array(z.enum(["reddit", "x", "github"])).optional().describe("Platforms to scrape (default: all)"),
      wait: z.boolean().optional().default(true).describe("Wait for job completion (default: true, max 2 min)"),
    },
    async ({ topic, platforms, wait }) => {
      try {
        const job = await startScrapeJob({ topic, platforms });

        if (!wait) {
          return {
            content: [{
              type: "text",
              text: `Scrape job started for "${topic}"\n\n` +
                `Job ID: ${job.jobId}\n` +
                `Status: ${job.status}\n` +
                `Platforms: ${job.platforms.join(", ")}\n\n` +
                `Use getScrapeJobStatus("${job.jobId}") to check progress.`,
            }],
          };
        }

        // Poll for completion
        const startTime = Date.now();
        let currentJob = job;

        while (
          currentJob.status !== "completed" &&
          currentJob.status !== "failed" &&
          Date.now() - startTime < MAX_WAIT_MS
        ) {
          await sleep(POLL_INTERVAL_MS);
          currentJob = await getScrapeJobStatus(job.jobId);
        }

        // Format progress
        const progressText = currentJob.progress
          ? Object.entries(currentJob.progress)
              .map(([platform, status]) => `  ${platform}: ${status}`)
              .join("\n")
          : "";

        if (currentJob.status === "completed") {
          return {
            content: [{
              type: "text",
              text: `Scrape completed for "${topic}"\n\n` +
                `Status: ${currentJob.status}\n` +
                `Requests created: ${currentJob.requestsCreated || 0}\n` +
                `Platforms:\n${progressText}\n\n` +
                `You can now search for "${topic}" to see the fresh results.`,
            }],
          };
        } else if (currentJob.status === "failed") {
          return {
            content: [{
              type: "text",
              text: `Scrape failed for "${topic}"\n\n` +
                `Status: ${currentJob.status}\n` +
                `Error: ${currentJob.error || "Unknown error"}\n` +
                `Platforms:\n${progressText}`,
            }],
            isError: true,
          };
        } else {
          // Still running after timeout
          return {
            content: [{
              type: "text",
              text: `Scrape job still running for "${topic}" (timed out waiting)\n\n` +
                `Job ID: ${currentJob.jobId}\n` +
                `Status: ${currentJob.status}\n` +
                `Platforms:\n${progressText}\n\n` +
                `The job will continue in the background. Check status later or search for results.`,
            }],
          };
        }
      } catch (error) {
        return {
          content: [{
            type: "text",
            text: `Error starting scrape: ${error instanceof Error ? error.message : "Unknown error"}`,
          }],
          isError: true,
        };
      }
    }
  );
}
