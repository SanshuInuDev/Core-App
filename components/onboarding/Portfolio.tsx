
import CloseButton from "@/components/common/CloseButton";
import { router } from "expo-router";
import { Image, Text, View } from "react-native";

export default function Portfolio() {
  const onSkip = () => {
    router.push('/market')
  }
  return (
    <View className="items-center flex-1">
      <View className="flex-row items-center justify-between w-full">
        <Text className="text-white font-midnight-sans-st-36 text-5">Portfolio</Text>
        <CloseButton
          onPress={onSkip}
        />
      </View>
      <View className="relative items-center flex-1 pt-28">
        <Image source={require('@/assets/images/onboarding-chart.png')} />
      </View>
      <View className="absolute mt-[480] items-center">
        <Text className="text-white font-midnight-sans-st-36 text-5">
          Monitor your wealth
        </Text>
        <Text className="mt-2 text-gray font-midnight-sans-st-36">
          Track your crypto investments in real-time
        </Text>
        <View className="flex-row mt-6">
          <View className="h-0.5 mr-1 w-4 rounded-full bg-base-200" />
          <View className="h-0.5 mr-1 w-4 rounded-full bg-base-200" >
            <View className="w-2 h-full bg-white rounded-full"></View>
          </View>
          <View className="h-0.5 w-4 rounded-full bg-base-200" />
        </View>
      </View>
    </View>
  )
}