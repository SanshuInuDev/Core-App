import AppSheet from "@/components/AppSheet";
import Button from "@/components/common/Button";
import SheetCloseButton from "@/components/common/SheetCloseButton";
import Colors from "@/lib/Colors";
import { fetchCoinsByMarketCap } from "@/lib/fetcher/client";
import { useQuery } from "@tanstack/react-query";
import { Text, TextInput, View, Image, TouchableOpacity } from "react-native";
import { ScrollView, SheetManager, SheetProps } from "react-native-actions-sheet";
import SearchCryptoItem from "./SearchCryptoItem";
import { useEffect, useMemo, useState } from "react";
import { MarketCoin } from "@/lib/coingecko/types";
import RadixIcon from "../RadixIcon";

export default function AddWatchListSheet(props: SheetProps<"watching-add-list-sheet">) {
  const { data } = useQuery({
    queryKey: ['marketCap'],
    queryFn: fetchCoinsByMarketCap
  })

  const coinLists = useMemo(() => {
    const temp: { [key: string]: MarketCoin } = {}
    if (data) {
      data.forEach(item => {
        temp[item.id] = item
      })
    }
    return temp
  }, [data])

  const [query, setQuery] = useState<string>('')
  const [checked, setChecked] = useState<string[]>(props.payload ?? [])
  return (
    <AppSheet>
      <View className='h-full'>
        <View className='flex-row items-center pb-6'>
          <Text className='flex-1 text-white text-5 font-midnight-sans-st-36'>Search Crypto</Text>
          <SheetCloseButton id='watching-add-list-sheet' />
        </View>
        <TextInput
          placeholderTextColor={Colors.gray}
          placeholder="/ Search crypto"
          value={query}
          onChangeText={setQuery}
          className="h-12 px-4 py-2 mb-6 text-white border rounded-full border-gray" />
        <ScrollView>
          <View className="flex-1">
            {
              data?.filter(item => item.name.toLowerCase().includes(query.toLowerCase()))
                .map((item, idx) => {
                  const checkedIndex = checked.indexOf(item.id)
                  return (
                    <SearchCryptoItem
                      data={item}
                      key={idx}
                      checked={checkedIndex > -1}
                      onPress={() => {
                        if (checkedIndex > -1) {
                          const temp = [...checked]
                          temp.splice(checkedIndex, 1)
                          setChecked(temp)
                        } else {
                          const temp = [...checked, item.id]
                          setChecked(temp)
                        }
                      }}
                    />
                  )
                })
            }
          </View>
        </ScrollView>
        <View className="h-8 mt-4">
          <ScrollView
            horizontal
          >
            {
              checked.map(key => (
                <TouchableOpacity
                  key={key}
                  className="py-1.5 px-2 rounded-full items-center bg-base-200 mr-2.5 flex-row"
                  onPress={() => {
                    const checkedIndex = checked.indexOf(key)
                    if (checkedIndex > -1) {
                      const temp = [...checked]
                      temp.splice(checkedIndex, 1)
                      setChecked(temp)
                    }
                  }}
                >
                  <Image
                    source={{ uri: coinLists[key]?.image }}
                    width={16}
                    height={16}
                    className="rounded-full"
                  />
                  <Text className="mx-2 text-sm text-white font-midnight-sans-st-36">
                    {coinLists[key]?.name}
                  </Text>
                  <RadixIcon color={Colors.white} size={16} name="cross-1" />
                </TouchableOpacity>
              ))
            }
          </ScrollView>
        </View>
        <Button
          onPress={() => {
            SheetManager.hide('watching-add-list-sheet', {
              payload: checked
            })
          }}
          className='w-full mt-4 mb-6'
        >
          Selected {`${checked.length}`} Token
        </Button>
      </View>
    </AppSheet>
  )
}