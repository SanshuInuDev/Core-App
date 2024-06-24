import { createRef, useEffect, useRef } from "react";
import { Button, ScrollView, Text, TextInput, View } from "react-native";
import { SheetProps } from "react-native-actions-sheet";
import AppSheet from "../AppSheet";
import SheetCloseButton from "../SheetCloseButton";

export default function MarketSearchSheet(props: SheetProps) {
  return (
    <AppSheet provider={props}>
      <View className='flex-row items-center pb-4'>
        <Text className='flex-1 text-white text-5 font-midnight-sans-st-36'>Search</Text>
        <SheetCloseButton id='market-search-sheet' />
      </View>
      <ScrollView>
        <View>
          <TextInput
            placeholderTextColor={'white'}
            placeholder="/ What are you looking for?"
            className="h-12 px-4 py-2 text-white border border-white rounded-full" />
        </View>
      </ScrollView>
    </AppSheet>
  )
}