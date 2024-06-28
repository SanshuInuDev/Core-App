import { TextInput, TextInputProps } from "react-native";
import { twMerge } from "tailwind-merge";

export default function Input(
  { className: cls, ...rest }: TextInputProps
) {
  return (
    <TextInput
      {...rest}
      className={twMerge(
        "h-12 px-4 py-2 text-white border border-white rounded-full font-midnight-sans-st-36 text-sm placeholder:text-gray",
        cls
      )} />
  )
} 