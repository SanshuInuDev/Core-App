import RadixIcon from '@/components/RadixIcon'
import Button from '@/components/common/Button'
import IconList from '@/components/common/IconList'
import MoreButton from '@/components/common/MoreButton'
import Colors from '@/lib/Colors'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { SheetManager } from 'react-native-actions-sheet'

export default function Manual() {
  return (
    <View className='pb-28'>
      <TouchableOpacity
        onPress={() => {
          SheetManager.show('portfolio-add-portfolio-sheet')
        }}
      >
        <View className='flex-row items-center'>
          <Text className='mr-2 text-2xl text-white font-midnight-sans-st-36'>
            {`Binance Portfolio`}
          </Text>
          <View className='items-center justify-center w-6 h-6 border rounded-full border-gray'>
            <RadixIcon name='caret-sort' size={16} color={Colors.white} />
          </View>
        </View>
        <View className='flex-row mt-2'>
          <Text className='mt-2 mr-2 text-sm text-white font-midnight-sans-st-36'>
            {'$0.00'}
          </Text>
          <View className='flex-row items-center justify-center'>
            <Text className='mt-2 text-sm text-green font-midnight-sans-st-36'>
              {'0.00%'}
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
      <View className='mt-6'>
        <Text className='text-white font-midnight-sans-st-36'>
          Crypto
        </Text>
        <View className='items-center justify-center px-12 mt-6 border rounded-3xl border-base-200 py-7'>
          <IconList />
          <Text className='mt-2 text-white font-midnight-sans-st-36 text-5'>
            Need to add some crypto?
          </Text>
          <Text className='px-4 mt-2 text-sm text-center text-gray font-midnight-sans-st-36'>
            Manually add transaction to monitor your portfolio
          </Text>
          <Button
            theme='dark'
            className='mt-6'
            onPress={() => {
              SheetManager.show('portfolio-manual-add-assets-sheet')
            }}
          >
            Add transaction
          </Button>
        </View>
      </View>

    </View>
  )
}