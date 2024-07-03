import "@ethersproject/shims";
import "@expo/metro-runtime";
import "react-native-get-random-values";
import "react-native-reanimated";
import "../globals"
import '@/lib/sheets';
import { useColorScheme } from '@/components/useColorScheme';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { NativeWindStyleSheet } from "nativewind";
import React, { useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import { SheetProvider } from 'react-native-actions-sheet';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth0, Auth0Provider } from 'react-native-auth0'

import './global.css';
import 'expo-dev-client';

// export {
//   // Catch any errors thrown by the Layout component.
//   ErrorBoundary
// } from 'expo-router';

// export const unstable_settings = {
//   // Ensure that reloading on `/modal` keeps a back button present.
//   initialRouteName: '(tabs)',
// };


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();


NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('@/assets/fonts/SpaceMono-Regular.ttf'),
    "midnight-sans-rd-36-regular-pro": require('@/assets/fonts/midnight-sans-rd-36-regular-pro.ttf'),
    "midnight-sans-st-36-regular-pro": require('@/assets/fonts/midnight-sans-st-36-regular-pro.ttf'),
    "midnight-sans-rd-48-regular-pro": require('@/assets/fonts/midnight-sans-rd-48-regular-pro.ttf'),
    "midnight-sans-st-48-regular-pro": require('@/assets/fonts/midnight-sans-st-48-regular-pro.ttf'),
  });

  const queryClient = new QueryClient();

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <IntlProvider locale="en">
        <RootLayoutNav />
      </IntlProvider>
    </QueryClientProvider>
  )
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Auth0Provider
        domain={process.env.EXPO_PUBLIC_AUTH0_DOMAIN ?? ''}
        clientId={process.env.EXPO_PUBLIC_AUTH0_CLIENT_ID ?? ''}
      >
        <SafeAreaView className='flex-1'>
          <SheetProvider>
            <Stack>
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
            </Stack>
          </SheetProvider>
        </SafeAreaView>
      </Auth0Provider>
    </ThemeProvider>
  );
}
