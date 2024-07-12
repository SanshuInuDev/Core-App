import Colors from '@/lib/Colors';
import React from 'react';
import { StyleSheet } from 'react-native';
import ActionSheet, { ActionSheetProps } from 'react-native-actions-sheet';

export default function AppSheet({
  snapPoints = [95],
  ...props
}: ActionSheetProps) {
  return (
    <ActionSheet
      {...props}
      overlayColor={Colors.base200}
      defaultOverlayOpacity={0.7}
      snapPoints={snapPoints}
      containerStyle={styles.container}
      indicatorStyle={styles.indicator}
      gestureEnabled={true}
    />
  );
}

const styles = StyleSheet.create({
  indicator: {
    marginTop: 8,
    width: 20,
    height: 1,
    backgroundColor: Colors.gray
  },
  container: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 24,
    backgroundColor: Colors.base100
  }
})