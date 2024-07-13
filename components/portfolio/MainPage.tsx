import useAppProvider from '@/hooks/useAppProvider'
import Colors from '@/lib/Colors'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import RadixIcon from '../RadixIcon'
import MoreButton from '../common/MoreButton'

type Props = {}

export default function MainPage({ }: Props) {
  const { address } = useAppProvider()
  return (
    <View className='pb-28'>
      <View className='flex-row items-center'>
        <Text className='mr-2 text-2xl text-white font-midnight-sans-st-36'>
          {`${address?.substring(0, 3)}.${address?.substring(address.length - 5, address.length - 1)}`}
        </Text>
        <View className='items-center justify-center w-6 h-6 border rounded-full border-gray'>
          <RadixIcon name='caret-sort' size={16} color={Colors.white} />
        </View>
      </View>
      <View className='flex-row'>
        <Text className='mt-2 mr-2 text-sm text-white font-midnight-sans-st-36'>
          {'$78,060.38'}
        </Text>
        <View className='flex-row items-center justify-center'>
          <Text className='mt-2 text-sm text-green font-midnight-sans-st-36'>
            {'2.54%'}
          </Text>
          <View className='mt-2'>
            <RadixIcon size={16} color={Colors.green} name='triangle-up' />
          </View>
        </View>
      </View>
      <View className='flex-row mt-2'>
        <TouchableOpacity
          onPress={() => {
          }}>
          <View className='flex-row items-center px-4 py-2 rounded-full bg-base-200'>
            <RadixIcon name='update' size={16} color={'white'} />
            <Text className='ml-2 text-sm text-white font-midnight-sans-st-36'>Swap</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          className='ml-2'
          onPress={() => {
          }}>
          <View className='flex-row items-center px-4 py-2 rounded-full bg-base-200'>
            <RadixIcon name='paper-plane' size={16} color={'white'} />
            <Text className='ml-2 text-sm text-white font-midnight-sans-st-36'>Send</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          className='ml-2'
          onPress={() => {
          }}>
          <View className='flex-row items-center px-4 py-2 rounded-full bg-base-200'>
            <RadixIcon name='dashboard' size={16} color={'white'} />
            <Text className='ml-2 text-sm text-white font-midnight-sans-st-36'>Receive</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <Image
          className='w-full'
          source={require('@/assets/images/Chart.png')} />
      </View>
      <View className='flex-row mt-8'>
        <TouchableOpacity
          onPress={() => {
          }}>
          <View className='flex-row items-center px-4 py-2 bg-white rounded-full'>
            <Text className='px-2 text-sm text-base-100 font-midnight-sans-st-36'>
              1H
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
          }}>
          <View className='flex-row items-center px-4 py-2 rounded-full'>
            <Text className='text-sm text-white font-midnight-sans-st-36'>
              1D
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
          }}>
          <View className='flex-row items-center px-4 py-2 rounded-full'>
            <Text className='text-sm text-white font-midnight-sans-st-36'>
              30D
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
          }}>
          <View className='flex-row items-center px-4 py-2 rounded-full'>
            <Text className='text-sm text-white font-midnight-sans-st-36'>
              90D
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
          }}>
          <View className='flex-row items-center px-4 py-2 rounded-full'>
            <Text className='text-sm text-white font-midnight-sans-st-36'>
              YTD
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
          }}>
          <View className='flex-row items-center px-4 py-2 rounded-full'>
            <Text className='text-sm text-white font-midnight-sans-st-36'>
              All
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View className='mt-6'>
        <Text className='text-white font-midnight-sans-st-36'>
          Crypto
        </Text>
        <View className='flex-row items-center py-4 border-b border-base-200'>
          <View className='flex-row items-end mr-2'>
            <Image source={require('@/assets/images/Ethereum.png')} />
            <Image
              className='w-4 h-4 ml-[-8]'
              source={require('@/assets/images/Ethereum.png')}
            />
          </View>
          <View className='flex-1'>
            <Text className='text-sm text-white font-midnight-sans-st-36'>
              Ethereum
            </Text>
            <Text className='text-sm text-gray font-midnight-sans-st-36'>
              1.8 ETH
            </Text>
          </View>
          <View>
            <Text className='text-sm text-right text-white font-midnight-sans-st-36'>
              $4,800.00
            </Text>
            <View className='flex-row items-center justify-end'>
              <RadixIcon size={16} color={Colors.green} name='triangle-up' />
              <Text className='text-sm text-right text-green font-midnight-sans-st-36'>
                12.08%
              </Text>
            </View>
          </View>
        </View>
        <View className='flex-row items-center py-4 border-b border-base-200'>
          <View className='flex-row items-end mr-2'>
            <Image source={require('@/assets/images/usdc.png')} />
            <Image
              className='w-4 h-4 ml-[-8]'
              source={require('@/assets/images/Ethereum.png')}
            />
          </View>
          <View className='flex-1'>
            <Text className='text-sm text-white font-midnight-sans-st-36'>
              USD Coin
            </Text>
            <Text className='text-sm text-gray font-midnight-sans-st-36'>
              1,000.99 USDC
            </Text>
          </View>
          <View>
            <Text className='text-sm text-right text-white font-midnight-sans-st-36'>
              $1,00.00
            </Text>
            <View className='flex-row items-center justify-end'>
              <RadixIcon size={16} color={Colors.green} name='triangle-up' />
              <Text className='text-sm text-right text-green font-midnight-sans-st-36'>
                2.54%
              </Text>
            </View>
          </View>
        </View>
        <View className='flex-row items-center py-4 '>
          <View className='flex-row items-end mr-2'>
            <Image source={require('@/assets/images/polygon.png')} />
            <Image
              className='w-4 h-4 ml-[-8]'
              source={require('@/assets/images/Ethereum.png')}
            />
          </View>
          <View className='flex-1'>
            <Text className='text-sm text-white font-midnight-sans-st-36'>
              Polygon
            </Text>
            <Text className='text-sm text-gray font-midnight-sans-st-36'>
              0.0003 MATIC
            </Text>
          </View>
          <View>
            <Text className='text-sm text-right text-white font-midnight-sans-st-36'>
              $4,800.00
            </Text>
            <View className='flex-row items-center justify-end'>
              <RadixIcon size={16} color={Colors.green} name='triangle-up' />
              <Text className='text-sm text-right text-green font-midnight-sans-st-36'>
                0.00%
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View className='mt-4'>
        <Text className='text-white font-midnight-sans-st-36'>
          MFTs
        </Text>
        <View className='flex-row mt-4'>
          <View className='mr-2 border-4 rounded-lg flex-full border-base-200'>
            <Image
              className='w-full'
              source={require('@/assets/images/nft-0.png')}
            />
          </View>
          <View className='border-4 rounded-lg flex-full border-base-200'>
            <Image
              className='w-full'
              source={require('@/assets/images/nft-1.png')}
            />
          </View>
        </View>
      </View>
      <View className='mt-4'>
        <View className='flex-row items-center mt-4'>
          <Text className='flex-1 text-white font-midnight-sans-st-36'>
            Recent transactions
          </Text>
          <MoreButton />
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

        <View className='flex-row py-4 border-b border-base-200'>
          <View className='flex-row items-center flex-1'>
            <RadixIcon name='arrow-up' size={16} color={Colors.white} />
            <Image
              className='mx-2'
              source={require('@/assets/images/Ethereum.png')}
            />
            <View>
              <Text className='text-sm text-white font-midnight-sans-st-36'>
                Transfer out
              </Text>
              <Text className='text-sm text-gray font-midnight-sans-st-36'>
                Jun 05, 2024, 11:21 AM
              </Text>
            </View>
          </View>
          <Text className='text-sm text-white font-midnight-sans-st-36'>0.45 ETH</Text>
        </View>

        <View className='flex-row py-4'>
          <View className='flex-row items-center flex-1'>
            <RadixIcon name='arrow-down' size={16} color={Colors.white} />
            <Image
              className='mx-2'
              source={require('@/assets/images/Ethereum.png')}
            />
            <View>
              <Text className='text-sm text-white font-midnight-sans-st-36'>
                Transfer in
              </Text>
              <Text className='text-sm text-gray font-midnight-sans-st-36'>
                Jun 05, 2024, 11:21 AM
              </Text>
            </View>
          </View>
          <Text className='text-sm text-white font-midnight-sans-st-36'>0.45 ETH</Text>
        </View>
      </View>
    </View>
  )
}