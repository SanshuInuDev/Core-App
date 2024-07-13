import SanshuLogo from '@/components/common/SanshuLogo'
import SearchButton from '@/components/common/SearchButton'
import ConnectPage from '@/components/portfolio/ConnectPage'
import MainPage from '@/components/portfolio/MainPage'
import { useMemo, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'

export default function Portfolio() {
  const [pageNum, setPageNum] = useState<number>(0)

  const Pages = useMemo(() => {
    return [
      <ConnectPage setPage={setPageNum}/>,
      <MainPage />
    ]
  }, [])
  return (
    <View className='flex-1 px-6 bg-base-100'>
      <ScrollView className='flex-1 h-1 py-12'>
        <View className='flex-row items-center justify-between pb-6'>
          <SanshuLogo />
          <SearchButton id='market-search-sheet' />
        </View>
        <View>
          <Text className='text-white font-midnight-sans-st-48 text-7.5'>Portfolio</Text>
        </View>
        {
          Pages[pageNum]
        }
      </ScrollView>
    </View>
  )
}