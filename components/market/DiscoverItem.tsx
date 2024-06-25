import Colors from "@/lib/Colors";
import { CoinMarket } from "@/lib/types";
import RadixIcon from '@/components/RadixIcon';
import { Image, Text, View } from "react-native";
import { currencyForamt, percentFormat } from "@/lib/utils";

interface Props {
  no: number
  data: CoinMarket
}

export default function DiscoverItem(
  { data, no }: Props
) {
  const rate = percentFormat(data.market_cap_change_percentage_24h)
  return <View className='flex-row items-center py-4 border-b border-gray'>
    <Text className='w-5 text-gray'>{no}</Text>
    <Image
      source={{
        uri: data.image
      }}
      className="w-6 h-6 mr-2 rounded-full" />
    <View className='flex-1 '>
      <Text className='text-sm text-white font-midnight-sans-st-36'>{data.name}</Text>
      <Text className='text-sm uppercase text-gray font-midnight-sans-st-36'>{data.symbol}</Text>
    </View>
    <View>
      <Text className='text-sm text-right text-white font-midnight-sans-st-36'>{currencyForamt(data.current_price)}</Text>
      <View className='flex-row items-center mt-1'>
        {
          data.market_cap_change_percentage_24h > 0 ?
            <RadixIcon name={"triangle-up"} size={16} color={Colors.green} /> :
            <RadixIcon name={"triangle-down"} size={16} color={Colors.red} />
        }
        <Text className={"font-midnight-sans-st-36 text-sm " + (data.market_cap_change_percentage_24h > 0 ? 'text-green' : 'text-red')}>{rate}</Text>
      </View>
    </View>
  </View>
}