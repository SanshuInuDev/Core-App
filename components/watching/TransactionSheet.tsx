import AppSheet from "@/components/AppSheet";
import SheetCloseButton from "@/components/common/SheetCloseButton";
import Colors from "@/lib/Colors";
import { Image, Text, View } from "react-native";
import RadixIcon from "../RadixIcon";

export default function TransactionSheet() {
  return (
    <AppSheet>
      <View className='h-full'>
        <View className='flex-row items-center pb-8'>
          <Text className='flex-1 text-white text-5 font-midnight-sans-st-36'>
            All Transactions
          </Text>
          <SheetCloseButton id='watching-transaction-sheet' />
        </View>
        <View className="pt-4">
          <Text className="text-white font-midnight-sans-st-36">
            Today
          </Text>
          <View className='flex-row py-4 border-b border-base-200'>
            <View className='flex-row items-center flex-1'>
              <RadixIcon name='arrow-down' size={16} color={Colors.white} />
              <Image
                className='mx-2'
                source={require('@/assets/images/Ethereum.png')}
              />
              <View>
                <Text className='text-sm text-white font-midnight-sans-st-36'>
                  EtherTransfer in
                </Text>
                <Text className='text-sm text-gray font-midnight-sans-st-36'>
                  Jun 05, 2024, 11:23 AM
                </Text>
              </View>
            </View>
            <Text className='text-sm text-white font-midnight-sans-st-36'>0.45 ETH</Text>
          </View>
          <View className='flex-row py-4 border-b border-base-200'>
            <View className='flex-row items-center flex-1'>
              <RadixIcon name='arrow-down' size={16} color={Colors.white} />
              <Image
                className='mx-2'
                source={require('@/assets/images/Ethereum.png')}
              />
              <View>
                <Text className='text-sm text-white font-midnight-sans-st-36'>
                  EtherTransfer in
                </Text>
                <Text className='text-sm text-gray font-midnight-sans-st-36'>
                  Jun 05, 2024, 11:23 AM
                </Text>
              </View>
            </View>
            <Text className='text-sm text-white font-midnight-sans-st-36'>0.45 ETH</Text>
          </View>
        </View>
        <View className="pt-4">
          <Text className="text-white font-midnight-sans-st-36">
            June 03 2024
          </Text>
          <View className='flex-row py-4 border-b border-base-200'>
            <View className='flex-row items-center flex-1'>
              <RadixIcon name='arrow-down' size={16} color={Colors.white} />
              <Image
                className='mx-2'
                source={require('@/assets/images/Ethereum.png')}
              />
              <View>
                <Text className='text-sm text-white font-midnight-sans-st-36'>
                  EtherTransfer in
                </Text>
                <Text className='text-sm text-gray font-midnight-sans-st-36'>
                  Jun 05, 2024, 11:23 AM
                </Text>
              </View>
            </View>
            <Text className='text-sm text-white font-midnight-sans-st-36'>0.45 ETH</Text>
          </View>
          <View className='flex-row py-4 border-b border-base-200'>
            <View className='flex-row items-center flex-1'>
              <RadixIcon name='arrow-down' size={16} color={Colors.white} />
              <Image
                className='mx-2'
                source={require('@/assets/images/Ethereum.png')}
              />
              <View>
                <Text className='text-sm text-white font-midnight-sans-st-36'>
                  EtherTransfer in
                </Text>
                <Text className='text-sm text-gray font-midnight-sans-st-36'>
                  Jun 05, 2024, 11:23 AM
                </Text>
              </View>
            </View>
            <Text className='text-sm text-white font-midnight-sans-st-36'>0.45 ETH</Text>
          </View>
        </View>
      </View>
    </AppSheet>
  )
}