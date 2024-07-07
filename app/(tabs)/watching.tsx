import React from "react";
import { Image, Text, View } from 'react-native';
import useAppProvider from "@/hooks/useAppProvider";

export default function Watching() {
  const {address} = useAppProvider()
  return (
    <View >
      <View >
        <Image
          source={require('@/assets/images/Logo.png')}
        />
        <Image
          source={require('@/assets/images/magnifying-glass.png')}
        />
      </View>
      <Text className="text-lg text-black">{address}</Text>
      {/* <TouchableOpacity
        className="mt-4"
        onPress={() => {
          SheetManager.show('app-sheet');
        }}>
        <Text className="px-4 py-2 text-2xl text-white border border-gray">Open</Text>
      </TouchableOpacity> */}
    </View>
  );
}
