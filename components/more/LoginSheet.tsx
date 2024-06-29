import AppSheet from '@/components/AppSheet';
import React, { useCallback } from 'react';
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
import Auth0, { useAuth0, Auth0Provider } from 'react-native-auth0';

const auth0 = new Auth0({
  domain: process.env.EXPO_PUBLIC_AUTH0_DOMAIN ?? 'YOUR_AUTH0_DOMAIN',
  clientId: process.env.EXPO_PUBLIC_AUTH0_CLIENT_ID ?? 'YOUR_CLIENT_ID',
});


export default function LoginSheet(props: SheetProps) {
  const { authorize, sendEmailCode } = useAuth0();

  const onLogin = useCallback(async () => {
    try {
      // await auth0.auth.createUser({
      //   connection: 'Username-Password-Authentication', // Use 'sms' for SMS-based OTP or 'email' for email-based OTP
      //   email: 'truepartner312@gmail.com', // Using phone number as email for demo
      //   // password: Math.random().toString(36).slice(-8), // Generate a random password
      //   password: 'asdFG@145220', // Generate a random password
      //   email_verified: false
      // });
      // const response = await auth0.auth.passwordRealm({
      //   username: 'truepartner312@gmail.com',
      //   password: 'asdFG@145220',
      //   connection: 'email',
      //   realm: 'Username-Password-Authentication',
      //   scope: 'openid profile email'
      // })
      // if (response) {
      //   console.log('Logged in successfully', response);
      //   const userInfo = await auth0.auth.userInfo({ token: response.accessToken });
      //   console.log('user info', userInfo);
      // }


      await auth0.auth.passwordlessWithEmail({
        email: 'truepartner312@gmail.com',
        send: 'code',
      });
      console.log('OTP sent to email:', 'truepartner312@gmail.com');
  
    } catch (error) {
      console.error(error);
    }
  }, [])

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
        <Button
          className='mt-6'
          onPress={onLogin}
        >
          Login
        </Button>
        <View className='relative flex items-center mt-6 border-b border-gray'>
          <Text className='absolute px-2 mx-auto mt-[-8px] text-white font-midnight-sans-st-36 bg-base-100'>
            OR
          </Text>
        </View>
        <Button className='mt-6'>
          {/* <Image
            className='mr-1'
            source={require('@/assets/images/google.svg')}
          /> */}
          Continue with Google
        </Button>
        <Button className='mt-6'>
          {/* <Image
            className='mr-1'
            source={require('@/assets/images/apple.svg')}
          /> */}
          Continue with Apple
        </Button>
        <Button className='mt-6'>
          {/* <Image
            className='mr-1'
            source={require('@/assets/images/Exchanges.svg')}
          /> */}
          Continue with exchange
        </Button>
        <Button className='mt-6'>
          {/* <Image
            className='mr-1'
            source={require('@/assets/images/Wallets.svg')}
          /> */}
          Continue with Wallet
        </Button>
      </View>
    </AppSheet>
  );
}

