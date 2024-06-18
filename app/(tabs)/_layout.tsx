import Colors from '@/lib/Colors';
import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Iconify } from 'react-native-iconify';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.tint,
        headerShown: false,
        tabBarStyle: styles.tab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Market',
          tabBarIcon: ({ color }) => <Iconify icon="radix-icons:magic-wand" size={20} color={color ?? 'white'} />
        }}
      />
      <Tabs.Screen
        name="watching"
        options={{
          title: 'Watching',
          tabBarIcon: ({ color, }) => <Iconify icon="radix-icons:target" size={20} color={color ?? 'white'} />
        }}
      />
      <Tabs.Screen
        name="portfolio"
        options={{
          title: 'Portfolio',
          tabBarIcon: ({ color }) => <Iconify icon="radix-icons:eye-open" size={20} color={color ?? 'white'} />
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: 'More',
          tabBarIcon: ({ color }) => <Iconify icon="radix-icons:hamburger-menu" size={20} color={color ?? 'white'} />
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tab: {
    borderTopWidth: 0,
    elevation: 0,
    paddingBottom: 12,
    height: 60,
    position: 'absolute',
    backgroundColor: 'transparent',
  }
});
