import { LOGIN_PROVIDER, LOGIN_PROVIDER_TYPE } from "@web3auth/react-native-sdk";
import React from 'react';
import { Image, Text, View } from 'react-native';
import { useWeb3AuthProvider } from '../Web3AuthProvider';
import Button from '../common/Button';
import { SheetManager } from "react-native-actions-sheet";


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
      <Button
        className='mt-6'
        theme='outline'
        onPress={async () => {
          await onSocialLogin(LOGIN_PROVIDER.GOOGLE)
        }}
      >
        <Image
          className='w-6 h-6 mr-1'
          width={24}
          height={24}
          source={require('@/assets/images/google.png')}
        />
        <Text className='leading-6 text-white font-midnight-sans-st-36 text-4'>
          Continue with Google
        </Text>
      </Button>
      <Button
        className='mt-6'
        theme='outline'
        onPress={async () => {
          await onSocialLogin(LOGIN_PROVIDER.APPLE)
        }}
      >
        <Image
          className='mr-1'
          source={require('@/assets/images/apple.png')}
        />
        <Text className='leading-6 text-white font-midnight-sans-st-36 text-4'>
          Continue with Apple
        </Text>
      </Button>
    </View>
  )
}