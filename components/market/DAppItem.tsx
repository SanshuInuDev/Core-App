import { TrendingCoin } from "@/lib/types";
import { Image, Text, View } from "react-native";

interface Props {
  data: TrendingCoin
}

export default function DAppItem(
  { data: { item } }: Props
) {
  return <View className="items-center mr-6">
    <Image
      className="w-6 h-6 rounded-full"
      width={24}
      height={24}
      source={{
        uri: item.small
      }}
    />
    <Text className="mt-2 text-sm text-white font-midnight-sans-st-36">{item.name}</Text>
  </View>
}