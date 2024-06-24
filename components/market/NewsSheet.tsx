import AppSheet from '@/components/AppSheet';
import React from 'react';
import {
  Text,
  View
} from 'react-native';
import {
  ScrollView,
  SheetProps
} from 'react-native-actions-sheet';
import SheetCloseButton from '../SheetCloseButton';
import LatestCryptoItem from './LatestCryptoItem';
import TrendingSocial from './TrendingSocial';

export default function NewsSheet(props: SheetProps) {
  return (
    <AppSheet provider={props}>
      <View className='flex-row items-center pb-4'>
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

