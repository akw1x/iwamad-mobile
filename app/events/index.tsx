import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { events } from '../../src/data/events';
import { EventRow } from '../../src/components/EventRow';

export default function EventsScreen() {
  const [search, setSearch] = useState('');
  const [savedIds, setSavedIds] = useState<number[]>([]);

  const filteredEvents = events.filter((e) =>
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