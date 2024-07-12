import { fetchCoinsByMarketCap } from '@/lib/fetcher/client';
import { useQuery } from '@tanstack/react-query';
import { ScrollView, Text, View } from 'react-native';
import MoverItem from './MoverItem';

export default function TopMovers() {

  const { data } = useQuery({
    queryKey: ['topMovers'],
    queryFn: fetchCoinsByMarketCap
  })

  return <View>
    <Text className='text-white text-5 font-midnight-sans-st-36'>Top Movers</Text>
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="mt-4">
      <View className="flex-row">
        {
          data?.map((mover) => <MoverItem key={mover.id} data={mover} />)
        }
      </View>
    </ScrollView>
  </View>
}
