export interface FeatureRequest {
  _id: string;
  title: string;
  description: string;
  votes: number;
  commentCount: number;
  sourcePlatform: "x" | "reddit" | "github" | "requesthunt";
  sourceUrl?: string;
  topic?: string;
  tags?: string[];
  authorName?: string;
  authorHandle?: string;
  authorProfileUrl?: string;
  createdAt: number;
  originalCreatedAt?: number;
}

export interface SearchResult {
  results: FeatureRequest[];
  hasMore: boolean;
  limitReached: boolean;
}

export interface SearchMeta {
  originalQuery: string;
  cachedResults: number;
  expanded: boolean;
  expandedTopics?: string[];
  topicsScraped?: number;
  topicsSkipped?: number;
  newResultsFound?: number;
  githubSkipped?: boolean;
  scrapingTimeMs?: number;
}

export interface ListResult {
  data: FeatureRequest[];
  meta: {
    cursor: string | null;
    hasMore: boolean;
  };
}

export interface Topic {
  slug: string;
  name: string;
  topics: string[];
}

export interface UsageStats {
  cached: {
    used: number;
    limit: number;
    remaining: number;
    resetsAt: string;
  };
  realtime: {
    used: number;
    limit: number;
    remaining: number;
    resetsAt: string;
  };
}

export interface ApiResponse<T> {
  data?: T;
  meta?: Record<string, unknown>;
  usage?: UsageStats;
  error?: {
    code: string;
    message: string;
  };
}

export interface ScrapeJob {
  jobId: string;
  status: "pending" | "running" | "completed" | "failed";
  topic: string;
  platforms: ("reddit" | "x" | "github")[];
  progress?: Record<string, "pending" | "running" | "done" | "error" | "skipped">;
  requestsCreated?: number;
  startedAt?: string;
  completedAt?: string;
  error?: string;
}
