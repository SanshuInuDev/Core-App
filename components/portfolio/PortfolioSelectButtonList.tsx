import RadixIcon from '@/components/RadixIcon';
import { Text, TouchableOpacity, View } from 'react-native';
import { SheetManager } from 'react-native-actions-sheet';
export default function PortfolioSelectButtonList() {
  return (
    <View className='mt-6'>
      <TouchableOpacity
        onPress={() => {
          SheetManager.show('portfolio-wallet-connect-sheet');
        }}
      >
        <View className='p-4 border border-gray rounded-2xl'>
          <View className='flex-row items-center'>
            <RadixIcon name="cube" size={20} color={'white'} />
            <View className='flex-1 ml-2'>
              <Text className='text-sm text-white font-midnight-sans-st-36'>
                Connect an existing wallet
              </Text>
              <Text className='text-sm text-gray font-midnight-sans-st-36'>
                Connect your Web3 wallet
              </Text>
            </View>
            <RadixIcon name="caret-right" size={20} color={'white'} />
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          SheetManager.show('portfolio-crypto-exchange-sheet');
        }}
      >
        <View className='p-4 mt-2 border border-gray rounded-2xl'>
          <View className='flex-row items-center'>
            <RadixIcon name="cube" size={20} color={'white'} />
            <View className='flex-1 ml-2 mr-2'>
              <Text className='text-sm text-white font-midnight-sans-st-36'>
                Connect crypto exchange
              </Text>
              <Text className='text-sm text-gray font-midnight-sans-st-36'>
                Kraken, Binance, Coinbase and over three more
              </Text>
            </View>
            <RadixIcon name="caret-right" size={20} color={'white'} />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          SheetManager.show('portfolio-manual-add-sheet');
        }}
      >
        <View className='p-4 mt-2 border border-gray rounded-2xl'>
          <View className='flex-row items-center'>
            <RadixIcon name="cube" size={20} color={'white'} />
            <View className='flex-1 ml-2'>
              <Text className='text-sm text-white font-midnight-sans-st-36'>
                Add your transactions manually
              </Text>
              <Text className='text-sm text-gray font-midnight-sans-st-36'>
                Enter all the details at your own pace
              </Text>
            </View>
            <RadixIcon name="caret-right" size={20} color={'white'} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}