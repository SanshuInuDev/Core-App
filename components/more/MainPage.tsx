import React, { useState } from 'react';
import { Text,  View
} from 'react-native';
import {
  ScrollView,
  useSheetPayload
} from 'react-native-actions-sheet';
import SheetCloseButton from '../common/SheetCloseButton';
import EmailLogin from './EmailLogin';
import EmailSignup from './EmailSignup';
import OneClickLogin from './OneClickLogin';
import PageSwitch from './PageSwitch';
import WalletAuthModal from './WalletAuthModal';

type Props = {}

export default function MainPage({ }: Props) {
  const { mode } = useSheetPayload("login-sheet");
  const [page, setPage] = useState<"Login" | "Signup">(mode)
  return (
    <View>
      <View className='flex-row items-center pb-6'>
        <Text className='flex-1 text-white text-5 font-midnight-sans-st-36'>Welcome to Sanshu</Text>
        <SheetCloseButton id='login-sheet' />
      </View>
      <ScrollView className='pb-48'>
        <View className='pb-20'>
          <PageSwitch page={page} setPage={setPage} />
          {
            page === 'Login' ?
              <EmailLogin /> :
              <EmailSignup />
          }
          <View className='relative flex items-center mt-6 border-b border-gray'>
            <Text className='absolute px-2 mx-auto mt-[-8px] text-white font-midnight-sans-st-36 bg-base-100'>
              OR
            </Text>
          </View>
          <OneClickLogin />
          <Text className='px-6 mt-6 text-sm text-center text-gray font-midnight-sans-st-36'>
            By proceeding, you agree to Sanshu <Text className='text-white'>Terms of use</Text> & <Text className='text-white'>Privacy Policy</Text>.
          </Text>
        </View>
      </ScrollView>
      <WalletAuthModal />
    </View>
  )
}