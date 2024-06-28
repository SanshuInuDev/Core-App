import { Text, TouchableOpacity, View } from "react-native"
import RadixIcon from "../RadixIcon"

type ListItem = {
  icon: React.ReactNode
  title: string
  subTitle?: string
  link?: {
    type: 'sheet' | 'modal' | 'link',
    url: string
  }
}

type Props = {
  title: string
  source?: ListItem[]
}

export default function MainButtonList(
  { source = [], title }: Props
) {
  return (
    <View>
      <Text className="leading-6 text-white font-midnight-sans-st-36 text-4">{title}</Text>
      {
        source.map((item, idx) => (
          <View key={idx} className="border-b border-gray">
            <TouchableOpacity className="flex-row py-4">
              <View className="flex-row items-center flex-1">
                {item.icon}
                <Text className="ml-2 text-white font-midnight-sans-st-36">{item.title}</Text>
                <Text className="ml-1 text-gray font-midnight-sans-st-36">{item.subTitle}</Text>
              </View>
              <RadixIcon name='chevron-right' size={16} color={'white'} />
            </TouchableOpacity>
          </View>
        ))
      }
    </View >
  )
}