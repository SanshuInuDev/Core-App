import { IconButton } from '@/components/common/Button';
import useWalletAuth from '@/hooks/useWalletAuth';
import { Image, View } from 'react-native';
import SocialLoginButton from './SocialLoginButton';

export default function OneClickLogin() {
  const { walletOpen } = useWalletAuth()
  return (
    <View>
      <SocialLoginButton />
      <IconButton
        className='mt-6'
        theme='outline'
        icon={
          <Image
            className='mr-1'
            source={require('@/assets/images/Exchanges.png')}
          />
        }
      >
        Continue with exchange
      </IconButton>
      <IconButton
        className='mt-6'
        theme='outline'
        onPress={async () => {
          await walletOpen()
        }}
        icon={
          <Image
            className='mr-1'
            source={require('@/assets/images/Wallets.png')}
          />
        }
      >
        Continue with Wallet
      </IconButton>
    </View>
  )
}