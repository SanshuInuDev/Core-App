import { TouchableOpacity, View } from "react-native"
import RadixIcon from "../RadixIcon"

interface Props {
  onPress?: () => void
}

export default function CloseButton({
  onPress = () => { }
}: Props) {
  return <TouchableOpacity
    onPress={onPress}>
    <View className='flex-row items-center justify-center w-8 h-8 rounded-full bg-base-200'>
      <RadixIcon name='cross-1' size={16} color={'white'} />
    </View>
  </TouchableOpacity>
}