import { Link, Stack } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function NotFoundScreen() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Page not found' }} />
      <Text style={styles.title}>Page not found</Text>
      <Link href="/" style={styles.link}>
        <Text style={styles.linkText}>Go home</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 16 },
  link: { marginTop: 15, paddingVertical: 15 },
  linkText: { fontSize: 16, color: '#007AFF' },
});