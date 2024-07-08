import { TouchableOpacity, View } from "react-native"
import RadixIcon from "../RadixIcon"

interface Props {
  onPress?: () => void
}

export default function BackButton({
  onPress = () => { }
}: Props) {
  return <TouchableOpacity
    onPress={onPress}>
    <View className='flex-row items-center justify-center w-8 h-8 rounded-full bg-base-200'>
      <RadixIcon name='arrow-left' size={16} color={'white'} />
    </View>
  </TouchableOpacity>
}