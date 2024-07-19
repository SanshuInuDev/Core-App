import { Platform } from "react-native"
import fetcher from "."
import { GlobalMarketData, MarketCoin, TrendingCoin } from "../coingecko/types"
import { NewsResponse } from "../cryptopanic/types"

const SERVER_URL = Platform.OS === 'web' ? process.env.EXPO_PUBLIC_SERVER_URL : process.env.EXPO_PUBLIC_SERVER_URL

const makeEndpoint = (url: string) => {
  return `${SERVER_URL}/api/v1${url}`
}

export const fetchGlobalMarketData = () => fetcher<GlobalMarketData>({
  endpoint: makeEndpoint('/crypto-info/global')
})

export const fetchTrendingData = () => fetcher<TrendingCoin[]>({
  endpoint: makeEndpoint('/crypto-info/trending')
})

export const fetchCoinsByMarketCap = () => fetcher<MarketCoin[]>({
  endpoint: makeEndpoint('/crypto-info/discover')
})

export const fetchLatestNews = () => fetcher<NewsResponse>({
  endpoint: makeEndpoint('/crypto-news/latest')
})

export const fetchTrendingNews = () => fetcher<NewsResponse>({
  endpoint: makeEndpoint('/crypto-news/trending')
})