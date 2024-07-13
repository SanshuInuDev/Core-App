
import CloseButton from "@/components/common/CloseButton";
import Colors from "@/lib/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { Image, Text, View } from "react-native";

export default function WatchAddress() {
  const onSkip = () => {
    router.push('/market')
  }
  return (
    <View className="items-center flex-1">
      <View className="flex-row items-center justify-between w-full">
        <Text className="text-white font-midnight-sans-st-36 text-5">Watch Address</Text>
        <CloseButton
          onPress={onSkip}
        />
      </View>
      <View className="relative items-center flex-1 pt-48">
        <Image source={require('@/assets/images/onboarding-addresslist.png')} />
        <View className="absolute w-full h-56 top-56">
          <LinearGradient
            className='flex-1'
            colors={['transparent', 'rgba(13,5,8,0.5)', Colors.base100]}
          />
        </View>
      </View>
      <View className="absolute top-[480] items-center">
        <Text className="text-white font-midnight-sans-st-36 text-5">
          Follow your investors
        </Text>
        <Text className="mt-2 text-gray font-midnight-sans-st-36">
          Stay updated on your favourite crypto experts
        </Text>
        <View className="flex-row mt-6">
          <View className="h-0.5 mr-1 w-4 rounded-full bg-base-200" />
          <View className="h-0.5 mr-1 w-4 rounded-full bg-base-200" />
          <View className="h-0.5 w-4 rounded-full bg-base-200" >
            <View className="w-3 h-full bg-white rounded-full"></View>
          </View>
        </View>
      </View>
    </View>
  )
}