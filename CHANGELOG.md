# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.0] - 2025-12-21

### Added

- `scrape_requests` tool - Start on-demand scrape jobs to collect fresh feature requests
  - Supports topic and platform selection
  - Optional `wait` parameter to poll for completion (default: true, max 2 min)
  - Returns job status and results count

## [1.1.0] - 2025-12-21

### Removed

- `get_trending` tool - Trending feature removed from RequestHunt

## [1.0.0] - 2025-12-18

### Added

- Initial release
- `search_requests` tool - Full-text search with AI topic expansion
- `list_requests` tool - List requests with filters and pagination
- `get_topics` tool - List available topics by category
- Support for Claude Desktop via stdio transport
- MIT License
