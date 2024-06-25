
export interface CoinMarket {
  id: string
  symbol: string
  name: string
  image: string
  current_price: number
  market_cap: number
  market_cap_rank: number
  fully_diluted_valuation: number | null
  total_volume: number
  high_24h: number
  low_24h: number
  price_change_24h: number
  price_change_percentage_24h: number
  market_cap_change_24h: number
  market_cap_change_percentage_24h: number
  circulating_supply: number
  total_supply: number | null
  max_supply: number | null
  ath: number
  ath_change_percentage: number
  ath_date: string
  atl: number
  atl_change_percentage: number
  atl_date: string
  roi: null | {
    times: number
    currency: string
    percentage: number
  }
  last_updated: string
}

export interface CryptoNewsResponse {
  count: number
  next: string | null
  previous: string | null
  results: CryptoPanicNews[]
}

interface CryptoPanicNews {
  kind: string
  domain: string
  votes: Votes
  source: Source
  title: string
  published_at: string
  slug: string
  currencies: Currency[]
  id: number
  url: string
  created_at: string
  metadata: {
    description: string
  }
}

interface Votes {
  negative: number
  positive: number
  important: number
  liked: number
  disliked: number
  lol: number
  toxic: number
  saved: number
  comments: number
}

interface Source {
  title: string
  region: string
  domain: string
  path: string | null
}

interface Currency {
  code: string
  title: string
  slug: string
  url: string
}