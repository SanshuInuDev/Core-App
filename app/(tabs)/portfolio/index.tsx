import IconList from '@/components/common/IconList';
import PortfolioSelectButtonList from '@/components/portfolio/PortfolioSelectButtonList';
import { SanshuServer } from '@/lib/fetcher/axios';
import { Wallet } from '@/lib/types';
import { useQuery } from '@tanstack/react-query';
import { router } from 'expo-router';
import { Text, View } from 'react-native';

export default function Portfolio() {
  const wallets = useQuery({
    queryKey: ['wallets'],
    queryFn: () => SanshuServer.get<Wallet[]>('/wallet')
  })

  if (wallets.data?.data.length) router.push('/portfolio/dashboard')

  return (
    <View>
      <View>
        <Text className='text-white font-midnight-sans-st-48 text-7.5'>Portfolio</Text>
      </View>
      <View className='mt-16 py-14'>
        <IconList />
        <Text
          className='mt-2 text-white text-5 font-midnight-sans-st-36'
        >
          Get started with your portfolio
        </Text>
        <Text className='mt-2 text-sm text-gray font-midnight-sans-st-36'>
          You can connect/watch a wallet address, exchange or add your transactions manually.
        </Text>
      </View>
      <PortfolioSelectButtonList />
    </View>
  )
}