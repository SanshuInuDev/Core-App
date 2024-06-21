import AppSheet from '@/components/AppSheet';
import RadixIcon from '@/components/RadixIcon';
import React from 'react';
import {
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import {
  SheetManager,
  SheetProps
} from 'react-native-actions-sheet';

export default function NewsSheet(props: SheetProps) {
  return (
    <AppSheet provider={props}>
      <View className='px-6 pt-6'>
        <View className='flex-row items-center'>
          <Text className='flex-1 text-white text-5 font-midnight-sans-st-36' >Latest in crypto</Text>
          <TouchableOpacity
            onPress={() => {
              SheetManager.hide('news-sheet')
            }}>
            <View className='flex-row items-center justify-center w-8 h-8 rounded-full bg-base200'>
              {/* <RadixIcon name='cross-1' size={16} color={'white'} /> */}
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </AppSheet>
  );
}

