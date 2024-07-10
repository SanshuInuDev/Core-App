import { Alert, Text, View } from "react-native";
import Button from "../common/Button";
import Input from "../common/Input";
import PasswordInput from "./PasswordInput";
import { useState } from "react";
import supabase from "@/lib/supabase";

export default function EmailLogin() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const signUpWithEmail = async () => {
    const {
      data,
      error,
    } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    console.log(data)
    console.log(error)
    if (error) Alert.alert(error.message)
  }

  return (
    <View>
      <Input
        className='mt-6'
        placeholder='Enter your email address'
        value={email}
        onChangeText={setEmail}
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
          Login
        </Text>
      </Button>
    </View>
  )
}