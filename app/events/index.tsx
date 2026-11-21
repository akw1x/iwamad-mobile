import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import { router } from 'expo-router';
import { useEvents } from '../../src/hooks/useEvents';
import { EventRow } from '../../src/components/EventRow';

export default function EventsScreen() {
  const [search, setSearch] = useState('');
  const [savedIds, setSavedIds] = useState<number[]>([]);

  const { data, isPending, isError, error, refetch, isRefetching } = useEvents();

  if (isPending) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text style={styles.statusText}>Loading events</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorTitle}>Could not load events</Text>
        <Text style={styles.errorMessage}>{error.message}</Text>
        <Pressable style={styles.retryButton} onPress={() => refetch()}>
          <Text style={styles.retryText}>Try again</Text>
        </Pressable>
      </View>
    );
  }

  const filteredEvents = data.filter((e) =>
    e.title.toLowerCase().includes(search.toLowerCase())
  );

  const toggleSave = (id: number) => {
    setSavedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.info}>
        Long-press an event to save it. Saved: {savedIds.length}
      </Text>

      <TextInput
        style={styles.searchBox}
        value={search}
        onChangeText={setSearch}
        placeholder="Search events"
        placeholderTextColor="#888"
      />

      <FlatList
        data={filteredEvents}
        keyExtractor={(e) => String(e.id)}
        refreshing={isRefetching}
        onRefresh={() => refetch()}
        renderItem={({ item }) => (
          <EventRow
            event={item}
            isSaved={savedIds.includes(item.id)}
            onPress={() => router.push(`/events/${item.id}`)}
            onLongPress={() => toggleSave(item.id)}
          />
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No events match</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    backgroundColor: '#fff',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  statusText: {
    marginTop: 12,
    fontSize: 16,
    color: '#333',
  },
  errorTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 6,
  },
  errorMessage: {
    fontSize: 14,
    color: '#555',
    marginBottom: 16,
    textAlign: 'center',
  },
  retryButton: {
    minHeight: 44,
    backgroundColor: '#007AFF',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  retryText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  info: {
    fontSize: 14,
    marginBottom: 8,
    color: '#333',
  },
  searchBox: {
    height: 44,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
    backgroundColor: '#fff',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 24,
    color: '#888',
  },
});