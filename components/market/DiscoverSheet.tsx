import AppSheet from '@/components/AppSheet';
import React from 'react';
import {
  View, Text
} from 'react-native';
import {
  SheetProps
} from 'react-native-actions-sheet';

export default function DiscoverSheet(props: SheetProps) {
  return (
    <AppSheet provider={props}>
      <View className='px-6'>
        <Text className='text-2xl text-center text-white'>News Sheet</Text>
      </View>
    </AppSheet>
  );
}

