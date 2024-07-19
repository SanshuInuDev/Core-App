import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import RadixIcon from "../RadixIcon";
import Colors from "@/lib/Colors";
import { twMerge } from "tailwind-merge";

interface Props {
  icon?: React.ReactNode
  title: string
  addClassName?: string
  onPress?: () => void
}
export default function IconListArrowButton({
  icon,
  title,
  addClassName,
  onPress = () => { }
}: Props) {
  return (
    <TouchableOpacity
      className={twMerge(
        "flex-row items-center p-4 border rounded-2xl border-base-200",
        addClassName
      )}
      onPress={onPress}>
      {icon}
      <Text className="flex-1 ml-2 text-white font-midnight-sans-st-36">
        {title}
      </Text>
      <RadixIcon name="caret-right" color={Colors.white} />
    </TouchableOpacity>
  )
}