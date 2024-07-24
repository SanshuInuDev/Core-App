import AppSheet from "@/components/AppSheet";
import Button from "@/components/common/Button";
import SheetCloseButton from "@/components/common/SheetCloseButton";
import Colors from "@/lib/Colors";
import { fetchCoinsByMarketCap } from "@/lib/fetcher/client";
import { useQuery } from "@tanstack/react-query";
import { Text, TextInput, View, Image, TouchableOpacity } from "react-native";
import { ScrollView, SheetManager } from "react-native-actions-sheet";
import SearchCryptoItem from "./SearchCryptoItem";
import { useState } from "react";
import { MarketCoin } from "@/lib/coingecko/types";
import RadixIcon from "../RadixIcon";

export default function AddWatchListSheet() {
  const { data } = useQuery({
    queryKey: ['marketCap'],
    queryFn: fetchCoinsByMarketCap
  })
  const [query, setQuery] = useState<string>('')
  const [checked, setChecked] = useState<{ [key: string]: MarketCoin }>({})
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
                .map((item, idx) => (
                  <SearchCryptoItem
                    data={item}
                    key={idx}
                    checked={!!checked[item.symbol]}
                    onPress={() => {
                      const temp = { ...checked }
                      if (temp[item.symbol])
                        delete temp[item.symbol]
                      else
                        temp[item.symbol] = item
                      setChecked(temp)
                    }}
                  />
                ))
            }
          </View>
        </ScrollView>
        <View className="h-8 mt-4">
          <ScrollView
            horizontal
          >
            {
              Object.keys(checked).map(key => (
                <TouchableOpacity
                  key={key}
                  className="py-1.5 px-2 rounded-full items-center bg-base-200 mr-2.5 flex-row"
                  onPress={() => {
                    const temp = { ...checked }
                    delete temp[key]
                    setChecked(temp)
                  }}
                >
                  <Image
                    source={{ uri: checked[key].image }}
                    width={16}
                    height={16}
                    className="rounded-full"
                  />
                  <Text className="mx-2 text-sm text-white font-midnight-sans-st-36">
                    {checked[key].name}
                  </Text>
                  <RadixIcon color={Colors.white} size={16} name="cross-1" />
                </TouchableOpacity>
              ))
            }
          </ScrollView>
        </View>
        <Button
          onPress={() => {
            SheetManager.hide('watching-add-list-sheet')
          }}
          className='w-full mt-4 mb-6'
        >
          Selected {`${Object.keys(checked).length}`} Token
        </Button>
      </View>
    </AppSheet>
  )
}