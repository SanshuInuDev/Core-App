import Colors from "@/lib/Colors";
import { Image, Text, TouchableOpacity, View } from "react-native";
import RadixIcon from "../RadixIcon";
import { router } from "expo-router";
import { CoinMarket } from "@/lib/types";
import { twMerge } from "tailwind-merge";
import { currencyForamt, percentFormat } from "@/lib/utils";

type Props = {
  info: CoinMarket
  onCoinDelete: (id: string) => void
}

export default function WatchListItem({
  info, onCoinDelete
}: Props) {
  const rate = percentFormat(info.market_cap_change_percentage_24h)
  return (
    <TouchableOpacity
      onPress={() => {
        router.push('/watching/watch-wallet')
      }}
      className="flex-row items-center py-4 border-b border-gray"
    >
      <TouchableOpacity
        onPress={() => {
          onCoinDelete(info.id)
        }}>
        <RadixIcon name="star-filled" color={Colors.white} size={16} />
      </TouchableOpacity>
      <Text className="mx-2 text-gray font-midnight-sans-st-36 ">{info.market_cap_rank}</Text>
      <Image
        source={{
          uri: info.image
        }}
        width={24}
        height={24}
        className="mr-2 rounded-full"
      />
      <View className="flex-1">
        <Text className="text-sm text-white font-midnight-sans-st-36 ">{info.name}</Text>
        <Text className="mt-1 text-sm uppercase text-gray font-midnight-sans-st-36">{info.symbol}</Text>
      </View>
      <View>
        <Text className="text-sm text-right text-white font-midnight-sans-st-36 ">
          {currencyForamt(info.current_price)}
        </Text>
        <View className="flex-row items-center ml-1">
          <RadixIcon
            name={info.market_cap_change_percentage_24h > 0 ? "triangle-up" : "triangle-down"}
            size={16}
            color={info.market_cap_change_percentage_24h > 0 ? Colors.green : Colors.red}
          />
          <Text className={twMerge([
            "text-sm font-midnight-sans-st-36 text-right",
            info.market_cap_change_percentage_24h > 0 ? "text-green " : "text-red"
          ])}>
            {rate}
          </Text>

        </View>
      </View>
    </TouchableOpacity>
  )
}