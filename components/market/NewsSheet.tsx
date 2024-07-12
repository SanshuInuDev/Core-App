import AppSheet from '@/components/AppSheet';
import SheetCloseButton from '@/components/common/SheetCloseButton';
import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-actions-sheet';
import TrendingSocial from './TrendingSocial';

export default function NewsSheet() {
  return (
    <AppSheet>
      <View className='flex-row items-center pt-6 pb-4'>
        <Text className='flex-1 text-white text-5 font-midnight-sans-st-36'>Latest in crypto</Text>
        <SheetCloseButton id='news-sheet' />
      </View>
      <ScrollView>
        <View>
          <View className='h-6' />
          <TrendingSocial />
          <View className='h-6' />
          <TrendingSocial />
        </View>
      </ScrollView>
    </AppSheet>
  );
}

