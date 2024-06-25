import Colors from '@/lib/Colors';
import React, { useRef } from 'react';
import { View } from 'react-native';
import ActionSheet, {
  ActionSheetRef,
  SheetProps,
} from 'react-native-actions-sheet';

interface Props {
  provider: SheetProps
  children: React.ReactNode
}

export default function AppSheet({ provider, children }: Props) {
  const actionSheetRef = useRef<ActionSheetRef>(null);
  return (
    <ActionSheet
      id={provider.sheetId}
      ref={actionSheetRef}
      overlayColor={Colors.base200}
      defaultOverlayOpacity={0.7}
      containerStyle={{
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        height: '95%',
        backgroundColor: Colors.base100
      }}
      indicatorStyle={{
        marginTop: 8,
        width: 20,
        height: 1,
        backgroundColor: Colors.gray
      }}
      gestureEnabled={true}>
      <View className='px-6 pt-6'>
        {
          children
        }
      </View>
    </ActionSheet>
  );
}
