import supabase from "@/lib/supabase";
import { useState } from "react";
import { Alert, View } from "react-native";
import Button from "../common/Button";
import Input from "../common/Input";
import PasswordInput from "./PasswordInput";

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
        Login
      </Button>
    </View>
  )
}