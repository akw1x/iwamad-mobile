import { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function App() {
  const [likes, setLikes] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, World!</Text>
      <Text style={styles.subtitle}>Adel Kikbay</Text>

      <Text style={styles.counter}>Likes: {likes}</Text>

      <Pressable 
        style={styles.button} 
        onPress={() => setLikes(likes + 1)}
      >
        <Text style={styles.buttonText}>Like</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32, 
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
  },
  counter: {
    fontSize: 24,
    marginVertical: 10,
  },
  button: {
    minHeight: 44, 
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});