import RadixIcon from '@/components/RadixIcon'
import useAppProvider from '@/hooks/useAppProvider'
import Colors from '@/lib/Colors'
import { fetchCryptoPortfolio } from '@/lib/fetcher/client'
import { PortfolioCrypto } from '@/lib/types'
import { formatLargeNumber } from '@/lib/utils'
import { useQuery } from '@tanstack/react-query'
import { FormattedNumber } from "react-intl"
import { Image, Platform, Text, View } from 'react-native'
import { twMerge } from 'tailwind-merge'

export default function CryptoPannel() {
  const { address } = useAppProvider()
  const { data } = useQuery({
    queryKey: ['portfolio-crypto'],
    queryFn: () => {
      if (address) return fetchCryptoPortfolio(address)
    }
  })
  return (
    <View>
      <Text className='text-white font-midnight-sans-st-36'>
        Crypto
      </Text>
      {
        data?.slice(0, 5).map((item, idx) => {
          const percent = item.usd_price_24hr_percent_change
          const amount = Number(item.balance_formatted) * item.usd_price
          return (
            <View
              key={idx}
              className='flex-row items-center py-4 border-b border-base-200'
            >
              <View className='flex-row items-end mr-2'>
                <Image
                  source={{
                    uri: item.logo,
                    width: 24,
                    height: 24
                  }}
                />
                <Image
                  className='w-4 h-4 ml-[-8]'
                  source={require('@/assets/images/Ethereum.png')}
                />
              </View>
              <View className='flex-1'>
                <Text className='text-sm text-white font-midnight-sans-st-36'>
                  {item.name}
                </Text>
                <Text className='text-sm text-gray font-midnight-sans-st-36'>
                  {Number(item.balance_formatted)} {item.symbol}
                </Text>
              </View>
              <View>
                <Text className='text-sm text-right text-white font-midnight-sans-st-36'>
                  {
                    Platform.OS === 'web' ?
                      <FormattedNumber value={amount ?? 0} style="currency" currency="USD" notation="compact" /> :
                      formatLargeNumber(amount ?? 0)
                  }
                </Text>
                <View className='flex-row items-center justify-end'>
                  <RadixIcon
                    size={16}
                    color={percent > 0 ? Colors.green : Colors.red}
                    name={percent > 0 ? 'triangle-up' : 'triangle-down'}
                  />
                  <Text className={twMerge(
                    'text-sm text-right font-midnight-sans-st-36',
                    percent > 0 ? 'text-green' : 'text-red'
                  )}>
                    <FormattedNumber
                      value={(percent / 100) ?? 0}
                      style="percent"
                      minimumFractionDigits={0}
                      maximumFractionDigits={2}
                    />
                  </Text>
                </View>
              </View>
            </View>
          )
        })
      }

    </View>
  )
}