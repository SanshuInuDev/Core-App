import React from 'react'
import { Image, View } from 'react-native'

export default function IconList() {
  return (
    <View className='flex-row'>
      <Image
        source={require('@/assets/images/Atops.png')}
      />
      <Image
        className='ml-[-8px]'
        source={require('@/assets/images/bitcoin.png')}
      />
      <Image
        className='ml-[-8px]'
        source={require('@/assets/images/pink.png')}
      />
      <Image
        className='ml-[-8px]'
        source={require('@/assets/images/polygon.png')}
      />
    </View>
  )
}