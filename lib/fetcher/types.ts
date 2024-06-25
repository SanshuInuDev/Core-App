type FetchParams = Record<string, string | number>;

export interface FetchOptions<TBody> {
  endpoint: string;
  params?: FetchParams;
  headers?: HeadersInit;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: TBody;
}

export type FetchFunction = <TResponse, TBody = undefined>(options: FetchOptions<TBody>) => Promise<TResponse>;
