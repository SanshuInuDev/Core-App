import RadixIcon from '@/components/RadixIcon'
import MoreButton from '@/components/common/MoreButton'
import CryptoPannel from '@/components/portfolio/CryptoPannel'
import NftPannel from '@/components/portfolio/NftPannel'
import TransactionPannel from '@/components/portfolio/TransactionPannel'
import useAppProvider from '@/hooks/useAppProvider'
import Colors from '@/lib/Colors'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { SheetManager } from 'react-native-actions-sheet'
import { useLocalSearchParams, useGlobalSearchParams, Link } from 'expo-router';


export default function WatchWallet() {
  const local = useLocalSearchParams();
  const address = local.address as string
  return (
    <View className='pb-28'>
      <TouchableOpacity
        onPress={() => {
          SheetManager.show('portfolio-add-portfolio-sheet')
        }}
      >
        <View className='flex-row items-center'>
          <Text className='mr-2 text-2xl text-white font-midnight-sans-st-36'>
            {address && `${address?.substring(0, 3)}.${address?.substring(address.length - 5, address.length - 1)}`}
          </Text>
          <View className='items-center justify-center w-6 h-6 border rounded-full border-gray'>
            <RadixIcon name='caret-sort' size={16} color={Colors.white} />
          </View>
        </View>
        <View className='flex-row mt-2'>
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
      </TouchableOpacity>

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
      {
        address &&
        <>
          <View className='mt-6'>
            <CryptoPannel address={address} />
          </View>
          <View className='mt-4'>
            <NftPannel address={address} />
          </View>
          <View className='mt-4'>
            <TransactionPannel address={address} />
          </View>
        </>
      }
      {/* <View className='flex-row items-center'>
        <Text className='flex-1 mt-6 text-white font-midnight-sans-st-36 text-5'>
          Assets
        </Text>
        <TouchableOpacity className='items-center justify-center w-10 h-10 rounded-full bg-base-200'>
          <RadixIcon name='mixer-horizontal' size={16} color={Colors.white} />
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
        <View className='flex-row items-center mt-4'>
          <Text className='flex-1 text-white font-midnight-sans-st-36'>
            Recent transactions
          </Text>
          <MoreButton
            title='View more'
            onPress={() => {
              SheetManager.show('watching-transaction-sheet')
            }}
          />
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
      </View> */}
    </View>
  )
}