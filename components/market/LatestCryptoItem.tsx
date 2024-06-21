import { Image, Text, View } from "react-native";

export interface CryptoNews {
  domain: string
  source: {
    title: string
  },
  title: string
  published_at: string
}

interface Props {
  data: CryptoNews
}

export default function LatestCryptoItem({ data }: Props) {
  const defferentTiem = new Date().getTime() - new Date(data.published_at).getTime();
  const time = defferentTiem / 1000 / 60;
  let timeTxt = Math.ceil(time) + 'min'
  if (time > 60)
    timeTxt = Math.ceil(time / 60) + 'hr'
  else if (time > 1440)
    timeTxt = Math.ceil(time / 1440) + 'day'
  return (
    <View className='flex-row items-end py-4 border-b border-gray'>
      <View className='flex-1 '>
        <View className='flex-row '>
          <Text className='mr-1 text-sm text-white font-midnight-sans-st-36'>{data.source.title}</Text>
          <Text className='text-sm text-gray font-midnight-sans-st-36'>{timeTxt}</Text>
        </View>
        <Text className='pr-6 leading-8 text-white font-midnight-sans-st-36'>{data.title}</Text>
      </View>
      <Image source={require('@/assets/images/blog.png')} />
    </View>
  )
}