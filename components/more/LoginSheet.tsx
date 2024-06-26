import AppSheet from '@/components/AppSheet';
import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import {
  SheetProps
} from 'react-native-actions-sheet';
import Input from '../common/Input';
import SheetCloseButton from '../common/SheetCloseButton';
import PasswordInput from './PasswordInput';
import Button from '../common/Button';

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
        <Input className='mt-6' placeholder='Enter your email address' />
        <View className='mt-6'>
          <PasswordInput />
        </View>
        <Button className='mt-6'>
          Login
        </Button>
        <View className='relative flex items-center mt-6 border-b border-gray'>
          <Text className='absolute px-2 mx-auto mt-[-8px] text-white font-midnight-sans-st-36 bg-base-100'>
            OR
          </Text>
        </View>
        <Button theme='outline' className='mt-6'>
          <Image
            className='mr-1'
            source={require('@/assets/images/google.svg')}
          />
          Continue with Google
        </Button>
        <Button theme='outline' className='mt-6'>
          <Image
            className='mr-1'
            source={require('@/assets/images/apple.svg')}
          />
          Continue with Apple
        </Button>
        <Button theme='outline' className='mt-6'>
          <Image
            className='mr-1'
            source={require('@/assets/images/Exchanges.svg')}
          />
          Continue with exchange
        </Button>
        <Button theme='outline' className='mt-6'>
          <Image
            className='mr-1'
            source={require('@/assets/images/Wallets.svg')}
          />
          Continue with Wallet
        </Button>
      </View>
    </AppSheet>
  );
}

