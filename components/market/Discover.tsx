import RadixIcon from '@/components/RadixIcon';
import { fetchCoinsByMarketCap } from '@/lib/fetcher/client';
import { useQuery } from "@tanstack/react-query";
import { Text, TouchableOpacity, View } from 'react-native';
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
      <TouchableOpacity
        onPress={() => {
          SheetManager.show('discover-sheet')
        }}>
        <View className='flex-row items-center px-4 py-2 rounded-full bg-base200'>
          <Text className='mr-1 text-sm text-white font-midnight-sans-st-36'>More</Text>
          <RadixIcon name='arrow-right' size={16} color={'white'} />
        </View>
      </TouchableOpacity>
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
