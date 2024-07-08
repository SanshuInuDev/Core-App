import Colors from "@/lib/Colors";
import { useState } from "react";
import { Text, TextInput, TextInputProps, TouchableOpacity, View } from "react-native";

export default function PasswordInput(
  { className, ...rest }: TextInputProps
) {
  const [secure, setSecure] = useState<boolean>(true)
  return (
    <View
      className={"h-12 border border-white rounded-full flex-row"} >
      <TextInput
        secureTextEntry={secure}
        placeholder="Enter your password"
        placeholderTextColor={Colors.gray}
        className="flex-1 h-full pl-4 py-2 text-white rounded-l-full !outline-none font-midnight-sans-st-36"
        {...rest} />
      <View className="p-1.5">
        <TouchableOpacity
          onPress={() => setSecure(!secure)}
          className="items-center justify-center h-full px-3 rounded-full bg-base-200"
        >
          <Text className="text-sm text-white">
            {secure ? 'Show' : 'Hide'}
          </Text>
        </TouchableOpacity>
      </View>
    </ View >
  )
} 