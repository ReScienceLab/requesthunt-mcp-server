import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function registerAllResources(server: McpServer) {
  // 1. Topics List Resource
  server.resource(
    "Available Topics",
    "topics://list",
    {
      description: "List of all topics organized by category",
      mimeType: "application/json",
    },
    async () => {
      return {
        contents: [
          {
            uri: "topics://list",
            mimeType: "application/json",
            text: JSON.stringify(
              {
                description:
                  "Available topics for filtering feature requests. Use these with the list_requests tool's 'topic' parameter.",
                note: "Use get_topics tool for the complete, up-to-date list from the API.",
                categories: [
                  {
                    name: "Productivity",
                    slug: "productivity",
                    topics: [
                      "AI notetakers",
                      "AI Presentation Software",
                      "Ad blockers",
                      "App switcher",
                      "Content Management Systems",
                      "Calendar apps",
                      "Compliance software",
                      "Customer support tools",
                      "E-signature apps",
                      "Email clients",
                      "File storage and sharing apps",
                      "Hiring software",
                      "Knowledge base software",
                      "Legal services",
                      "Meeting software",
                      "Note and writing apps",
                      "PDF Editor",
                      "Password managers",
                      "Presentation Software",
                      "Product demo",
                      "Project management software",
                      "Kanban tools",
                      "Resume tools",
                      "Scheduling software",
                      "Screenshots and screen recording apps",
                      "Search",
                      "Security software",
                      "Spreadsheets",
                      "Team collaboration software",
                      "Time tracking apps",
                      "Video conferencing",
                      "Virtual office platforms",
                      "Web browsers",
                      "Writing assistants",
                    ],
                  },
                  {
                    name: "Engineering & Development",
                    slug: "engineering-development",
                    topics: [
                      "A/B testing tools",
                      "AI Code Editors",
                      "AI Code Testing",
                      "AI Coding Agents",
                      "AI Databases",
                      "Authentication & identity tools",
                      "Automation tools",
                      "Browser Automation",
                      "Cloud Computing Platforms",
                      "Code Review Tools",
                      "Code editors",
                      "Command line tools",
                      "Databases and backend frameworks",
                      "Git clients",
                      "Headless CMS software",
                      "Issue tracking software",
                      "Membership software",
                      "Observability tools",
                      "Predictive AI",
                      "Real-time collaboration infra",
                      "Standup bots",
                      "Static site generators",
                      "Terminals",
                      "Testing and QA software",
                      "Unified API",
                      "VPN client",
                      "Vibe Coding Tools",
                      "Video hosting platforms",
                      "Web hosting services",
                      "Website analytics",
                      "Website builders",
                    ],
                  },
                  {
                    name: "Design & Creative",
                    slug: "design-creative",
                    topics: [
                      "3D & Animation",
                      "AI Characters",
                      "AI Generative Media",
                      "AI Headshot Generators",
                      "Avatar generators",
                      "Background removal tools",
                      "Camera apps",
                      "Design inspiration websites",
                      "Design mockups",
                      "Design resources",
                      "Digital whiteboards",
                      "Graphic design tools",
                      "Icon sets",
                      "Interface design tools",
                      "Mobile editing apps",
                      "Music Generation",
                      "Photo editing",
                      "Podcasting Tools",
                      "Social audio apps",
                      "Space design apps",
                      "Stock photo sites",
                      "UI frameworks",
                      "User research",
                      "Video editing",
                      "Wallpapers",
                      "Wireframing",
                    ],
                  },
                  {
                    name: "Finance",
                    slug: "finance",
                    topics: [
                      "Accounting software",
                      "Budgeting apps",
                      "Credit score tools",
                      "Financial planning",
                      "Fundraising resources",
                      "Investing",
                      "Invoicing tools",
                      "Money transfer",
                      "Neobanks",
                      "Online banking",
                      "Payroll software",
                      "Remote workforce tools",
                      "Retirement planning",
                      "Savings apps",
                      "Startup financial planning",
                      "Startup incorporation",
                      "Stock trading platforms",
                      "Tax preparation",
                      "Treasury management platforms",
                    ],
                  },
                  {
                    name: "Social & Community",
                    slug: "social-community",
                    topics: [
                      "AI Content Detection",
                      "Blogging platforms",
                      "Community management",
                      "Dating apps",
                      "Link in bio tools",
                      "Live streaming platforms",
                      "Messaging apps",
                      "Microblogging platforms",
                      "Newsletter platforms",
                      "Photo sharing",
                      "Professional networking platforms",
                      "Safety and Privacy platforms",
                      "Social Networking",
                      "Social bookmarking",
                      "Video and Voice calling",
                    ],
                  },
                  {
                    name: "Marketing & Sales",
                    slug: "marketing-sales",
                    topics: [
                      "AI sales tools",
                      "Advertising tools",
                      "Affiliate marketing",
                      "CRM software",
                      "Customer loyalty platforms",
                      "Email marketing",
                      "GEO Tools",
                      "Influencer marketing platforms",
                      "Keyword research tools",
                      "Landing page builders",
                      "Lead generation software",
                      "Marketing automation platforms",
                      "SEO tools",
                      "Sales enablement",
                      "Sales training",
                      "Social media management tools",
                      "Social media scheduling tools",
                      "Survey and form builders",
                    ],
                  },
                  {
                    name: "Health & Fitness",
                    slug: "health-fitness",
                    topics: [
                      "Activity tracking",
                      "Camping apps",
                      "Health Insurance",
                      "Hiking apps",
                      "Medical",
                      "Meditation apps",
                      "Mental Health",
                      "Senior care",
                      "Sleep apps",
                      "Therapy apps",
                      "Workout platforms",
                    ],
                  },
                  {
                    name: "Travel",
                    slug: "travel",
                    topics: [
                      "Flight booking apps",
                      "Hotel booking app",
                      "Maps and GPS",
                      "Outdoors platforms",
                      "Short term rentals",
                      "Travel Insurance",
                      "Travel Planning",
                      "Travel apps",
                      "Weather apps",
                    ],
                  },
                  {
                    name: "Platforms",
                    slug: "platforms",
                    topics: [
                      "Crowdfunding",
                      "Event software",
                      "Job boards",
                      "Language Learning",
                      "News",
                      "Online learning",
                      "Real estate",
                      "Startup communities",
                      "Virtual events",
                    ],
                  },
                  {
                    name: "Product add-ons",
                    slug: "product-addons",
                    topics: [
                      "Chrome Extensions",
                      "Figma Plugins",
                      "Figma Templates",
                      "Notion Templates",
                      "Slack apps",
                      "Twitter apps",
                      "Wordpress Plugins",
                      "Wordpress themes",
                    ],
                  },
                  {
                    name: "Web3",
                    slug: "web3",
                    topics: [
                      "Crypto exchanges",
                      "Crypto tools",
                      "Crypto wallets",
                      "DAOs",
                      "Defi",
                      "NFT creation tools",
                      "NFT marketplaces",
                    ],
                  },
                  {
                    name: "Physical Products",
                    slug: "physical-products",
                    topics: [
                      "Books",
                      "Fitness",
                      "Furniture",
                      "Games",
                      "Toys",
                      "Wearables",
                      "Webcams",
                    ],
                  },
                  {
                    name: "AI Agents",
                    slug: "ai-agents",
                    topics: [
                      "AI Agent Automation",
                      "AI Chief Of Staff",
                      "AI Data Scientist",
                      "AI Designer",
                      "AI Engineer",
                      "AI SDR",
                      "AI Voice Agents",
                    ],
                  },
                  {
                    name: "LLMs",
                    slug: "llms",
                    topics: [
                      "AI Chatbots",
                      "AI Infrastructure Tools",
                      "AI Metrics and Evaluation",
                      "Foundation Models",
                      "LLM Developer Tools",
                      "LLM Fine Tuning",
                      "Prompt Engineering Tools",
                    ],
                  },
                  {
                    name: "Voice AI Tools",
                    slug: "voice-ai-tools",
                    topics: [
                      "AI Dictation Apps",
                      "AI Voice Agent Infrastructure",
                      "Realtime Voice AI",
                      "Text-to-Speech Software",
                      "Transcription",
                      "Translation",
                    ],
                  },
                  {
                    name: "Ecommerce",
                    slug: "ecommerce",
                    topics: [
                      "Ecommerce platforms",
                      "Marketplace sites",
                      "Payment processors",
                      "Shopify Apps",
                    ],
                  },
                  {
                    name: "Family",
                    slug: "family",
                    topics: [
                      "Apps for kids",
                      "Family Care",
                      "Pregnancy apps",
                    ],
                  },
                  {
                    name: "No-code Platforms",
                    slug: "no-code-platforms",
                    topics: [
                      "No-Code AI Agent Builder",
                      "No-Code App Builder",
                      "No-Code Website Builder",
                    ],
                  },
                  {
                    name: "Data analysis tools",
                    slug: "data-analysis-tools",
                    topics: [
                      "Analytics Databases",
                      "Business intelligence software",
                      "Data visualization tools",
                    ],
                  },
                  {
                    name: "Lifestyle",
                    slug: "lifestyle",
                    topics: [
                      "Shopping",
                    ],
                  },
                ],
              },
              null,
              2
            ),
          },
        ],
      };
    }
  );

  // 2. Getting Started Guide Resource
  server.resource(
    "Getting Started Guide",
    "guide://getting-started",
    {
      description: "Quick start guide with examples",
      mimeType: "text/markdown",
    },
    async () => {
      return {
        contents: [
          {
            uri: "guide://getting-started",
            mimeType: "text/markdown",
            text: `# Getting Started with RequestHunt

## Quick Examples

### Search for feature requests
Use the \`search_requests\` tool with expand enabled for comprehensive results:

\`\`\`
query: "dark mode"
expand: true
platforms: ["reddit", "x", "github"]
\`\`\`

**Good search queries:**
- "offline support" - Find requests for offline functionality
- "API integrations" - Discover integration requests
- "mobile app features" - Mobile-specific requests
- "performance improvements" - Speed and optimization requests

### List requests by topic
Use \`list_requests\` to browse feature requests for specific products:

\`\`\`
topic: "Notion"
limit: 20
sortBy: "top"
\`\`\`

**Popular topics:**
- Notion, VS Code, Slack, Figma, GitHub
- ChatGPT, Midjourney, Docker, Kubernetes
- Use get_topics tool for the complete list

### Discover trending requests
Use \`scrape_requests\` to fetch fresh data from platforms:

\`\`\`
topic: "AI code review"
platforms: ["reddit", "x"]
wait: true
\`\`\`

**Use cases:**
- Research emerging topics
- Validate new ideas
- Monitor competitor feature requests
- Track user sentiment

## Tips for Best Results

1. **Enable expand=true** for comprehensive search results
2. **Use specific product names** for better filtering
3. **Check rate limits** in your [dashboard](https://requesthunt.com/dashboard)
4. **Combine tools** - search first, then scrape for fresh data
5. **Filter by platform** to understand community-specific needs

## Rate Limits

| Tier | Cached Requests | Realtime Requests |
|------|-----------------|-------------------|
| Free | 150/month | 20/month |
| Pro | 2000/day | 500/month |

## Next Steps

- Try the prompts: \`discover-requests\`, \`analyze-trends\`, \`compare-platforms\`
- Explore examples: \`examples://queries\`
- Learn more: [RequestHunt Documentation](https://requesthunt.com/docs)
`,
          },
        ],
      };
    }
  );

  // 3. Example Queries Resource
  server.resource(
    "Example Queries",
    "examples://queries",
    {
      description: "Example queries for common use cases",
      mimeType: "application/json",
    },
    async () => {
      return {
        contents: [
          {
            uri: "examples://queries",
            mimeType: "application/json",
            text: JSON.stringify(
              {
                description:
                  "Example queries for common use cases with RequestHunt MCP server",
                examples: [
                  {
                    use_case: "Product Research",
                    description:
                      "Research what users want in project management tools",
                    user_query:
                      "Find what users want in project management tools",
                    tool: "search_requests",
                    params: {
                      query: "project management features",
                      expand: true,
                      limit: 30,
                    },
                  },
                  {
                    use_case: "Competitor Analysis",
                    description:
                      "Compare feature requests between competing products",
                    user_query: "Compare Notion vs Obsidian feature requests",
                    tool: "list_requests",
                    params: {
                      topic: "Notion",
                      limit: 20,
                      sortBy: "top",
                    },
                    followup: {
                      tool: "list_requests",
                      params: {
                        topic: "Obsidian",
                        limit: 20,
                        sortBy: "top",
                      },
                    },
                  },
                  {
                    use_case: "Trend Discovery",
                    description: "Discover trending requests for AI tools",
                    user_query:
                      "What are people requesting for AI coding assistants?",
                    tool: "search_requests",
                    params: {
                      query: "AI coding assistant features",
                      expand: true,
                      platforms: ["reddit", "x", "github"],
                    },
                  },
                  {
                    use_case: "Fresh Data Collection",
                    description: "Scrape fresh data for emerging topics",
                    user_query:
                      "Scrape latest requests about graphene batteries",
                    tool: "scrape_requests",
                    params: {
                      topic: "graphene battery",
                      platforms: ["reddit", "x"],
                      wait: true,
                    },
                  },
                  {
                    use_case: "Topic Exploration",
                    description: "Browse all available topics",
                    user_query:
                      "What topics can I search feature requests for?",
                    tool: "get_topics",
                    params: {},
                  },
                  {
                    use_case: "Platform-Specific Research",
                    description:
                      "Focus on feature requests from a specific platform",
                    user_query: "Find VS Code requests from Reddit only",
                    tool: "list_requests",
                    params: {
                      topic: "VS Code",
                      platform: "reddit",
                      limit: 25,
                    },
                  },
                ],
              },
              null,
              2
            ),
          },
        ],
      };
    }
  );

  // 4. API Rate Limits Resource
  server.resource(
    "API Rate Limits",
    "stats://limits",
    {
      description: "API rate limits and usage information",
      mimeType: "application/json",
    },
    async () => {
      return {
        contents: [
          {
            uri: "stats://limits",
            mimeType: "application/json",
            text: JSON.stringify(
              {
                description: "RequestHunt API rate limits and usage tiers",
                rate_limits: {
                  free: {
                    cached_requests: "150/month",
                    cached_requests_detail:
                      "Search and list requests from cached data",
                    realtime_requests: "20/month",
                    realtime_requests_detail:
                      "Scraping and expand=true searches",
                  },
                  pro: {
                    cached_requests: "2000/day",
                    cached_requests_detail:
                      "Search and list requests from cached data",
                    realtime_requests: "500/month",
                    realtime_requests_detail:
                      "Scraping and expand=true searches",
                  },
                },
                tools_consumption: {
                  search_requests: {
                    "expand=false": "Consumes cached quota",
                    "expand=true": "Consumes realtime quota if needed",
                  },
                  list_requests: {
                    "source=cached": "Consumes cached quota (default)",
                    "source=realtime": "Consumes realtime quota",
                  },
                  get_topics: {
                    quota: "No quota consumption",
                  },
                  scrape_requests: {
                    quota: "Always consumes realtime quota",
                  },
                },
                links: {
                  dashboard: "https://requesthunt.com/dashboard",
                  upgrade: "https://requesthunt.com/pricing",
                  documentation: "https://requesthunt.com/docs",
                },
              },
              null,
              2
            ),
          },
        ],
      };
    }
  );
}
