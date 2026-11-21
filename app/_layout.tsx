import { Stack } from 'expo-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack screenOptions={{ headerStyle: { backgroundColor: '#fff' } }}>
        <Stack.Screen name="index" options={{ title: 'Home' }} />
        <Stack.Screen name="events/index" options={{ title: 'Events' }} />
        <Stack.Screen name="events/[id]" />
      </Stack>
    </QueryClientProvider>
  );
}