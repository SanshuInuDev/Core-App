import { TouchableOpacity, View } from "react-native"
import { SheetManager } from "react-native-actions-sheet"
import RadixIcon from "../RadixIcon"

interface Props {
  id: string
}

export default function SheetCloseButton(
  { id }: Props
) {
  return <TouchableOpacity
    onPress={() => {
      SheetManager.hide(id)
    }}>
    <View className='flex-row items-center justify-center w-8 h-8 rounded-full bg-base-200'>
      <RadixIcon name='cross-1' size={16} color={'white'} />
    </View>
  </TouchableOpacity>
}