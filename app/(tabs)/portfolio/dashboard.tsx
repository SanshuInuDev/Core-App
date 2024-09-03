import RadixIcon from '@/components/RadixIcon'
import CryptoPannel from '@/components/portfolio/CryptoPannel'
import NftPannel from '@/components/portfolio/NftPannel'
import TransactionPannel from '@/components/portfolio/TransactionPannel'
import Colors from '@/lib/Colors'
import { SanshuServer } from '@/lib/fetcher/axios'
import { Wallet } from '@/lib/types'
import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { SheetManager } from 'react-native-actions-sheet'

export default function PortfolioDashboard() {
  const [wallet, setWallet] = useState<Wallet | null>(null)
  const wallets = useQuery({
    queryKey: ['wallets'],
    queryFn: () => SanshuServer.get<Wallet[]>('/wallet')
  })

  useEffect(() => {
    if (wallets.data?.data.length) {
      setWallet(wallets.data?.data[0])
    }
  }, [wallets])
  return (
    <View className='pb-28'>
      <TouchableOpacity
        onPress={async () => {
          const res = await SheetManager.show('portfolio-add-portfolio-sheet', {
            payload: wallets.data?.data ?? []
          })

          if (res) setWallet(res)
        }}
      >
        <View className='flex-row items-center'>
          <Text className='mr-2 text-2xl text-white font-midnight-sans-st-36'>
            {wallet?.title}
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
      <View className='flex-row mt-4'>
        <TouchableOpacity
          onPress={() => {
            SheetManager.show('portfolio-swap-sheet')
          }}>
          <View className='flex-row items-center px-4 py-2 rounded-full bg-base-200'>
            <RadixIcon name='update' size={16} color={'white'} />
            <Text className='ml-2 text-sm text-white font-midnight-sans-st-36'>Swap</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          className='ml-2'
          onPress={() => {
            SheetManager.show('portfolio-send-sheet')
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
      {
        wallet?.address &&
        <>
          <View className='mt-6'>
            <CryptoPannel address={wallet.address} />
          </View>
          <View className='mt-4'>
            <NftPannel address={wallet.address} />
          </View>
          <View className='mt-4'>
            <TransactionPannel address={wallet.address} />
          </View>
        </>
      }
    </View>
  )
}