import AppSheet from '@/components/AppSheet';
import React from 'react';
import {
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import {
  SheetProps
} from 'react-native-actions-sheet';
import Input from '../common/Input';
import SheetCloseButton from '../common/SheetCloseButton';

export default function LoginSheet(props: SheetProps) {
  return (
    <AppSheet provider={props}>
      <View className='flex-row items-center pb-6'>
        <Text className='flex-1 text-white text-5 font-midnight-sans-st-36'>Welcome to Sanshu</Text>
        <SheetCloseButton id='login-sheet' />
      </View>
      <View>
        <View
          className='flex-row p-2 rounded-full bg-base-200'
        >
          <TouchableOpacity className='flex-1 px-3 py-2 bg-white rounded-full '>
            <Text
              className='text-sm text-center text-base-100 font-midnight-sans-st-36'
            >
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className='flex-1 px-3 py-2 rounded-full '>
            <Text
              className='text-sm text-center text-white font-midnight-sans-st-36'
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
        <Input />
      </View>
    </AppSheet>
  );
}

