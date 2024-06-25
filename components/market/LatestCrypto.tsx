
import RadixIcon from '@/components/RadixIcon';
import { fetchLatestNews } from '@/lib/fetcher/client';
import { useQuery } from '@tanstack/react-query';
import { Text, TouchableOpacity, View } from "react-native";
import { SheetManager } from "react-native-actions-sheet";
import LatestCryptoItem from "./LatestCryptoItem";

export default function LatestCrypto() {
  const { data } = useQuery({
    queryKey: ['latestNews'],
    queryFn: fetchLatestNews
  })
  return <View>
    <View className='flex-row items-center'>
      <Text className='flex-1 text-white text-5 font-midnight-sans-st-36' >Latest in crypto</Text>
      <TouchableOpacity
        onPress={() => {
          SheetManager.show('news-sheet')
        }}>
        <View className='flex-row items-center px-4 py-2 rounded-full bg-base200'>
          <Text className='mr-1 text-sm text-white font-midnight-sans-st-36'>More</Text>
          <RadixIcon name='arrow-right' size={16} color={'white'} />
        </View>
      </TouchableOpacity>
    </View>
    <View className='mt-4'>
      {
        data?.results?.slice(0, 3)?.map((item, idx) => <LatestCryptoItem key={idx} data={item} />)
      }
    </View>
  </View>
}