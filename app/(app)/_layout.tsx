import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Redirect, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useSession } from '@/contexts/auth.context';
import { useColorScheme } from '@/hooks/useColorScheme';

import { ThemedText } from '@/components/ThemedText';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const { session, isLoading: isSessionLoading } = useSession();

  const [isFontLoaded] = useFonts({
    SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (isFontLoaded) {
      SplashScreen.hideAsync();
    }
  }, [isFontLoaded]);

  if (!isFontLoaded) {
    return null;
  }

  if (isSessionLoading) {
    return <ThemedText>Loading...</ThemedText>;
  }

  if (!session) {
    return <Redirect href="/(auth)/login" />;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* <Stack.Screen name="+not-found" /> */}
      </Stack>
    </ThemeProvider>
  );
}
