import { useQuery } from "@tanstack/react-query";
import { ScrollView, Text, View } from "react-native";
import DAppItem from "./DAppItem";
import { fetchTrendingData } from "@/lib/fetcher/client";

export default function FeaturedDApps() {
  const { data } = useQuery({
    queryKey: ['trending'],
    queryFn: fetchTrendingData
  })

  return (
    <View>
      <Text className='text-white text-5 font-midnight-sans-st-36'>Featured dApps</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="pt-4">
        <View className="flex-row">
          {
            data?.map(coin => {
              return (
                <DAppItem
                  key={coin.item.id}
                  data={coin}
                />
              )
            })
          }
        </View>
      </ScrollView>
    </View>
  )
}
