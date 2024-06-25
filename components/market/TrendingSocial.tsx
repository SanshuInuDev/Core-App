import { fetchTrendingNews } from "@/lib/fetcher/client";
import { useQuery } from "@tanstack/react-query";
import { Text, View } from "react-native";
import TrendingSocialItem from "./TrendingSocialItem";

export default function TrendingSocial() {
  const { data } = useQuery({
    queryKey: ['trendingNews'],
    queryFn: fetchTrendingNews
  })
  return <View>
    <View className='flex-row items-center'>
      <Text className='flex-1 text-white text-5 font-midnight-sans-st-36' >Trending on social</Text>
    </View>
    <View className='mt-4'>
      {
        data?.results?.slice(0, 3)?.map((item, idx) => (
          <TrendingSocialItem key={idx} data={item} />
        ))
      }
    </View>
  </View>
}