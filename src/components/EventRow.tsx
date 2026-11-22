import React from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
  ZoomIn,
} from 'react-native-reanimated';
import type { CampusEvent } from '../data/events';

interface EventRowProps {
  event: CampusEvent;
  isSaved: boolean;
  onPress: () => void;
  onToggleSaved: () => void;
}

export const EventRow: React.FC<EventRowProps> = ({
  event,
  isSaved,
  onPress,
  onToggleSaved,
}) => {
  return (
    <Animated.View
      entering={FadeIn}
      exiting={FadeOut}
      layout={LinearTransition}
      style={styles.wrapper}
    >
      <Swipeable
        friction={2}
        rightThreshold={60}
        renderRightActions={(_progress, _translation, swipeable) => (
          <Pressable
            onPress={() => {
              onToggleSaved();
              swipeable.close();
            }}
            style={styles.action}
          >
            <Text style={styles.actionText}>{isSaved ? 'Unsave' : 'Save'}</Text>
          </Pressable>
        )}
      >
        <Pressable
          onPress={onPress}
          onLongPress={onToggleSaved}
          style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
        >
          <View style={styles.content}>
            <Text style={styles.title}>{event.title}</Text>
            <Text style={styles.subtext}>
              {event.date} • {event.place}
            </Text>
          </View>
          {isSaved && (
            <Animated.Text entering={ZoomIn} style={styles.savedBadge}>
              Saved
            </Animated.Text>
          )}
        </Pressable>
      </Swipeable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 4,
  },
  card: {
    minHeight: 44,
    padding: 12,
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
  action: {
    minHeight: 44,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 8,
    marginLeft: 8,
  },
  actionText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
});