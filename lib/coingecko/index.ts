import { CoingeckoFetchOptions, GlobalMarketData, MarketCoin, TrendingCoin, TrendingResponse } from "./types";

const coingeckoFetch = async <T>({ endpoint, params }: CoingeckoFetchOptions): Promise<T> => {
  const baseUrl = 'https://pro-api.coingecko.com/api/v3';

  const url = new URL(`${baseUrl}/${endpoint}`);
  if (params) {
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key].toString()));
  }
  const response = await fetch(url.toString(), {
    headers: {
      'accept': 'application/json',
      'x-cg-pro-api-key': process.env.EXPO_PUBLIC_COINGECKO_API ?? '',
    }
  });
  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }

  const data: T = await response.json();
  return data;
};

export const fetchTrendingData = async (): Promise<TrendingCoin[]> => {
  try {
    const trendingData = await coingeckoFetch<TrendingResponse>({
      endpoint: 'search/trending',
    });

    return trendingData.coins;
  } catch (error) {
    console.error('Error fetching trending data:', error);
    throw error;
  }
};

export const fetchCoinsByMarketCap = async (): Promise<MarketCoin[]> => {
  try {
    const coins = await coingeckoFetch<MarketCoin[]>({
      endpoint: 'coins/markets',
      params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: 10,
        page: 1,
      },
    });

    return coins;
  } catch (error) {
    console.error('Error fetching coins by market cap:', error);
    throw error;
  }
};

export const fetchGlobalMarketData = async (): Promise<GlobalMarketData> => {
  try {
    const globalData = await coingeckoFetch<GlobalMarketData>({
      endpoint: 'global',
    });

    return globalData;
  } catch (error) {
    console.error('Error fetching global market data:', error);
    throw error;
  }
};