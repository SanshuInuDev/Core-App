import RadixIcon from '@/components/RadixIcon';
import Colors from '@/lib/Colors';
import { CoinMarket } from '@/lib/types';
import { currencyForamt, percentFormat } from '@/lib/utils';
import { Image, Text, View } from 'react-native';

interface Props {
  data: CoinMarket
}

export default function MoverItem(
  {
    data
  }: Props
) {
  const rate = percentFormat(data.market_cap_change_percentage_24h) 
  return <View className='pr-5 mr-2'>
    <Image
      className="w-6 h-6 rounded-full"
      source={{
        uri: data.image
      }}
    />
    <Text className='mt-2 text-sm text-white font-midnight-sans-st-36'>{data.name}</Text>
    <Text className='mt-1 text-sm text-gray font-midnight-sans-st-36'>{currencyForamt(data.current_price)}</Text>
    <View className='flex-row items-center mt-2'>
      {
        data.market_cap_change_percentage_24h > 0 ?
          <RadixIcon name={"triangle-up"} size={16} color={Colors.green} /> :
          <RadixIcon name={"triangle-down"} size={16} color={Colors.red} />
      }
      <Text className={data.market_cap_change_percentage_24h > 0 ? 'text-green' : 'text-red'}>{rate}</Text>
    </View>
  </View>
}