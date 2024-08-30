import Button from '@/components/common/Button';
import MainWatchAddress from '@/components/watching/MainWatchAddress';
import MainWatchList from '@/components/watching/MainWatchList';
import { router } from 'expo-router';
import { View } from 'react-native';

export default function WatchList() {

  return (
    <View>
      <View className='flex-row p-1 mb-6 rounded-full bg-base-200'>
        <Button
          className='flex-full'
          size='sm'
          theme={'dark'}
          onPress={() => router.push('/watching/list')}
        >
          Watch List
        </Button>
        <Button
          className='flex-full'
          size='sm'
          theme={'light'}
        >
          Watch Address
        </Button>
      </View>
      <MainWatchAddress />
    </View>
  );
}
