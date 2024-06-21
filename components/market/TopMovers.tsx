
import { ScrollView, Text, View } from 'react-native';
import MoverItem from './MoverItem';
import { useCallback, useEffect, useState } from 'react';
import { CoinMarket } from '@/lib/types';

export default function TopMovers() {
  const [movers, setMovers] = useState<CoinMarket[]>([])

  const loadData = useCallback(async () => {
    try {
      const fetchData = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10")
      const json = await fetchData.json() as CoinMarket[]
      setMovers(json)
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    loadData()
  }, [])
  return <View>
    <Text className='text-white text-5 font-midnight-sans-st-36'>Top Movers</Text>
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="mt-4">
      <View className="flex-row">
        {
          movers.map((mover) => <MoverItem key={mover.id} data={mover} />)
        }
      </View>
    </ScrollView>
  </View>
}
