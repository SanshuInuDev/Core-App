import AppSheet from '@/components/AppSheet'
import BackButton from '@/components/common/BackButton'
import Button, { IconButton } from '@/components/common/Button'
import SheetCloseButton from '@/components/common/SheetCloseButton'
import { fetchCoinsByMarketCap } from '@/lib/fetcher/client'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { ScrollView, Text, TextInput, View } from 'react-native'
import { RouteScreenProps, SheetManager } from 'react-native-actions-sheet'
import DiscoverItem from './DiscoverItem'
import RadixIcon from '@/components/RadixIcon'
import Colors from '@/lib/Colors'

function Discover({ router }: RouteScreenProps<"portfolio-manual-add-assets-sheet", "discovers">) {
  const { data } = useQuery({
    queryKey: ['marketCap'],
    queryFn: fetchCoinsByMarketCap
  })
  return (
    <View>
      <View className='flex-row items-center pt-6 pb-4'>
        <Text className='flex-1 text-white text-5 font-midnight-sans-st-36'>Discover</Text>
        <SheetCloseButton id='portfolio-manual-add-assets-sheet' />
      </View>
      <View>
        <TextInput
          placeholderTextColor={'white'}
          placeholder="/ Search crypto"
          className="h-12 px-4 py-2 text-white border border-white rounded-full" />
      </View>
      <ScrollView className='mt-4'>
        {
          data?.map((item, idx) => (
            <DiscoverItem
              data={item}
              key={idx}
              onPress={() => {
                router.navigate('amount')
              }}
            />
          ))
        }
      </ScrollView>
    </View>
  )
}

function InputAmount({ router }: RouteScreenProps<"portfolio-manual-add-assets-sheet", "amount">) {
  return (
    <View className='h-full'>
      <View className='flex-row items-center justify-between pb-6'>
        <BackButton
          onPress={() => {
            router.goBack()
          }}
        />
        <View className='flex-row items-center h-full px-3 rounded-full bg-base-200 '>
          <Text className='mr-1 text-sm text-white font-midnight-sans-st-36'>
            Buy
          </Text>
          <RadixIcon name='caret-down' size={16} color={Colors.white} />
        </View>
        <SheetCloseButton id='portfolio-manual-add-assets-sheet' />
      </View>
      <View className='flex-1 mt-20'>
        <View className='flex-row'>
          <View className='flex-1'>
            <View className='flex-row'>
              <TextInput
                defaultValue='0.00'
                className='text-2xl text-white font-midnight-sans-st-48'
              />
              <Text className='ml-1 text-2xl text-white font-midnight-sans-st-48'>
                USDT
              </Text>
            </View>
            <Text className='text-gray font-midnight-sans-st-36'>
              ${'64,607.27'} per coin
            </Text>
          </View>
          <View>
            <IconButton
              theme='dark'
              size='sm'
              icon={
                <RadixIcon color={Colors.white} size={16} name='height' />
              }
            >
              USD
            </IconButton>
          </View>
        </View>
      </View>
      <Button
        onPress={() => {
          router.navigate('date')
        }}
        className='w-full mb-6'
      >
        Add transaction
      </Button>
    </View>
  )
}

function InputDate({ router }: RouteScreenProps<"portfolio-manual-add-assets-sheet", "date">) {
  return (
    <View className='h-full'>
      <View className='flex-row items-center justify-between pb-6'>
        <BackButton
          onPress={() => {
            router.goBack()
          }}
        />
        <View className='flex-row items-center h-full px-3 rounded-full bg-base-200 '>
          <Text className='mr-1 text-sm text-white font-midnight-sans-st-48'>
            Set Date & Time
          </Text>
        </View>
        <SheetCloseButton id='portfolio-manual-add-assets-sheet' />
      </View>
      <View className='flex-1 mt-20'>

      </View>
      <Button
        onPress={() => {
          router.navigate('price-per-coin')
        }}
        className='w-full mb-6'
      >
        Change Date & Time
      </Button>
    </View>
  )
}

function InputPricePerCoin({ router }: RouteScreenProps<"portfolio-manual-add-assets-sheet", "price-per-coin">) {
  return (
    <View className='h-full'>
      <View className='flex-row items-center justify-between pb-6'>
        <BackButton
          onPress={() => {
            router.goBack()
          }}
        />
        <View className='flex-row items-center h-full px-3 rounded-full bg-base-200 '>
          <Text className='mr-1 text-sm text-white font-midnight-sans-st-36'>
            Price per coin
          </Text>
        </View>
        <SheetCloseButton id='portfolio-manual-add-assets-sheet' />
      </View>
      <View className='flex-1 mt-20'>
        <View className='flex-row'>
          <View className='flex-1'>
            <View className='flex-row'>
              <TextInput
                defaultValue='$64,607.27'
                className='text-2xl text-white font-midnight-sans-st-48'
              />
            </View>
            <Text className='pr-8 text-gray font-midnight-sans-st-36'>
              Enter the price per Bitcoin at the time of purchase.
            </Text>
          </View>

        </View>
      </View>
      <Button
        onPress={() => {
          router.navigate('fee')
        }}
        className='w-full mb-6'
      >
        Continue
      </Button>
    </View>
  )
}

function InputFee({ router }: RouteScreenProps<"portfolio-manual-add-assets-sheet", "fee">) {
  return (
    <View className='h-full'>
      <View className='flex-row items-center justify-between pb-6'>
        <BackButton
          onPress={() => {
            router.goBack()
          }}
        />
        <View className='flex-row items-center h-full px-3 rounded-full bg-base-200 '>
          <Text className='mr-1 text-sm text-white font-midnight-sans-st-36'>
            Add Fee
          </Text>
        </View>
        <SheetCloseButton id='portfolio-manual-add-assets-sheet' />
      </View>
      <View className='flex-1 mt-20'>
        <View className='flex-row'>
          <View className='flex-1'>
            <View className='flex-row'>
              <TextInput
                defaultValue='$1.50'
                className='text-2xl text-white font-midnight-sans-st-48'
              />
            </View>
            <Text className='pr-8 text-gray font-midnight-sans-st-36'>
              the transaction fee entered will be included as part of the Profit/Loss
            </Text>
          </View>

        </View>
      </View>
      <Button
        onPress={() => {
          router.navigate('notes')
        }}
        className='w-full mb-6'
      >
        Continue
      </Button>
    </View>
  )
}

function InputNotes({ router }: RouteScreenProps<"portfolio-manual-add-assets-sheet", "notes">) {
  return (
    <View className='h-full'>
      <View className='flex-row items-center justify-between pb-6'>
        <BackButton
          onPress={() => {
            router.goBack()
          }}
        />
        <View className='flex-row items-center h-full px-3 rounded-full bg-base-200 '>
          <Text className='mr-1 text-sm text-white font-midnight-sans-st-36'>
            Add Notes
          </Text>
        </View>
        <SheetCloseButton id='portfolio-manual-add-assets-sheet' />
      </View>
      <View className='flex-1 mt-2'>
        <View className='flex-row'>
          <TextInput
            placeholder='Enter notes about this transaction...'
            placeholderTextColor={Colors.gray}
            className='text-gray font-midnight-sans-st-36'
          />
        </View>
      </View>
      <Button
        onPress={() => {
          SheetManager.hide('portfolio-manual-add-assets-sheet')
        }}
        className='w-full mb-6'
      >
        Continue
      </Button>
    </View>
  )
}
export default function ManualAddAssets() {
  return (
    <AppSheet routes={[
      { name: 'discovers', component: Discover },
      { name: 'amount', component: InputAmount },
      { name: 'date', component: InputDate },
      { name: 'price-per-coin', component: InputPricePerCoin },
      { name: 'fee', component: InputFee },
      { name: 'notes', component: InputNotes },
    ]} />
  )
}
