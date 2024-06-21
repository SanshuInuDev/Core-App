import { useColorScheme } from '@/components/useColorScheme';
import '@/lib/sheets';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { NativeWindStyleSheet } from "nativewind";
import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { SheetProvider } from 'react-native-actions-sheet';
import 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

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

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <SafeAreaView style={styles.container}>
        <SheetProvider>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
          </Stack>
        </SheetProvider>
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});