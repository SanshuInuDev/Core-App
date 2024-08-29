import RadixIcon from '@/components/RadixIcon';
import Button from '@/components/common/Button';
import { SanshuServer } from '@/lib/fetcher/axios';
import { WatchAdressResponse, WatchListItemResponse, WatchListType } from '@/lib/types';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SheetManager } from 'react-native-actions-sheet';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function MainWatchAddress() {
  const [mainList, setMainList] = useState<WatchListType | undefined>()
  const watchlist = useQuery({
    queryKey: ['watch-address'],
    queryFn: () => {
      return SanshuServer.get<WatchListType[]>('/watch/address')
    }
  })

  useEffect(() => {
    setMainList(watchlist.data?.data.find(watchlist => watchlist.default))
  }, [watchlist.data])

  const watchlistItems = useQuery({
    queryKey: ['watch-address-items', mainList?.id],
    queryFn: () => {
      if (mainList?.id)
        return SanshuServer.get<WatchAdressResponse>(`/watch/address/${mainList.id}`)
      return null
    }
  })

  return (
    <View>
      <View className='flex-row items-center'>
        <TouchableOpacity
          onPress={async () => {
            const res = await SheetManager.show('watching-switch-address-sheet', {
              payload: watchlist.data?.data
            })
            if (res) {
              setMainList(res)
            }
          }}
          className='flex-row items-center flex-1'>
          <Text className='mr-2 text-white font-midnight-sans-st-36 text-5'>
            Main Watch Address
          </Text>
          <View className='items-center justify-center w-6 h-6 border rounded-full border-gray'>
            <RadixIcon name='caret-sort' size={16} color={Colors.white} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={async () => {
            const res = await SheetManager.show('watching-add-address-sheet')
            if (res) {
              await SanshuServer.post<WatchAdressResponse>(`/watch/address/${mainList?.id}`, {
                address: res
              })
              watchlistItems.refetch()
            }
            console.log(res)
          }}
          className='items-center justify-center w-10 h-10 mr-2 rounded-full bg-base-200'>
          <RadixIcon name='plus' size={16} color={Colors.white} />
        </TouchableOpacity>
        <TouchableOpacity className='items-center justify-center w-10 h-10 rounded-full bg-base-200'>
          <RadixIcon name='mixer-horizontal' size={16} color={Colors.white} />
        </TouchableOpacity>
      </View>
      {
        watchlistItems.data?.data.items.length ?
          watchlistItems.data.data.items.map(item => (
            <View key={item.addressId} className="flex-row items-center p-4 mt-4 border rounded-3xl border-gray">
              <View className="">
                <View className="flex-row">
                  <Image
                    source={require('@/assets/images/avatar-1.png')}
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                </View>
              </View>
              <View className='flex-1 ml-2'>
                <Text className="flex-1 text-sm text-white font-midnight-sans-st-36">
                  {item.username ?? `${item.address?.substring(0, 3)}.${item.address?.substring(item.address.length - 5, item.address.length - 1)}`}
                </Text>
                <View className='flex-row'>
                  <Text className='mt-2 mr-2 text-sm text-gray font-midnight-sans-st-36'>
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

              </View>
              <RadixIcon name="caret-right" color={Colors.white} />
            </View>
          )) :
          <View className='items-center py-10 mt-4 border border-base-200 rounded-3xl'>
            <View className='flex-row'>
              <Image
                source={require('@/assets/images/avatar-0.png')}
              />
              <Image
                className='ml-[-8px]'
                source={require('@/assets/images/avatar-1.png')}
              />
              <Image
                className='ml-[-8px]'
                source={require('@/assets/images/avatar-2.png')}
              />
              <Image
                className='ml-[-8px]'
                source={require('@/assets/images/avatar-3.png')}
              />
            </View>
            <Text className='mt-2 text-white font-midnight-sans-st-36 text-5'>
              Watch an address
            </Text>
            <Text className='mt-2 text-sm text-gray font-midnight-sans-st-36'>
              Add your favourite crypto assets
            </Text>
            <Button
              className='mt-6'
              theme='dark'
              onPress={() => {
                SheetManager.show('watching-add-address-sheet')
              }}
            >
              Add Address
            </Button>
          </View>
      }

    </View>
  )
}