import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Import theme
import { colors } from '../styles/theme';

const ProgressMandala = ({ progress }) => {
  // progress is an array of 7 booleans representing each day of the week
  // [Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday]
  
  // Get day names in Dutch
  const dayNames = ['Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za', 'Zo'];
  
  // Mandala colors based on theme
  const petalColors = [
    colors.mandala1,
    colors.mandala2,
    colors.mandala3,
    colors.mandala4,
    colors.mandala5,
    colors.mandala6,
    colors.mandala7,
  ];
  
  // Calculate the completed days
  const completedDays = progress.filter(day => day).length;
  
  return (
    <View style={styles.container}>
      {/* Central mandala flower */}
      <View style={styles.mandalaContainer}>
        {/* Outer petal layer */}
        {progress.map((isCompleted, index) => {
          // Calculate position for each petal
          const angle = (index * (360 / 7)) * (Math.PI / 180);
          const xPosition = Math.cos(angle) * 60; // 60 is the radius
          const yPosition = Math.sin(angle) * 60;
          
          return (
            <View
              key={`petal-${index}`}
              style={[
                styles.petal,
                {
                  transform: [
                    { translateX: xPosition },
                    { translateY: yPosition },
                    { rotate: `${index * (360 / 7)}deg` }
                  ],
                  backgroundColor: isCompleted 
                    ? petalColors[index % petalColors.length]
                    : '#E0E0E0',
                  opacity: isCompleted ? 1 : 0.3,
                }
              ]}
            >
              {isCompleted && (
                <Ionicons
                  name="flower-outline"
                  size={16}
                  color="white"
                  style={styles.petalIcon}
                />
              )}
            </View>
          );
        })}
        
        {/* Inner mandala flower */}
        <View style={styles.centerFlower}>
          <Ionicons
            name="flower"
            size={40}
            color={colors.primary}
          />
        </View>
      </View>
      
      {/* Day indicators below the mandala */}
      <View style={styles.daysContainer}>
        {dayNames.map((day, index) => (
          <View key={`day-${index}`} style={styles.dayItem}>
            <View
              style={[
                styles.dayIndicator,
                {
                  backgroundColor: progress[index]
                    ? petalColors[index % petalColors.length]
                    : '#F5F5F5',
                  borderColor: progress[index]
                    ? petalColors[index % petalColors.length]
                    : '#E0E0E0',
                }
              ]}
            >
              {progress[index] ? (
                <Ionicons name="checkmark" size={14} color="white" />
              ) : (
                <Text style={styles.dayNumber}>{index + 1}</Text>
              )}
            </View>
            <Text style={styles.dayText}>{day}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  mandalaContainer: {
    width: 160,
    height: 160,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  centerFlower: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
    elevation: 1,
  },
  petal: {
    width: 40,
    height: 40,
    borderRadius: 20,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -20, // Half the height
    marginLeft: -20, // Half the width
    alignItems: 'center',
    justifyContent: 'center',
  },
  petalIcon: {
    // Additional styling for the icon inside the petal
  },
  daysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  dayItem: {
    alignItems: 'center',
  },
  dayIndicator: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  dayNumber: {
    fontSize: 12,
    color: colors.textLight,
  },
  dayText: {
    fontSize: 12,
    color: colors.text,
  },
});

export default ProgressMandala;
