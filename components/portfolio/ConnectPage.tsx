import RadixIcon from '@/components/RadixIcon'
import { Image, Text, TouchableOpacity, View } from 'react-native'

type Props = {
  setPage?: (num: number) => void
}

export default function ConnectPage({
  setPage = () => { }
}: Props) {
  return (
    <View>
      <View className='mt-16 py-14'>
        <View className='flex-row'>
          <Image
            source={require('@/assets/images/Atops.png')}
          />
          <Image
            className='ml-[-8px]'
            source={require('@/assets/images/bitcoin.png')}
          />
          <Image
            className='ml-[-8px]'
            source={require('@/assets/images/pink.png')}
          />
          <Image
            className='ml-[-8px]'
            source={require('@/assets/images/polygon.png')}
          />
        </View>
        <Text
          className='mt-2 text-white text-5 font-midnight-sans-st-36'
        >
          Get started with your portfolio
        </Text>
        <Text className='mt-2 text-sm text-gray font-midnight-sans-st-36'>
          You can connect/watch a wallet address, exchange or add your transactions manually.
        </Text>
      </View>
      <View className='mt-6'>
        <TouchableOpacity
          onPress={() => setPage(1)}
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

        <TouchableOpacity>
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
        <TouchableOpacity>
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
    </View>
  )
}