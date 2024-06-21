import Discover from '@/components/market/Discover';
import FeaturedDApps from '@/components/market/FeaturedDApps';
import GlobalMarketCap from '@/components/market/GlobalMarketCap';
import LatestCrypto from '@/components/market/LatestCrypto';
import TopMovers from '@/components/market/TopMovers';
import TrendingSocial from '@/components/market/TrendingSocial';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SheetManager } from 'react-native-actions-sheet';
import RadixIcon from '@/components/RadixIcon';

export default function TabOneScreen() {
  return (
    <ScrollView className='px-6 py-12 bg-base100'>
      <View className='flex-row items-center justify-between'>
        <Image
          source={require('@/assets/images/Logo.png')}
        />
        <TouchableOpacity onPress={() => {
          SheetManager.show('discover-sheet')
        }}>
          <View className='p-2 rounded-full'>
            <RadixIcon name="magnifying-glass" size={20} color={'white'} />
          </View>
        </TouchableOpacity>
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
