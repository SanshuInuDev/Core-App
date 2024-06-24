export type CryptopanicFetchOptions = {
  endpoint: string;
  params?: Record<string, string | number>;
  isPublic?: boolean;
};

interface Currency {
  code: string;
  title: string;
  slug: string;
  url: string;
}

interface Source {
  title: string;
  region: string;
  domain: string;
  path: string | null;
}

interface Votes {
  negative: number;
  positive: number;
  important: number;
  liked: number;
  disliked: number;
  lol: number;
  toxic: number;
  saved: number;
  comments: number;
}

interface Metadata {
  description: string;
}

export interface NewsArticle {
  kind: string;
  domain: string;
  source: Source;
  title: string;
  published_at: string;
  slug: string;
  currencies: Currency[];
  id: number;
  url: string;
  created_at: string;
  votes: Votes;
  metadata: Metadata;
}

export interface LatestNewsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: NewsArticle[];
}