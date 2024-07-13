import MoreButton from '@/components/common/MoreButton';
import { fetchLatestNews } from '@/lib/fetcher/client';
import { useQuery } from '@tanstack/react-query';
import { Text, View } from "react-native";
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
      <MoreButton
        onPress={() => {
          SheetManager.show('news-sheet')
        }}
      />
    </View>
    <View className='mt-4'>
      {
        data?.results?.slice(0, 3)?.map((item, idx) => <LatestCryptoItem key={idx} data={item} />)
      }
    </View>
  </View>
}