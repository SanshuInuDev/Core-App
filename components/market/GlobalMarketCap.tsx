import { fetchGlobalMarketData } from "@/lib/fetcher/client"
import { formatLargeNumber } from "@/lib/utils"
import { useQuery } from "@tanstack/react-query"
import { FormattedNumber } from "react-intl"
import { Platform, Text, View } from "react-native"
import { twMerge } from 'tailwind-merge'

type Props = {}

export default function GlobalMarketCap({ }: Props) {
  const { data } = useQuery({
    queryKey: ['globalMarketCap'],
    queryFn: fetchGlobalMarketData
  })
  const amount = data?.data.total_market_cap.usd ?? 0
  const percent = data?.data.market_cap_change_percentage_24h_usd ?? 0
  return (
    <View className='flex-row mt-2'>
      <Text className='text-sm text-white font-midnight-sans-st-36'>Global Market Cap </Text>
      <Text className='mr-1 text-sm text-green font-midnight-sans-st-36'>
        {
          Platform.OS === 'web' ?
            <FormattedNumber value={amount ?? 0} style="currency" currency="USD" notation="compact" /> :
            formatLargeNumber(amount ?? 0)
        }
      </Text>
      <Text
        className={twMerge(
          'text-sm font-midnight-sans-st-36',
          percent > 0 ? 'text-green' : 'text-red'
        )}>
        (<FormattedNumber value={(percent / 100) ?? 0} style="percent" minimumFractionDigits={0} maximumFractionDigits={2} />)
      </Text>
    </View>
  )
}