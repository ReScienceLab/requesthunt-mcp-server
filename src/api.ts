import type {
  ApiResponse,
  SearchResult,
  SearchMeta,
  ListResult,
  Topic,
  ScrapeJob,
} from "./types.js";

const API_BASE = "https://requesthunt.com/api/v1";

function getApiKey(): string {
  const apiKey = process.env.REQUESTHUNT_API_KEY;
  if (!apiKey) {
    throw new Error(
      "REQUESTHUNT_API_KEY environment variable is required. " +
      "Get your API key at https://requesthunt.com/dashboard"
    );
  }
  return apiKey;
}

async function request<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const apiKey = getApiKey();
  
  const response = await fetch(`${API_BASE}${endpoint}`, {
    ...options,
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  const data = await response.json() as ApiResponse<T>;

  if (!response.ok) {
    throw new Error(data.error?.message || `API error: ${response.status}`);
  }

  return data;
}

export interface SearchParams {
  query: string;
  limit?: number;
  expand?: boolean;
  platforms?: ("reddit" | "x" | "github")[];
}

export async function searchRequests(params: SearchParams): Promise<{
  data: SearchResult;
  meta: SearchMeta;
}> {
  const response = await request<SearchResult>("/requests/search", {
    method: "POST",
    body: JSON.stringify(params),
  });

  return {
    data: response.data!,
    meta: response.meta as unknown as SearchMeta,
  };
}

export interface ListParams {
  topic?: string;
  category?: string;
  platform?: "x" | "reddit" | "github" | "requesthunt";
  limit?: number;
  cursor?: string;
  source?: "cached" | "realtime";
  sortBy?: "new" | "top";
}

export async function listRequests(params: ListParams): Promise<ListResult> {
  const searchParams = new URLSearchParams();
  
  if (params.topic) searchParams.set("topic", params.topic);
  if (params.category) searchParams.set("category", params.category);
  if (params.platform) searchParams.set("platforms", params.platform);
  if (params.limit) searchParams.set("limit", String(params.limit));
  if (params.cursor) searchParams.set("cursor", params.cursor);
  if (params.source) searchParams.set("source", params.source);
  if (params.sortBy) searchParams.set("sortBy", params.sortBy);

  const query = searchParams.toString();
  const endpoint = `/requests${query ? `?${query}` : ""}`;

  const response = await request<ListResult["data"]>(endpoint);

  return {
    data: response.data!,
    meta: response.meta as ListResult["meta"],
  };
}

export async function getTopics(): Promise<Topic[]> {
  const response = await request<Topic[]>("/topics");
  return response.data!;
}

export interface ScrapeParams {
  topic: string;
  platforms?: ("reddit" | "x" | "github")[];
}

export async function startScrapeJob(params: ScrapeParams): Promise<ScrapeJob> {
  const response = await request<ScrapeJob>("/scrape", {
    method: "POST",
    body: JSON.stringify(params),
  });
  return response.data!;
}

export async function getScrapeJobStatus(jobId: string): Promise<ScrapeJob> {
  const response = await request<ScrapeJob>(`/scrape/${jobId}`);
  return response.data!;
}
