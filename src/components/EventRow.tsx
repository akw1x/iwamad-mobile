import React from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';
import { Event } from '../data/events';

interface EventRowProps {
  event: Event;
  isSaved: boolean;
  onPress: () => void;
  onLongPress: () => void;
}

export const EventRow: React.FC<EventRowProps> = ({
  event,
  isSaved,
  onPress,
  onLongPress,
}) => {
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
    >
      <View style={styles.content}>
        <Text style={styles.title}>{event.title}</Text>
        <Text style={styles.subtext}>
          {event.date} • {event.place}
        </Text>
      </View>
      {isSaved && <Text style={styles.savedBadge}>Saved</Text>}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    minHeight: 44,
    padding: 12,
    marginVertical: 4,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardPressed: {
    backgroundColor: '#e0e0e0',
    borderColor: '#007AFF',
    borderWidth: 1,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  subtext: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  savedBadge: {
    color: '#007AFF',
    fontWeight: 'bold',
    marginLeft: 8,
  },
});