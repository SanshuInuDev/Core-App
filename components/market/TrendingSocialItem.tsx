import { Image, Text, View } from "react-native";

export interface SocialNews {
  time: string
  title: string
  author: string
}

interface Props {
  data: SocialNews
}

export default function TrendingSocialItem({ data }: Props) {
  return (
    <View className='flex-row items-end py-4 border-b border-gray'>
      <View className='flex-1 '>
        <View className='flex-row items-center '>
          <View className="flex-row mr-1">
            <Image source={require('@/assets/images/twitter.png')} />
            <Image className="ml-[-12px]" source={require('@/assets/images/social-user.png')} />
          </View>
          <Text className='text-sm text-gray font-midnight-sans-st-36'>{data.time}</Text>
        </View>
        <View className="pr-6">
          <Text className='leading-8 text-white font-midnight-sans-st-36'>{data.title}</Text>
          <Text className='text-sm text-gray font-midnight-sans-st-36'>{data.author}</Text>
        </View>
      </View>
      <Image source={require('@/assets/images/blog.png')} />
    </View>
  )
}