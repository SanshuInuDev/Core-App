import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import RadixIcon from '../RadixIcon'
import { SheetManager } from 'react-native-actions-sheet'

interface Props {
  id: string
}

export default function SearchButton(
  { id }: Props
) {
  return (
    <TouchableOpacity onPress={() => {
      SheetManager.show(id)
    }}>
      <View className='p-2 rounded-full'>
        <RadixIcon name="magnifying-glass" size={20} color={'white'} />
      </View>
    </TouchableOpacity>
  )
}