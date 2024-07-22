import AppSheet from "@/components/AppSheet"
import { View, Text, TouchableOpacity, Image } from "react-native"
import SheetCloseButton from "@/components/common/SheetCloseButton"
import RadixIcon from "../RadixIcon"
import Colors from "@/lib/Colors"
import { SheetManager } from "react-native-actions-sheet"

export default function AddPortfiolioSheet() {
  return (
    <AppSheet>
      <View className='flex-row items-center pb-6'>
        <Text className='flex-1 text-white text-5 font-midnight-sans-st-36'>Portfolios</Text>
        <SheetCloseButton id='portfolio-add-portfolio-sheet' />
      </View>
      <View className="flex-row">
        <View className="flex-1">
          <Text className="text-white text-5 font-midnight-sans-st-36">All portfolios</Text>
          <View className="flex-row mt-2">
            <Text className="text-sm text-white font-midnight-sans-st-36">$8,678.61</Text>
            <View className="flex-row items-center ml-1">
              <RadixIcon name="triangle-up" size={16} color={Colors.green} />
              <Text className="text-sm text-green font-midnight-sans-st-36">2.54%</Text>
            </View>
          </View>
        </View>
        <View className="flex-row">
          <TouchableOpacity
            className="items-center justify-center w-10 h-10 rounded-full bg-base-200"
            onPress={() => {
              SheetManager.show('portfolio-select-sheet')
            }}
          >
            <RadixIcon name="plus" size={16} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            className="items-center justify-center w-10 h-10 ml-2 rounded-full bg-base-200"
          >
            <RadixIcon name="mixer-horizontal" size={16} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View className="mt-6">
        <TouchableOpacity className="flex-row items-center p-4 border border-gray rounded-2xl">
          <Image source={require('@/assets/images/TrustWallet.png')} />
          <View className="flex-1 ml-2 ">
            <Text className="text-sm text-white font-midnight-sans-st-36">
              0xf.de96
            </Text>
            <View className="flex-row mt-1">
              <Text className="text-sm text-white font-midnight-sans-st-36">$8,678.61</Text>
              <View className="flex-row items-center ml-1">
                <RadixIcon name="triangle-up" size={16} color={Colors.green} />
                <Text className="text-sm text-green font-midnight-sans-st-36">2.54%</Text>
              </View>
            </View>
          </View>
          <RadixIcon name="caret-right" color={Colors.white} />
        </TouchableOpacity>
      </View>
    </AppSheet>
  )
}