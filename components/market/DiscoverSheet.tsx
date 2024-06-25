import AppSheet from '@/components/AppSheet';
import React from 'react';
import {
  View, Text,
  TextInput
} from 'react-native';
import {
  ScrollView,
  SheetProps
} from 'react-native-actions-sheet';
import SheetCloseButton from '../SheetCloseButton';
import { useQuery } from '@tanstack/react-query';
import { MarketCoin } from '@/lib/coingecko/types';
import DiscoverItem from './DiscoverItem';

export default function DiscoverSheet(props: SheetProps) {
  const { data } = useQuery<MarketCoin[]>({
    queryKey: ['marketCap']
  })
  return (
    <AppSheet provider={props}>
      <View className='flex-row items-center pb-4'>
        <Text className='flex-1 text-white text-5 font-midnight-sans-st-36'>Discover</Text>
        <SheetCloseButton id='discover-sheet' />
      </View>
      <View>
        <TextInput
          placeholderTextColor={'white'}
          placeholder="/ Search crypto"
          className="h-12 px-4 py-2 text-white border border-white rounded-full" />
      </View>
      <ScrollView className='mt-4'>
        {
          data?.map((item, idx) => (
            <DiscoverItem no={idx + 1} data={item} key={idx} />
          ))
        }
      </ScrollView>
    </AppSheet>
  );
}

