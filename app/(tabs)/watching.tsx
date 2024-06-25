import React from "react";
import { Image, View } from 'react-native';


export default function Watching() {

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
