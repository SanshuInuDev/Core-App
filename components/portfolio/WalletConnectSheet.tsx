import React from 'react'
import AppSheet from '@/components/AppSheet'
import { View, Text, Image } from 'react-native'
import SheetCloseButton from '@/components/common/SheetCloseButton'
import IconListArrowButton from '@/components/common/IconListArrowButton'
import { router } from 'expo-router'
import { SheetManager } from 'react-native-actions-sheet'

export default function WalletConnectSheet() {
  return (
    <AppSheet>
      <View>
        <View className='flex-row items-center pb-6'>
          <Text className='flex-1 text-white text-5 font-midnight-sans-st-36'>Connect Wallet</Text>
          <SheetCloseButton id='portfolio-wallet-connect-sheet' />
        </View>
        <View>
          <IconListArrowButton
            icon={<Image source={require('@/assets/images/MetaMask.png')} />}
            title='MetaMask'
            onPress={() => {
              router.push('/portfolio/dashboard')
              SheetManager.hide('portfolio-wallet-connect-sheet')
            }}
          />
          <IconListArrowButton
            icon={<Image source={require('@/assets/images/TrustWallet.png')} />}
            title='Trust Wallet'
            addClassName='mt-2'
          />
          <IconListArrowButton
            icon={<Image source={require('@/assets/images/WalletConnect.png')} />}
            title='WalletConnect'
            addClassName='mt-2'
          />
        </View>
      </View>
    </AppSheet>
  )
}
