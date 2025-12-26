# RequestHunt MCP Server

[![MCP Badge](https://lobehub.com/badge/mcp/resciencelab-requesthunt-mcp-server)](https://lobehub.com/mcp/resciencelab-requesthunt-mcp-server)
[![npm version](https://badge.fury.io/js/%40resciencelab%2Frequesthunt-mcp-server.svg)](https://www.npmjs.com/package/@resciencelab/requesthunt-mcp-server)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

MCP (Model Context Protocol) server for [RequestHunt](https://requesthunt.com) - search and discover feature requests from Reddit, X (Twitter), and GitHub using Claude Desktop or any MCP-compatible client.

## Features

- **Search feature requests** across multiple platforms with full-text search
- **AI topic expansion** - automatically expand your query to related topics
- **Realtime scraping** - fetch fresh data from Reddit, X, and GitHub
- **Filter by topic/category** - narrow down to specific products or categories

## Quick Start

### 1. Get an API Key

Sign up at [requesthunt.com](https://requesthunt.com) and create an API key in your [dashboard](https://requesthunt.com/dashboard).

### 2. Configure Claude Desktop

Add to your Claude Desktop configuration file:

**macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
**Windows:** `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "requesthunt": {
      "command": "npx",
      "args": ["-y", "@resciencelab/requesthunt-mcp-server"],
      "env": {
        "REQUESTHUNT_API_KEY": "rh_live_your_api_key_here"
      }
    }
  }
}
```

### 3. Start Using

Restart Claude Desktop and try:

- "Search for feature requests about dark mode"
- "Find what users are requesting for Notion"
- "List top feature requests for VS Code"

## Prompts

### `discover-requests`
Help discover feature requests for any product or topic.

**Arguments:**
- `topic` (required): Product or topic name (e.g., "Notion", "VS Code")
- `expand` (optional): Enable AI topic expansion (default: true)

**Usage in Claude:**
> "Use the discover-requests prompt for Notion"

### `analyze-trends`
Analyze patterns and trends in feature requests.

**Arguments:**
- `topic` (required): Topic to analyze
- `platforms` (optional): Comma-separated platforms or 'all'

### `compare-platforms`
Compare requests across Reddit, X, and GitHub.

**Arguments:**
- `topic` (required): Topic to compare
- `limit` (optional): Results per platform (default: 10)

### `find-quick-wins`
Identify frequently requested features for roadmap planning.

**Arguments:**
- `topic` (required): Product or topic name
- `sortBy` (optional): Sort preference (top/new, default: top)

## Resources

### `topics://list`
Browse all available topics organized by category.

### `guide://getting-started`
Quick start guide with examples and best practices.

### `examples://queries`
Example queries for common use cases like product research and competitor analysis.

### `stats://limits`
View API rate limits and usage information for free and pro tiers.

## Available Tools

### `search_requests`

Full-text search across all feature requests with optional AI expansion.

**Parameters:**
- `query` (required): Search query
- `limit` (optional): Max results (1-100, default: 20)
- `expand` (optional): Enable AI topic expansion + realtime scraping
- `platforms` (optional): Array of platforms to search (`reddit`, `x`, `github`)

**Example:** "Search for 'offline mode' feature requests with expand enabled"

### `list_requests`

List feature requests with filters and pagination.

**Parameters:**
- `topic` (optional): Filter by topic (e.g., "Notion", "VS Code")
- `category` (optional): Filter by category slug
- `platform` (optional): Filter by platform (`x`, `reddit`, `github`, `requesthunt`)
- `limit` (optional): Max results (1-100, default: 20)
- `source` (optional): `cached` or `realtime`
- `sortBy` (optional): `new` or `top`

**Example:** "List top feature requests for VS Code"

### `get_topics`

List available topics organized by category.

**Example:** "Show me all available topics I can filter by"

### `scrape_requests`

Start an on-demand scrape job to collect fresh feature requests.

**Parameters:**
- `topic` (required): Topic to scrape (2-100 characters)
- `platforms` (optional): Array of platforms (`reddit`, `x`, `github`)
- `wait` (optional): Wait for completion (default: true, max 2 min)

**Example:** "Scrape feature requests about graphene batteries from Reddit and X"

## Rate Limits

| Tier | Cached Requests | Realtime Requests |
|------|-----------------|-------------------|
| Free | 150/month | 20/month |
| Pro | 2000/day | 500/month |

Check your usage at [requesthunt.com/dashboard](https://requesthunt.com/dashboard).

## Development

```bash
# Clone the repository
git clone https://github.com/ReScienceLab/requesthunt-mcp-server.git
cd requesthunt-mcp-server

# Install dependencies
npm install

# Build
npm run build

# Run locally
REQUESTHUNT_API_KEY=your_key node dist/index.js
```

## Testing with MCP Inspector

```bash
npx @modelcontextprotocol/inspector node dist/index.js
```

## License

MIT - see [LICENSE](LICENSE)

## Links

- [RequestHunt](https://requesthunt.com) - The feature request aggregator
- [API Documentation](https://requesthunt.com/docs) - Full API reference
- [MCP Specification](https://modelcontextprotocol.io) - Model Context Protocol
