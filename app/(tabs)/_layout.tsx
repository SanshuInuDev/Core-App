import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';


// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarStyle: styles.tab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Market',
          tabBarIcon: ({ color }) => <Image
            source={require('@/assets/images/magic-wand.png')}
          />
        }}
      />
      <Tabs.Screen
        name="watching"
        options={{
          title: 'Watching',
          tabBarIcon: ({ color, }) => <Image
            source={require('@/assets/images/target.png')}
          />
        }}
      />
      <Tabs.Screen
        name="portfolio"
        options={{
          title: 'Portfolio',
          tabBarIcon: ({ color }) => <Image
            source={require('@/assets/images/eye-open.png')}
          />
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: 'Menu',
          tabBarIcon: ({ color }) => <Image
            source={require('@/assets/images/hamburger-menu.png')}
          />,
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
