import MoreButton from '@/components/common/MoreButton';
import { fetchCoinsByMarketCap } from '@/lib/fetcher/client';
import { useQuery } from "@tanstack/react-query";
import { Text, View } from 'react-native';
import { SheetManager } from 'react-native-actions-sheet';
import DiscoverItem from './DiscoverItem';

export default function Discover() {
  const { data } = useQuery({
    queryKey: ['marketCap'],
    queryFn: fetchCoinsByMarketCap
  })

  return <View>
    <View className='flex-row items-center'>
      <Text className='flex-1 text-white font-midnight-sans-st-36 text-5'>Discover</Text>
      <MoreButton
        onPress={() => {
          SheetManager.show('discover-sheet')
        }}
      />
    </View>
    <View className='mt-4'>
      {
        data?.map((item, idx) => (
          <DiscoverItem key={idx} no={idx + 1} data={item} />
        ))
      }
    </View>
  </View>
}
