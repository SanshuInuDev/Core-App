import React from 'react';
import { Text, View } from 'react-native';


export default function ScreenInfo({ path }: { path: string }) {
  return (
    <View>
      <Text style={{
        color: 'white'
      }}>
        {path}
      </Text>
    </View>
  );
}
