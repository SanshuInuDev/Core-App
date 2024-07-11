import SanshuLogo from '@/components/common/SanshuLogo';
import SearchButton from '@/components/common/SearchButton';
import Discover from '@/components/market/Discover';
import FeaturedDApps from '@/components/market/FeaturedDApps';
import GlobalMarketCap from '@/components/market/GlobalMarketCap';
import LatestCrypto from '@/components/market/LatestCrypto';
import TopMovers from '@/components/market/TopMovers';
import TrendingSocial from '@/components/market/TrendingSocial';
import { ScrollView, Text, View } from 'react-native';

export default function Market() {
  return (
    <ScrollView className='px-6 py-12 bg-base-100'>
      <View className='flex-row items-center justify-between'>
        <SanshuLogo />
        <SearchButton id='market-search-sheet' />
      </View>
      <View className='h-8' />
      <View>
        <Text className='text-white font-midnight-sans-st-48 text-7.5'>Market</Text>
        <GlobalMarketCap />
      </View>
      <View className='h-8' />
      <FeaturedDApps />
      <View className='h-8' />
      <TopMovers />
      <View className='h-8' />
      <Discover />
      <View className='h-8' />
      <LatestCrypto />
      <View className='h-8' />
      <TrendingSocial />
      <View className='h-32' />
    </ScrollView>
  );
}
