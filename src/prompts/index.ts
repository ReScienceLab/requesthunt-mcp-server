import { z } from "zod";
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function registerAllPrompts(server: McpServer) {
  // 1. Discover Requests Prompt
  server.prompt(
    "discover-requests",
    "Discover relevant feature requests for a product or topic",
    {
      topic: z
        .string()
        .describe("Product or topic name (e.g., 'Notion', 'VS Code')"),
      expand: z
        .string()
        .optional()
        .describe("Enable AI topic expansion (true/false, default: true)"),
    },
    async ({ topic, expand }) => {
      const expandValue = expand !== "false";
      return {
        messages: [
          {
            role: "user",
            content: {
              type: "text",
              text: `I'll help you discover feature requests for ${topic}.

Let me search across Reddit, X, and GitHub to find:
1. Most requested features
2. Common pain points
3. Trending ideas
4. User feedback patterns

I'll use the search_requests tool with expand=${expandValue} to get comprehensive results including realtime data when needed.`,
            },
          },
        ],
      };
    }
  );

  // 2. Analyze Trends Prompt
  server.prompt(
    "analyze-trends",
    "Analyze patterns and trends in feature requests for a topic",
    {
      topic: z.string().describe("Topic to analyze"),
      platforms: z
        .string()
        .optional()
        .describe("Comma-separated platforms (reddit,x,github) or 'all'"),
    },
    async ({ topic, platforms }) => {
      const platformList = platforms || "all platforms";
      return {
        messages: [
          {
            role: "user",
            content: {
              type: "text",
              text: `I'll analyze feature request trends for ${topic}.

I'll examine:
- Common themes and patterns
- Platform-specific requests (${platformList})
- Request frequency and engagement
- User pain points and priorities

Let me gather the data and provide you with actionable insights.`,
            },
          },
        ],
      };
    }
  );

  // 3. Compare Platforms Prompt
  server.prompt(
    "compare-platforms",
    "Compare feature requests across Reddit, X, and GitHub",
    {
      topic: z.string().describe("Topic to compare"),
      limit: z
        .string()
        .optional()
        .describe("Results per platform (default: 10)"),
    },
    async ({ topic, limit }) => {
      const limitValue = limit || "10";
      return {
        messages: [
          {
            role: "user",
            content: {
              type: "text",
              text: `I'll compare feature requests for ${topic} across Reddit, X, and GitHub.

I'll show you:
- Platform-specific requests and priorities
- Common requests across all platforms
- Unique perspectives from each community
- Engagement levels and discussion quality

Fetching up to ${limitValue} requests per platform for comparison.`,
            },
          },
        ],
      };
    }
  );

  // 4. Find Quick Wins Prompt
  server.prompt(
    "find-quick-wins",
    "Identify frequently requested features that could be quick wins",
    {
      topic: z.string().describe("Product or topic name"),
      sortBy: z
        .string()
        .optional()
        .describe("Sort preference (top/new, default: top)"),
    },
    async ({ topic, sortBy }) => {
      const sortValue = sortBy || "top";
      return {
        messages: [
          {
            role: "user",
            content: {
              type: "text",
              text: `I'll identify potential quick wins for ${topic} by finding:
- Frequently requested features
- Simple, high-impact requests
- Low-hanging fruit opportunities
- Features with strong user demand

This will help you prioritize your roadmap effectively. Sorting by: ${sortValue}`,
            },
          },
        ],
      };
    }
  );
}
