import Colors from '@/lib/Colors';
import { Text, View } from 'react-native';
import RadixIcon from '../RadixIcon';
import BackButton from '../common/BackButton';
import Button from '../common/Button';
import SheetCloseButton from '../common/SheetCloseButton';
import { useLoginProvder } from './LoginProvider';
import { SheetManager } from 'react-native-actions-sheet';

type Props = {}

export default function VerifyCompletePage({ }: Props) {
  const { setPage } = useLoginProvder()
  return (
    <View className='h-screen pb-[40%]'>
      <View className='flex-row items-center justify-center'>
        <BackButton
          onPress={() => {
            setPage('MainPage')
          }}
        />
        <Text className='flex-1 text-center text-white text-5 font-midnight-sans-st-36'>Welcome</Text>
        <SheetCloseButton id='login-sheet' />
      </View>
      <View className='items-center justify-center flex-1 px-6'>
        <View className='flex-row items-center justify-center w-8 h-8 rounded-full bg-[#172f2a]'>
          <RadixIcon name='check' size={16} color={Colors.green} />
        </View>
        <Text
          className='mt-4 text-center text-white font-midnight-sans-st-36 text-5'
        >
          You have successfully signed up to Sanshu!
        </Text>
      </View>
      <View className='flex-row'>
        <Button
          onPress={() => {
            SheetManager.hide('login-sheet')
          }}
          className='flex-1'
        >
          <Text className='text-sm text-center text-base-100 font-midnight-sans-st-36'>
            Continue to dashboard
          </Text>
        </Button>
      </View>
    </View>
  )
}