import { Alert, Text, View } from "react-native";
import Button from "../common/Button";
import Input from "../common/Input";
import PasswordInput from "./PasswordInput";
import { useLoginProvder } from "./LoginProvider";
import { useState } from "react";
import supabase from "@/lib/supabase";

export default function EmailSignup() {
  const { reEmail, setReEmail } = useLoginProvder()
  const [password, setPassword] = useState<string>('')

  const signUpWithEmail = async () => {
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: reEmail,
      password: password
    })
    if (error) Alert.alert(error.message)
    if (!session) Alert.alert('Please check your inbox for email verification!')
    setPage('VerifyPage')
  }

  const { setPage } = useLoginProvder()
  return (
    <View>
      <Input
        className='mt-6'
        placeholder='Enter your email address'
        value={reEmail}
        onChangeText={setReEmail}
      />
      <View className='mt-6'>
        <PasswordInput
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <Button
        className='mt-6'
        onPress={signUpWithEmail}
      >
        <Text className='leading-6 font-midnight-sans-st-36 text-4'>
          Create an account
        </Text>
      </Button>
    </View>
  )
}