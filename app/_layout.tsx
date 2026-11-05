import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerStyle: { backgroundColor: '#fff' } }}>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="events/index" options={{ title: 'Events' }} />
      <Stack.Screen name="events/[id]" />
    </Stack>
  );
}