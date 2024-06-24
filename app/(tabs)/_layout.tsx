import RadixIcon from '@/components/RadixIcon';
import Colors from '@/lib/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';


// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.tint,
        headerShown: false,
        tabBarStyle: styles.tab,
        tabBarBackground: () => <LinearGradient
          // Background Linear Gradient
          className='flex-1'
          colors={['rgba(13,5,8,0.2)', 'rgba(0,0,0,1)']}
        />

      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Market',
          tabBarIcon: ({ color }) => <RadixIcon name='magic-wand' size={20} color={color ?? 'white'} />
        }}
      />
      <Tabs.Screen
        name="watching"
        options={{
          title: 'Watching',
          tabBarIcon: ({ color, }) => <RadixIcon name='target' size={20} color={color ?? 'white'} />
        }}
      />
      <Tabs.Screen
        name="portfolio"
        options={{
          title: 'Portfolio',
          tabBarIcon: ({ color }) => <RadixIcon name='eye-open' size={20} color={color ?? 'white'} />
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: 'More',
          tabBarIcon: ({ color }) => <RadixIcon name='hamburger-menu' size={20} color={color ?? 'white'} />
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
