import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Import theme
import { colors, shadows, borderRadius } from '../styles/theme';

const SessionCard = ({ session, onPress }) => {
  // Determine background color based on session type
  const getBgColor = () => {
    switch(session.id) {
      case 'morning':
        return '#FFF8E6'; // Light yellow
      case 'knee':
        return '#E6F7F5'; // Light teal
      case 'evening':
        return '#F5E6F8'; // Light purple
      default:
        return '#F5F5F5';
    }
  };
  
  // Determine border color based on session type
  const getBorderColor = () => {
    switch(session.id) {
      case 'morning':
        return '#FFECC0'; // Light yellow border
      case 'knee':
        return '#C0EEE9'; // Light teal border
      case 'evening':
        return '#E6C0F0'; // Light purple border
      default:
        return '#E0E0E0';
    }
  };
  
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: getBgColor(),
          borderColor: getBorderColor(),
        }
      ]}
      onPress={() => onPress(session.id)}
      activeOpacity={0.8}
    >
      <View style={styles.contentContainer}>
        <View style={styles.iconContainer}>
          <Ionicons
            name={session.icon}
            size={24}
            color={session.color}
            style={styles.icon}
          />
        </View>
        
        <View style={styles.textContainer}>
          <Text style={styles.title}>{session.title}</Text>
          <Text style={styles.subtitle}>
            {session.duration} min • {session.description}
          </Text>
        </View>
        
        <View style={styles.playButtonContainer}>
          <View style={[styles.playButton, { backgroundColor: session.color }]}>
            <Ionicons name="play" size={18} color="white" />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: borderRadius.lg,
    marginBottom: 12,
    borderWidth: 1,
    ...shadows.small,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  iconContainer: {
    marginRight: 12,
    width: 48,
    alignItems: 'center',
  },
  icon: {
    // No additional styling needed
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textLight,
  },
  playButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  playButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SessionCard;
