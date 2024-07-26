import { FetchFunction, FetchOptions } from "./types";

export const fetcher: FetchFunction = async <TResponse, TBody = undefined>({
  endpoint,
  params,
  headers,
  method = 'GET',
  body,
}: FetchOptions<TBody>): Promise<TResponse> => {

  const url = new URL(endpoint);

  if (params) {
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key].toString()));
  }

  const options: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  };

  if (body && (method === 'POST' || method === 'PUT')) {
    options.body = JSON.stringify(body);
  }
  const response = await fetch(url.toString(), options);
  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }

  const data: TResponse = await response.json();
  return data;
};

export default fetcher