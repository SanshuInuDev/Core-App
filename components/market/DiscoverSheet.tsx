import AppSheet from '@/components/AppSheet';
import SheetCloseButton from '@/components/common/SheetCloseButton';
import { MarketCoin } from '@/lib/coingecko/types';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { ScrollView } from 'react-native-actions-sheet';
import DiscoverItem from './DiscoverItem';

export default function DiscoverSheet() {
  const { data } = useQuery<MarketCoin[]>({
    queryKey: ['marketCap']
  })
  return (
    <AppSheet>
      <View className='flex-row items-center pt-6 pb-4'>
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

