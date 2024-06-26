import { TextInput, TextInputProps } from "react-native";

export default function Input(
  { className: _cls, ...rest }: TextInputProps
) {
  return (
    <TextInput
      {...rest}
      className="h-12 px-4 py-2 text-white border border-white rounded-full" />
  )
} 