import { Text, TouchableOpacity, View } from "react-native"
import RadixIcon from "../RadixIcon"

interface Props {
  onPress?: () => void,
  title?: string
}

export default function MoreButton({
  onPress = () => { },
  title = 'More'
}: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View className='flex-row items-center px-4 py-2 rounded-full bg-base-200'>
        <Text className='mr-1 text-sm text-white font-midnight-sans-st-36'>{title}</Text>
        <RadixIcon name='arrow-right' size={16} color={'white'} />
      </View>
    </TouchableOpacity>
  )
}