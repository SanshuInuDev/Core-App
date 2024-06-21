
import RadixIcon from '@/components/RadixIcon';
import { useCallback, useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SheetManager } from "react-native-actions-sheet";
import LatestCryptoItem, { CryptoNews } from "./LatestCryptoItem";

interface CryptoNewsResponse {
  results: CryptoNews[]
}

export default function LatestCrypto() {
  const [news, setNews] = useState<CryptoNews[]>([])

  useEffect(() => {
    loadData()
  }, [])

  const loadData = useCallback(async () => {
    try {
      const fetchData = await fetch("https://cryptopanic.com/api/v1/posts/?auth_token=54b9c4ec5db577b00bc094d840c7fdf181d5dd91&kind=news&count=3")
      const json = await fetchData.json() as CryptoNewsResponse
      setNews(json.results.slice(0, 3))
    } catch (error) {
      console.error(error)
    }
  }, [])

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
        news?.map((item, idx) => <LatestCryptoItem key={idx} data={item} />)
      }
    </View>
  </View>
}