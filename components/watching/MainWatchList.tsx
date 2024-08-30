import RadixIcon from '@/components/RadixIcon';
import { ScrollView, Text, TouchableOpacity, View, Image } from 'react-native';
import { SheetManager } from 'react-native-actions-sheet';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import WatchListItem from './WatchListItem';
import { useQuery } from '@tanstack/react-query';
import { SanshuServer } from '@/lib/fetcher/axios';
import { WatchListItemResponse, WatchListType } from '@/lib/types';
import { useCallback, useEffect, useState } from 'react';
import { title } from 'process';
import Button from '../common/Button';


export default function MainWatchList() {
  const [mainList, setMainList] = useState<WatchListType | undefined>()
  const watchlist = useQuery({
    queryKey: ['watch-list'],
    queryFn: () => {
      return SanshuServer.get<WatchListType[]>('/watch/list')
    }
  })

  useEffect(() => {
    setMainList(watchlist.data?.data.find(watchlist => watchlist.default))
  }, [watchlist.data])

  const watchlistItems = useQuery({
    queryKey: ['watch-items', mainList?.id],
    queryFn: () => {
      if (mainList?.id)
        return SanshuServer.get<WatchListItemResponse>(`/watch/list/${mainList.id}`)
      return null
    }
  })

  const onSelectCoins = useCallback(async () => {
    const res = await SheetManager.show('watching-add-list-sheet', {
      payload: watchlistItems.data?.data.coins ?? []
    })

    if (res) {
      await SanshuServer.put(`/watch/list/${mainList?.id}/coins`, {
        title: mainList?.title,
        items: res
      })
      watchlistItems.refetch()
    }
  }, [watchlistItems])

  const onCoinDelete = useCallback(async (id: string) => {
    await SanshuServer.delete(`/watch/list/${mainList?.id}/${id}`)
    watchlistItems.refetch()
  }, [mainList])

  return (
    <View>
      <View className='flex-row items-center'>
        <TouchableOpacity
          className='flex-row items-center flex-1'
          onPress={async () => {
            const res = await SheetManager.show('watching-switch-list-sheet', {
              payload: watchlist.data?.data
            })
            if (res) {
              setMainList(res)
            }
          }}
        >
          <Text className='mr-2 text-white font-midnight-sans-st-36 text-5'>
            {mainList?.title}
          </Text>
          <View className='items-center justify-center w-6 h-6 border rounded-full border-gray'>
            <RadixIcon name='caret-sort' size={16} color={Colors.white} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          className='items-center justify-center w-10 h-10 mr-2 rounded-full bg-base-200'
          onPress={onSelectCoins}
        >
          <RadixIcon name='plus' size={16} color={Colors.white} />
        </TouchableOpacity>
        <TouchableOpacity className='items-center justify-center w-10 h-10 rounded-full bg-base-200'>
          <RadixIcon name='mixer-horizontal' size={16} color={Colors.white} />
        </TouchableOpacity>
      </View>
      {
        watchlistItems.data?.data.items.length ?
          <ScrollView className='mt-2'>
            <View>
              {
                watchlistItems.data?.data.items.map((data, idx) =>
                  <WatchListItem key={data.id} info={data} onCoinDelete={onCoinDelete} />)
              }
            </View>
          </ScrollView> :
          <View className='items-center py-10 mt-4 border border-base-200 rounded-3xl'>
            <View className='flex-row'>
              <Image
                source={require('@/assets/images/Atops.png')}
              />
              <Image
                className='ml-[-8px]'
                source={require('@/assets/images/bitcoin.png')}
              />
              <Image
                className='ml-[-8px]'
                source={require('@/assets/images/pink.png')}
              />
              <Image
                className='ml-[-8px]'
                source={require('@/assets/images/polygon.png')}
              />
            </View>
            <Text className='mt-2 text-white font-midnight-sans-st-36 text-5'>
              Add assets
            </Text>
            <Text className='mt-2 text-sm text-gray font-midnight-sans-st-36'>
              Add your favourite crypto assets
            </Text>
            <Button
              className='mt-6'
              theme='dark'
              onPress={onSelectCoins}
            >
              Discover
            </Button>
          </View>
      }
    </View>
  )
}