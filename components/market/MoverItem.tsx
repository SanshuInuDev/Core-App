import Colors from '@/lib/Colors';
import { CoinMarket } from '@/lib/types';
import RadixIcon from '@/components/RadixIcon';
import { Image, Text, View } from 'react-native';

interface Props {
  data: CoinMarket
}

export default function MoverItem(
  {
    data
  }: Props
) {
  const rate = Math.round(data.market_cap_change_percentage_24h * 10000) / 100
  const dispPrice = Math.round(data.current_price * 100) / 100
  return <View className='pr-5 mr-2'>
    <Image
      className="w-6 h-6 rounded-full"
      source={{
        uri: data.image
      }}
    />
    <Text className='mt-2 text-sm text-white font-midnight-sans-st-36'>{data.name}</Text>
    <Text className='mt-1 text-sm text-gray font-midnight-sans-st-36'>${dispPrice}</Text>
    <View className='flex-row items-center mt-2'>
      {
        rate > 0 ?
          <RadixIcon name={"triangle-up"} size={16} color={Colors.green} /> :
          <RadixIcon name={"triangle-down"} size={16} color={Colors.red} />
      }
      <Text className={rate > 0 ? 'text-green' : 'text-red'}>{rate}%</Text>
    </View>
  </View>
}