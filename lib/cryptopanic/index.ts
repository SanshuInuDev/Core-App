import { CryptopanicFetchOptions, LatestNewsResponse } from "./types";

const cryptopanicFetch = async <T>({ endpoint, params }: CryptopanicFetchOptions): Promise<T> => {
  const baseUrl = 'https://cryptopanic.com/api/v1';
  const apiKey = process.env.EXPO_PUBLIC_CRYPTOPANIC_API ?? ''

  const url = new URL(`${baseUrl}/${endpoint}`);

  url.searchParams.append('auth_token', apiKey);

  if (params) {
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key].toString()));
  }

  const response = await fetch(url.toString(), {
    headers: {
      'accept': 'application/json',
    }
  });

  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }

  const data: T = await response.json();
  return data;
};



export const fetchLatestNews = async (): Promise<LatestNewsResponse> => {
  try {
    const news = await cryptopanicFetch<LatestNewsResponse>({
      endpoint: 'posts/',
      params: {
        filter: 'rising',
        kind: 'news'
      }
    });
    return news;
  } catch (error) {
    console.error('Error fetching latest news:', error);
    throw error;
  }
};
