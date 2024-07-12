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
    width: 20,
    height: 1,
    backgroundColor: Colors.gray,
    marginBottom: 24
  },
  container: {
    paddingTop: 8,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 24,
    paddingBottom: 34,
    backgroundColor: Colors.base100,
    flex: 1,
  }
})