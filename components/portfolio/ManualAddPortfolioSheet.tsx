import AppSheet from '@/components/AppSheet'
import SheetCloseButton from '@/components/common/SheetCloseButton'
import Colors from '@/lib/Colors'
import { useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import Button from '../common/Button'
import { router } from 'expo-router'
import { SheetManager } from 'react-native-actions-sheet'

export default function ManualAddPortfolioSheet() {
  const [name, setName] = useState<string>('')
  return (
    <AppSheet>
      <View className='h-full'>
        <View>
          <View className='flex-row items-center pb-6'>
            <Text className='flex-1 text-white text-5 font-midnight-sans-st-36'>New portfolio</Text>
            <SheetCloseButton id='portfolio-manual-add-sheet' />
          </View>
        </View>
        <View className='flex-1'>
          <TextInput
            placeholderTextColor={Colors.gray}
            placeholder="Enter portfolio name"
            value={name}
            onChangeText={setName}
            className="h-12 px-4 py-2 text-white border rounded-full border-gray" />
        </View>
        <Button
          onPress={() => {
            router.navigate('/portfolio/manual')
            SheetManager.hide('portfolio-manual-add-sheet')
          }}
          disabled={!name.length}
          theme='dark'
          className='w-full mb-6'
        >
          Create portfolio
        </Button>
      </View>
    </AppSheet>
  )
}
