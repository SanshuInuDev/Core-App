import { View, Text } from "react-native"

type Props = {}

export default function GlobalMarketCap({ }: Props) {
  return (
    <View className='flex-row mt-2'>
      <Text className='text-sm text-white font-midnight-sans-st-36'>Global Market Cap </Text>
      <Text className='text-sm text-green font-midnight-sans-st-36'> $2.38T (0.03%) </Text>
    </View>
  )
}