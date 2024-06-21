import { TrendingResponse } from "@/lib/types";
import { useCallback, useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import DAppItem from "./DAppItem";

export default function FeaturedDApps() {
  const [dApps, setDApps] = useState<TrendingResponse>({
    coins: [],
    exchanges: []
  })

  const loadData = useCallback(async () => {
    try {
      const fetchData = await fetch("https://api.coingecko.com/api/v3/search/trending")
      const json = await fetchData.json() as TrendingResponse
      setDApps(json)
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    loadData()
  }, [])

  return (
    <View>
      <Text className='text-white text-5 font-midnight-sans-st-36'>Featured dApps</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="pt-4">
        <View className="flex-row">
          {
            dApps.coins.map(coin => {
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
