import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { registerSearchTool } from "./search.js";
import { registerListTool } from "./list.js";
import { registerTopicsTool } from "./topics.js";
import { registerScrapeTool } from "./scrape.js";

export function registerAllTools(server: McpServer) {
  registerSearchTool(server);
  registerListTool(server);
  registerTopicsTool(server);
  registerScrapeTool(server);
}
