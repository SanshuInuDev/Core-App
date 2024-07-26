import Colors from "@/lib/Colors";
import {
  Environments,
  EventTypes,
  Events,
  Order,
  TransakConfig,
  TransakWebView,
} from '@transak/react-native-sdk';
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ActionSheet from "react-native-actions-sheet";

export default function TransakSheet() {
  const transakConfig: TransakConfig = {
    apiKey: process.env.EXPO_PUBLIC_TRANSAK_API ?? 'You transak API key', // Required
    environment: Environments.STAGING,
    partnerOrderId: 'snahu-app', // Required to receive order events
    // .....
    // For the full list of query params refer Props section below
  };

  const onTransakEventHandler = (event: EventTypes, data: Order) => {
    switch (event) {
      case Events.ORDER_CREATED:
        console.log(event, data);
        break;

      case Events.ORDER_PROCESSING:
        console.log(event, data);
        break;

      case Events.ORDER_COMPLETED:
        console.log(event, data);
        break;

      default:
        console.log(event, data);
    }
  };

  return (
    <ActionSheet
      overlayColor={Colors.base200}
      defaultOverlayOpacity={0.7}
      snapPoints={[95]}
      containerStyle={styles.container}
      indicatorStyle={styles.indicator}
      gestureEnabled={true}
    >
      <View className="h-full">
        <Text className="px-6 pb-4 text-sm leading-5 text-gray font-midnight-sans-st-36">
          Don't invest unless you're prepared to lose all the money you invest. This is high-risk investment and you are unlikely to be protected if something goes wrong.
          <Text className="pl-2 font-bold underline">Take 2 mins to learn more</Text>
        </Text>
        <TransakWebView
          transakConfig={transakConfig}
          onTransakEvent={onTransakEventHandler}
        />
      </View>
    </ActionSheet>
  );
}

const styles = StyleSheet.create({
  indicator: {
    width: 20,
    height: 1,
    backgroundColor: Colors.gray,
    marginBottom: 16
  },
  container: {
    paddingTop: 8,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingBottom: 156,
    backgroundColor: '#f2f2f2',
    flex: 1,
  }
})