import { Text, View } from "react-native";
import Button from "../common/Button";
import Input from "../common/Input";
import PasswordInput from "./PasswordInput";

export default function EmailLogin() {
  return (
    <View>
      <Input className='mt-6' placeholder='Enter your email address' />
      <View className='mt-6'>
        <PasswordInput />
      </View>
      <Button
        className='mt-6'
      >
        <Text className='leading-6 font-midnight-sans-st-36 text-4'>
          Login
        </Text>
      </Button>
    </View>
  )
}