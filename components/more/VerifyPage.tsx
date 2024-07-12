import BackButton from '@/components/common/BackButton';
import Button from '@/components/common/Button';
import SheetCloseButton from '@/components/common/SheetCloseButton';
import Colors from '@/lib/Colors';
import supabase from '@/lib/supabase';
import { ScrollView, Text, View } from 'react-native';
import { OtpInput } from "react-native-otp-entry";
import RadixIcon from '../RadixIcon';
import { useLoginProvder } from './LoginProvider';

type Props = {}

export default function VerifyPage({ }: Props) {
  const { setPage, reEmail } = useLoginProvder()

  const onCheckOTP = async (otp: string) => {
    try {
      const {
        data: { session },
        error,
      } = await supabase.auth.verifyOtp({
        email: reEmail,
        token: otp,
        type: 'signup',
      })
      setPage('VerifyCompletePage')
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <View className='h-screen'>
      <View className='flex-row items-center justify-center'>
        <BackButton
          onPress={() => {
            setPage('MainPage')
          }}
        />
        <Text className='flex-1 text-center text-white text-5 font-midnight-sans-st-36'>Check your email</Text>
        <SheetCloseButton id='login-sheet' />
      </View>
      <ScrollView className='flex-1'>
        <View className='flex-col items-center flex-1 px-6 pt-20'>
          <View className='items-center flex-1'>
            <View className='flex-row items-center justify-center w-8 h-8 rounded-full bg-base-200'>
              <RadixIcon name='envelope-closed' size={16} color={'white'} />
            </View>
            <Text className='mt-4 text-sm text-white text-5 font-midnight-sans-st-36'>Verify your email</Text>
            <Text className='mt-4 text-sm text-center text-gray font-midnight-sans-st-36'>
              We’ve sent an email to san@sanshu.xyz with a link to verify your email. You may click the button in the email or enter the verification code below
            </Text>
            <View className='mt-4'>
              <OtpInput
                focusColor={Colors.white}
                onFilled={onCheckOTP}
                theme={{
                  focusedPinCodeContainerStyle: {
                    borderColor: Colors.white,
                  },
                  focusStickStyle: {
                    height: 16
                  },
                  pinCodeContainerStyle: {
                    borderColor: Colors.gray,
                    height: 40,
                    width: 40,
                    borderRadius: 8
                  },
                  pinCodeTextStyle: {
                    color: 'white',
                    fontFamily: 'midnight-sans-st-36-regular-pro',
                    fontSize: 16
                  }
                }}
              />
            </View>
            <Text
              className='mt-3 text-sm text-center text-white font-midnight-sans-st-36'
            >
              Enter your verification code
            </Text>
          </View>
          <View className='flex-row pb-16 mt-24'>
            <Button
              onPress={() => {
              }}
              className='flex-1'
            >
              Resend Email
            </Button>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}