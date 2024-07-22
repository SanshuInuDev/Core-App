import AppSheet from '@/components/AppSheet';
import { Text, View } from 'react-native';
import SheetCloseButton from '../common/SheetCloseButton';
import PortfolioSelectButtonList from './PortfolioSelectButtonList';

export default function PortfolioSelectSheet() {
  return (
    <AppSheet>
      <View className='flex-row items-center'>
        <Text className='flex-1 text-white text-5 font-midnight-sans-st-36'>Add new portfolio</Text>
        <SheetCloseButton id='portfolio-select-sheet' />
      </View>
      <PortfolioSelectButtonList />
    </AppSheet>
  )
}