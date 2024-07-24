import Colors from "@/lib/Colors";
import { Image, Text, TouchableOpacity, View } from "react-native";
import RadixIcon from "../RadixIcon";
import { router } from "expo-router";

export default function WatchListItem() {
  return (
    <TouchableOpacity 
    onPress={() => {
      router.push('/watching/watch-wallet')
    }}
    className="flex-row items-center py-4 border-b border-gray"
    >
      <RadixIcon name="star-filled" color={Colors.white} size={16} />
      <Text className="mx-2 text-gray font-midnight-sans-st-36 ">1</Text>
      <Image
        source={require('@/assets/images/bitcoin.png')}
        width={24}
        height={24}
        className="mr-2 rounded-full"
      />
      <View className="flex-1">
        <Text className="text-sm text-white font-midnight-sans-st-36 ">Bitcoin</Text>
        <Text className="mt-1 text-sm text-gray font-midnight-sans-st-36 ">BTC</Text>
      </View>
      <View>
        <Text className="text-sm text-right text-white font-midnight-sans-st-36 ">$68,903.50</Text>
        <View className="flex-row items-center ml-1">
          <RadixIcon name="triangle-up" size={16} color={Colors.green} />
          <Text className="text-sm text-green font-midnight-sans-st-36">2.54%</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}