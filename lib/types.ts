
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

export interface PortfolioCrypto {
  "token_address": `0x${string}`,
  "name": string,
  "symbol": string,
  "logo": string,
  "thumbnail": string,
  "decimals": number,
  "balance": string,
  "possible_spam": boolean,
  "verified_contract": boolean,
  "usd_price": number,
  "usd_price_24hr_percent_change": number,
  "usd_price_24hr_usd_change": number,
  "usd_value_24hr_usd_change": number,
  "usd_value": number,
  "portfolio_percentage": number,
  "balance_formatted": string,
  "native_token": boolean,
  "total_supply": string,
  "total_supply_formatted": string,
  "percentage_relative_to_total_supply": number
}

export interface PortfolioNft {
  token_address: string
  contract_type: string
  name: string
  symbol: string
  possible_spam: boolean
  verified_collection: boolean
  count?: number | undefined
  collection_logo?: string | undefined
  collection_banner_image?: string | undefined
}

interface TokenDetails {
  name: string;
  symbol: string;
  label: string;
  decimals: string;
  address: string;
}

export interface Transaction {
  hash: string,
  timeStamp: string;
  receive: string;
  from: string;
  to: string;
  chainId: string;
  value: string;
  token: TokenDetails | null;
}

export interface TokenInfo {
  token: string
  symbol: string
  chainId: string
}
export interface WatchListType {
  created_at: string;
  default: boolean | null;
  id: number;
  title: string;
  userId: string | null;
}

export interface WatchListItemType {
  coinId: string
  created_at: string
  id: number
  watchListId: number | null
}

export interface WatchListItemResponse {
  title: string
  id: number
  coins: string[]
  items: CoinMarket[]
}

export interface UserWalletInfo {
  address: string
  addressId: number
  username: string | null | undefined
  usd_value: number
  usd_change: number
}

export interface WatchAdressResponse {
  title: string
  id: number
  items: UserWalletInfo[]
}


export interface Wallet {
  address: string | null;
  id: number;
  title: string | null;
  type: string | null;
  userId: string | null;
}