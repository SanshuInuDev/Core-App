import RadixIcon from '@/components/RadixIcon';
import Colors from "@/lib/Colors";
import { CoinMarket } from "@/lib/types";
import { currencyForamt, percentFormat } from "@/lib/utils";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface Props {
  data: CoinMarket
  onPress?: () => void
}

export default function DiscoverItem({
  data,
  onPress = () => { }
}: Props) {
  const rate = percentFormat(data.market_cap_change_percentage_24h)
  return (
    <TouchableOpacity
      className='flex-row items-center py-4 border-b border-gray'
      onPress={onPress}
    >
      <Image
        source={{
          uri: data.image
        }}
        className="w-6 h-6 mr-2 rounded-full" />
      <View className='flex-1 '>
        <Text className='text-sm text-white font-midnight-sans-st-36'>{data.name}</Text>
        <Text className='text-sm uppercase text-gray font-midnight-sans-st-36'>{data.symbol}</Text>
      </View>

    </TouchableOpacity>
  )
}