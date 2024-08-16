import RadixIcon from '@/components/RadixIcon'
import MoreButton from '@/components/common/MoreButton'
import useAppProvider from '@/hooks/useAppProvider'
import Colors from '@/lib/Colors'
import { Transaction } from '@/lib/types'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { FormattedNumber } from 'react-intl'
import { Image, Text, View } from 'react-native'

export default function TransactionPannel() {
  const { address } = useAppProvider()
  const { data } = useQuery({
    queryKey: ['portfolio-transaction'],
    queryFn: async () => {
      const response = await fetch(process.env.EXPO_PUBLIC_SERVER_URL + '/api/v1/portfolio/transaction/' + address)
      return await response.json() as Transaction[]
    }
  })
  return (
    <View>
      <View className='flex-row items-center mt-4'>
        <Text className='flex-1 text-white font-midnight-sans-st-36'>
          Recent transactions
        </Text>
        <MoreButton />
      </View>
      {
        data?.slice(0, 5).map((item, idx) => (
          <View
            key={idx}
            className='flex-row py-4 border-b border-base-200'
          >
            <View className='flex-row items-center flex-1'>
              <RadixIcon name={item.receive ? 'arrow-up' : 'arrow-down'} size={16} color={Colors.white} />
              <Image
                className='mx-2'
                source={require('@/assets/images/Ethereum.png')}
              />
              <View>
                <Text className='text-sm text-white font-midnight-sans-st-36'>
                  {item.token?.name} Transfer in
                </Text>
                <Text className='text-sm text-gray font-midnight-sans-st-36'>
                  {
                    new Date(item.timeStamp).toUTCString()
                  } 
                </Text>
              </View>
            </View>
            <Text className='text-sm text-white font-midnight-sans-st-36'>
              {
                <FormattedNumber
                  value={Number(item.value) / Math.pow(10, Number(item.token?.decimals ?? 0))}
                  style="decimal"
                  minimumFractionDigits={0}
                  maximumFractionDigits={2}
                />
              } {item.token?.symbol}
            </Text>
          </View>
        ))
      }
    </View>
  )
}