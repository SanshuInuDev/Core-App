import { CoinMarket } from "@/lib/types";
import { Image, Text, TouchableOpacity, View } from "react-native";
import RadixIcon from "../RadixIcon";
import Colors from "@/lib/Colors";

interface Props {
  data: CoinMarket
  onPress?: () => void
  checked?: boolean
}

export default function SearchCryptoItem({
  data,
  onPress = () => { },
  checked = false
}: Props) {
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
      {
        checked && <RadixIcon name="star-filled" size={16} color={Colors.white} />
      }
    </TouchableOpacity>
  )
}