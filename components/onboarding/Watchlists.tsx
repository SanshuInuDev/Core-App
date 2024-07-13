
import CloseButton from "@/components/common/CloseButton";
import Colors from "@/lib/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { Image, Text, View } from "react-native";

export default function Watchlists() {
  const onSkip = () => {
    router.push('/market')
  }
  return (
    <View className="items-center flex-1">
      <View className="flex-row items-center justify-between w-full">
        <Text className="text-white font-midnight-sans-st-36 text-5">Watchlists</Text>
        <CloseButton
          onPress={onSkip}
        />
      </View>
      <View className="items-center flex-1 pt-28">
        <Image source={require('@/assets/images/onboarding-card.png')} />
        <View className="absolute w-full h-44 top-48">
          <LinearGradient
            // Background Linear Gradient
            className='flex-1'
            colors={['transparent', 'rgba(13,5,8,0.5)', Colors.base100]}
          />
        </View>
      </View>
      <View className="absolute mt-[480] items-center">
        <Text className="text-white font-midnight-sans-st-36 text-5">
          Track your favourites
        </Text>
        <Text className="mt-2 text-gray font-midnight-sans-st-36">
          You will never miss the dip.
        </Text>
        <View className="flex-row mt-6">
          <View className="h-0.5 mr-1 w-4 rounded-full bg-base-200" >
            <View className="w-1 h-full bg-white rounded-full"></View>
          </View>
          <View className="h-0.5 mr-1 w-4 rounded-full bg-base-200" />
          <View className="h-0.5 w-4 rounded-full bg-base-200" />
        </View>
      </View>
    </View>
  )
}