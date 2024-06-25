import { NewsArticle } from "@/lib/cryptopanic/types";
import { Image, Text, View } from "react-native";

interface Props {
  data: NewsArticle
}

export default function TrendingSocialItem({ data }: Props) {

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
        <View className='flex-row items-center '>
          <View className="flex-row mr-1">
            <Image source={require('@/assets/images/twitter.png')} />
            <Image className="ml-[-12px]" source={require('@/assets/images/social-user.png')} />
          </View>
          <Text className='text-sm text-gray font-midnight-sans-st-36'>{timeTxt}</Text>
        </View>
        <View className="pr-6">
          <Text className='leading-8 text-white font-midnight-sans-st-36'>{data.title}</Text>
          <Text className='text-sm text-gray font-midnight-sans-st-36'>{'@username'}</Text>
        </View>
      </View>
      <Image source={require('@/assets/images/blog.png')} />
    </View>
  )
}