import RadixIcon from '@/components/RadixIcon';
import Button from '@/components/common/Button';
import SanshuLogo from '@/components/common/SanshuLogo';
import SearchButton from '@/components/common/SearchButton';
import MainButtonList from '@/components/more/MainButtonList';
import useAppProvider from '@/hooks/useAppProvider';
import { Text, View, ScrollView } from 'react-native';
import { SheetManager } from 'react-native-actions-sheet';

export default function More() {
  const { isAuthenticated, setAddress } = useAppProvider()
  return (
    <View className='flex-1 px-6 bg-base-100'>
      <ScrollView className='flex-1 h-1 py-12'>
        <View className='flex-row items-center justify-between pb-6'>
          <SanshuLogo />
          <SearchButton id='market-search-sheet' />
        </View>
        <View>
          <Text className='text-white font-midnight-sans-st-48 text-7.5'>More</Text>
        </View>
        <View className='h-10' />
        <MainButtonList
          title='Account'
          source={[
            {
              icon: <RadixIcon name='person' color='white' />,
              title: 'Profile'
            },
            {
              icon: <RadixIcon name='lock-closed' color='white' />,
              title: 'Security'
            },
            {
              icon: <RadixIcon name='bell' color='white' />,
              title: 'Notification Settings'
            }
          ]}
        />
        <View className='h-10' />
        <MainButtonList
          title='General'
          source={[
            {
              icon: <RadixIcon name='globe' color='white' />,
              title: 'Languate',
              subTitle: 'English'
            },
            {
              icon: <RadixIcon name='mask-off' color='white' />,
              title: 'Currency',
              subTitle: 'USD'
            }
          ]}
        />
        <View className='h-16' />
      </ScrollView>
      {
        isAuthenticated ?
          <View className='flex-row pb-16'>
            <Button
              onPress={() => {
                setAddress(undefined)
              }}
            >
              <Text className='text-sm text-center text-base-100 font-midnight-sans-st-36'>
                Log out
              </Text>
            </Button>
          </View> :
          <View className='flex-row pb-16'>
            <Button
              onPress={() => {
                SheetManager.show('login-sheet', {
                  payload: {
                    mode: 'Login'
                  }
                })
              }}
            >
              <Text className='text-sm text-center text-base-100 font-midnight-sans-st-36'>
                Log in
              </Text>
            </Button>
            <View className='w-4' />
            <Button
              theme='dark'
              onPress={() => {
                SheetManager.show('login-sheet', {
                  payload: {
                    mode: 'Signup'
                  }
                })
              }}
            >
              <Text className='text-sm text-center text-white font-midnight-sans-st-36'>
                Sign up
              </Text>
            </Button>
          </View>
      }

    </View>
  );
}
