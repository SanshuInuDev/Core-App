import SanshuLogo from '@/components/common/SanshuLogo'
import SearchButton from '@/components/common/SearchButton'
import { Slot } from 'expo-router'
import { ScrollView, Text, View } from 'react-native'


export default function PortfolioLayout() {
  return (
    <View className='flex-1 px-6 bg-base-100'>
      <ScrollView className='flex-1 h-1 py-12'>
        <View className='flex-row items-center justify-between pb-6'>
          <SanshuLogo />
          <SearchButton id='market-search-sheet' />
        </View>
        <Slot />
      </ScrollView>
    </View>
  )
}