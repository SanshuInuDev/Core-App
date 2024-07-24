import RadixIcon from '@/components/RadixIcon';
import Button from '@/components/common/Button';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SheetManager } from 'react-native-actions-sheet';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function MainWatchAddress() {
  return (
    <View>
      <View className='flex-row items-center'>
        <TouchableOpacity className='flex-row items-center flex-1'>
          <Text className='mr-2 text-white font-midnight-sans-st-36 text-5'>
            Main Watch Address
          </Text>
          <View className='items-center justify-center w-6 h-6 border rounded-full border-gray'>
            <RadixIcon name='caret-sort' size={16} color={Colors.white} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            SheetManager.show('watching-add-address-sheet')
          }}
          className='items-center justify-center w-10 h-10 mr-2 rounded-full bg-base-200'>
          <RadixIcon name='plus' size={16} color={Colors.white} />
        </TouchableOpacity>
        <TouchableOpacity className='items-center justify-center w-10 h-10 rounded-full bg-base-200'>
          <RadixIcon name='mixer-horizontal' size={16} color={Colors.white} />
        </TouchableOpacity>
      </View>
      <View className='items-center py-10 mt-4 border border-base-200 rounded-3xl'>
        <View className='flex-row'>
          <Image
            source={require('@/assets/images/avatar-0.png')}
          />
          <Image
            className='ml-[-8px]'
            source={require('@/assets/images/avatar-1.png')}
          />
          <Image
            className='ml-[-8px]'
            source={require('@/assets/images/avatar-2.png')}
          />
          <Image
            className='ml-[-8px]'
            source={require('@/assets/images/avatar-3.png')}
          />
        </View>
        <Text className='mt-2 text-white font-midnight-sans-st-36 text-5'>
          Watch an address
        </Text>
        <Text className='mt-2 text-sm text-gray font-midnight-sans-st-36'>
          Add your favourite crypto assets
        </Text>
        <Button
          className='mt-6'
          theme='dark'
          onPress={() => {
            SheetManager.show('watching-add-address-sheet')
          }}
        >
          Add Address
        </Button>
      </View>
    </View>
  )
}