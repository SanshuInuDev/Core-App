import { Image, Text, View } from 'react-native';
import Button from '../common/Button';
import SocialLoginButton from './SocialLoginButton';
import useWalletAuth from '@/hooks/useWalletAuth';

export default function OneClickLogin() {
  const { walletOpen } = useWalletAuth()
  return (
    <View>
      <SocialLoginButton />
      <Button
        className='mt-6'
        theme='outline'
      >
        <Image
          className='mr-1'
          source={require('@/assets/images/Exchanges.png')}
        />
        <Text className='leading-6 text-white font-midnight-sans-st-36 text-4'>
          Continue with exchange
        </Text>
      </Button>
      <Button
        className='mt-6'
        theme='outline'
        onPress={async () => {
          await walletOpen()
        }}
      >
        <Image
          className='mr-1'
          source={require('@/assets/images/Wallets.png')}
        />
        <Text className='leading-6 text-white font-midnight-sans-st-36 text-4'>
          Continue with Wallet
        </Text>
      </Button>
    </View>
  )
}