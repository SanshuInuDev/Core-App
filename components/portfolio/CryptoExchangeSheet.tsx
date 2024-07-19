import React from 'react'
import AppSheet from '@/components/AppSheet'
import { View, Text, Image, TextInput } from 'react-native'
import SheetCloseButton from '@/components/common/SheetCloseButton'
import IconListArrowButton from '@/components/common/IconListArrowButton'
import { RouteScreenProps, SheetManager } from 'react-native-actions-sheet'
import BackButton from '../common/BackButton'
import Colors from '@/lib/Colors'
import Button from '../common/Button'
import { router } from 'expo-router'

function ExchangeSelete({ router }: RouteScreenProps<"portfolio-crypto-exchange-sheet", "exchange-select">) {
  return (
    <View>
      <View className='flex-row items-center pb-6'>
        <Text className='flex-1 text-white text-5 font-midnight-sans-st-36'>Connect crypto exchange</Text>
        <SheetCloseButton id='portfolio-crypto-exchange-sheet' />
      </View>
      <View>
        <IconListArrowButton
          icon={<Image source={require('@/assets/images/Binance.png')} />}
          title='Connect Binance Account'
          onPress={() => {
            router.navigate('coninbase-exchange')
          }}
        />
        <IconListArrowButton
          icon={<Image source={require('@/assets/images/Coinbase.png')} />}
          title='Connect Coinbase Account'
          addClassName='mt-2'
        />
        <IconListArrowButton
          icon={<Image source={require('@/assets/images/Kraken.png')} />}
          title='Connect Kraken Account'
          addClassName='mt-2'
        />
      </View>
    </View>
  )
}

function CoinbaseExchange({ router: sheetRouter }: RouteScreenProps<"portfolio-crypto-exchange-sheet", "coninbase-exchange">) {
  return (
    <View className='h-full'>
      <View className='flex-row justify-between pb-6'>
        <BackButton
          onPress={() => {
            sheetRouter.goBack()
          }}
        />
        <Text className='flex-1 text-center text-white text-5 font-midnight-sans-st-36'>
          Connect Binance
        </Text>
        <SheetCloseButton id='portfolio-crypto-exchange-sheet' />
      </View>
      <View className='flex-1'>
        <TextInput
          placeholderTextColor={Colors.gray}
          placeholder="Enter portfolio name"
          className="h-12 px-4 py-2 text-white border rounded-full border-gray" />
        <View className='mt-6'>
          <Text className='text-xs text-white font-midnight-sans-st-36'>
            Important safety notice:
          </Text>
          <View className='flex-row px-2 mt-2'>
            <Text className='w-3.5 text-xs text-gray font-midnight-sans-st-36'>
              1.
            </Text>
            <Text className='text-xs text-gray font-midnight-sans-st-36'>
              Creating a new portfolio by connecting your Binance account does not give Sanshu access to your Binance account, nor the ability to remove your funds.
            </Text>
          </View>
          <View className='flex-row px-2 mt-2'>
            <Text className='w-3.5 text-xs text-gray font-midnight-sans-st-36'>
              2.
            </Text>
            <Text className='text-xs text-gray font-midnight-sans-st-36'>
              Sanshu will never request for trade permission from its users.
            </Text>
          </View>
          <View className='flex-row px-2 mt-2'>
            <Text className='w-3.5 text-xs text-gray font-midnight-sans-st-36'>
              3.
            </Text>
            <Text className='text-xs text-gray font-midnight-sans-st-36'>
              Once you cancel account authorization on your Binance settings page, Sanshu will no longer be able to extract data from your account.
            </Text>
          </View>
        </View>
      </View>
      <Button
        onPress={() => {
          SheetManager.hide('portfolio-crypto-exchange-sheet')
          router.navigate('/portfolio/exchange')
        }}
        className='w-full mb-6'
      >
        Continue with Binance
      </Button>
    </View>
  )
}

export default function CryptoExchangeSheet() {
  return (
    <AppSheet routes={[
      { name: 'exchnage-select', component: ExchangeSelete },
      { name: 'coninbase-exchange', component: CoinbaseExchange }
    ]} />
  )
}
