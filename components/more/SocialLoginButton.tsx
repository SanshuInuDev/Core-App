import { IconButton } from '@/components/common/Button';
import { LOGIN_PROVIDER, LOGIN_PROVIDER_TYPE } from "@web3auth/react-native-sdk";
import React from 'react';
import { Image, View } from 'react-native';
import { SheetManager } from "react-native-actions-sheet";
import { useWeb3AuthProvider } from '../Web3AuthProvider';


export default function SocialLoginButton() {
  const { login } = useWeb3AuthProvider()
  const onSocialLogin = async (mode: LOGIN_PROVIDER_TYPE) => {
    try {
      await login(mode)
      SheetManager.hide('login-sheet')
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <View>
      <IconButton
        className='mt-6'
        theme='outline'
        onPress={async () => {
          await onSocialLogin(LOGIN_PROVIDER.GOOGLE)
        }}
        icon={
          <Image
            className='w-6 h-6 mr-1'
            width={24}
            height={24}
            source={require('@/assets/images/google.png')}
          />
        }
      >
        Continue with Google
      </IconButton>
      <IconButton
        className='mt-6'
        theme='outline'
        onPress={async () => {
          await onSocialLogin(LOGIN_PROVIDER.APPLE)
        }}
        icon={
          <Image
            className='mr-1'
            source={require('@/assets/images/apple.png')}
          />
        }
      >
        Continue with Apple
      </IconButton>
    </View>
  )
}