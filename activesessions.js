import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Speech from 'expo-speech';

// Import data and theme
import { getRandomEncouragement } from '../data/sessions';
import { colors } from '../styles/theme';

const ActiveSession = ({ session, onFinish, onPause }) => {
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [exerciseTimeLeft, setExerciseTimeLeft] = useState(session.exercises[0].duration);
  const [totalTimeLeft, setTotalTimeLeft] = useState(session.duration * 60); // convert to seconds
  const [isPaused, setIsPaused] = useState(false);
  const [encouragement, setEncouragement] = useState('');

  // Animation for the exercise icon
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Start the pulse animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.2,
          duration: 1000,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1000,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Set the initial encouragement
    const initialEncouragement = getRandomEncouragement(
      session.id, 
      session.exercises[currentExerciseIndex].name
    );
    setEncouragement(initialEncouragement);
    speakEncouragement(initialEncouragement);

    return () => {
      // Cleanup
      Speech.stop();
    };
  }, []);

  useEffect(() => {
    // Main timer effect
    if (isPaused) return;

    const timer = setInterval(() => {
      setExerciseTimeLeft(prev => {
        if (prev <= 1) {
          // Move to next exercise
          const nextIndex = currentExerciseIndex + 1;
          
          if (nextIndex < session.exercises.length) {
            // If there are more exercises, move to the next one
            setCurrentExerciseIndex(nextIndex);
            
            // Get and speak a new encouragement
            const nextEncouragement = getRandomEncouragement(
              session.id, 
              session.exercises[nextIndex].name
            );
            setEncouragement(nextEncouragement);
            speakEncouragement(nextEncouragement);
            
            return session.exercises[nextIndex].duration;
          } else {
            // If this was the last exercise, end the session
            clearInterval(timer);
            onFinish();
            return 0;
          }
        }
        return prev - 1;
      });
      
      setTotalTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          onFinish();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [currentExerciseIndex, isPaused, session]);

  // Speak encouragement using text-to-speech
  const speakEncouragement = (text) => {
    // Only speak every ~30 seconds to not be too intrusive
    if (Math.random() < 0.7) return;
    
    Speech.speak(text, {
      language: 'nl-NL',
      pitch: 1.1,  // Slightly higher pitch for a friendly voice
      rate: 0.9,   // Slightly slower for clarity
    });
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  // Format time as MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Calculate exercise progress percentage
  const currentExercise = session.exercises[currentExerciseIndex];
  const exerciseProgress = ((currentExercise.duration - exerciseTimeLeft) / currentExercise.duration) * 100;
  
  // Calculate total session progress percentage
  const totalProgress = ((session.duration * 60 - totalTimeLeft) / (session.duration * 60)) * 100;
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{session.title}</Text>
        <Text style={styles.subtitle}>
          {session.duration} minuten • {session.description}
        </Text>
      </View>
      
      <View style={styles.exerciseContainer}>
        {/* Exercise animation/icon */}
        <Animated.View 
          style={[
            styles.animationContainer,
            { 
              backgroundColor: `${session.color}20`, // 20% opacity of the session color
              transform: [{ scale: pulseAnim }]
            }
          ]}
        >
          <View 
            style={[
              styles.innerAnimation,
              { backgroundColor: `${session.color}40` } // 40% opacity of the session color
            ]}
          >
            <Ionicons 
              name={session.icon} 
              size={64} 
              color={session.color} 
            />
          </View>
        </Animated.View>
        
        {/* Exercise info */}
        <Text style={styles.exerciseName}>{currentExercise.name}</Text>
        <Text style={styles.exerciseTime}>{formatTime(exerciseTimeLeft)}</Text>
        
        {/* Progress bars */}
        <View style={styles.progressContainer}>
          <View style={styles.progressLabelContainer}>
            <Text style={styles.progressLabel}>Huidige oefening</Text>
            <Text style={styles.progressLabel}>{formatTime(exerciseTimeLeft)}</Text>
          </View>
          <View style={styles.progressBarBg}>
            <View 
              style={[
                styles.progressBarFg, 
                { 
                  width: `${exerciseProgress}%`,
                  backgroundColor: session.color 
                }
              ]} 
            />
          </View>
          
          <View style={styles.progressLabelContainer}>
            <Text style={styles.progressLabel}>Totale sessie</Text>
            <Text style={styles.progressLabel}>
              {formatTime(session.duration * 60 - totalTimeLeft)} / {formatTime(session.duration * 60)}
            </Text>
          </View>
          <View style={styles.progressBarBg}>
            <View 
              style={[
                styles.progressBarFg, 
                { 
                  width: `${totalProgress}%`,
                  backgroundColor: session.color,
                  opacity: 0.7
                }
              ]} 
            />
          </View>
        </View>
        
        {/* Encouragement message */}
        <View style={[styles.encouragementContainer, { backgroundColor: `${session.color}10`, borderColor: `${session.color}30` }]}>
          <Text style={[styles.encouragementText, { color: `${session.color}DD` }]}>
            "{encouragement}"
          </Text>
        </View>
      </View>
      
      {/* Control buttons */}
      <View style={styles.controlsContainer}>
        <TouchableOpacity 
          style={[styles.controlButton, styles.pauseButton]}
          onPress={togglePause}
        >
          <Ionicons 
            name={isPaused ? "play" : "pause"} 
            size={24} 
            color="white" 
          />
          <Text style={styles.controlButtonText}>
            {isPaused ? "Hervat" : "Pauze"}
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.controlButton, styles.stopButton]}
          onPress={onPause}
        >
          <Ionicons name="close" size={24} color="white" />
          <Text style={styles.controlButtonText}>Stop</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 16,
    padding: 16,
    margin: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 2,
  },
  header: {
    marginBottom: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textLight,
  },
  exerciseContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  animationContainer: {
    width: 160,
    height: 160,
    borderRadius: 80,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  innerAnimation: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  exerciseName: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  exerciseTime: {
    fontSize: 18,
    color: colors.textLight,
    marginBottom: 20,
  },
  progressContainer: {
    width: '100%',
    maxWidth: 300,
    marginBottom: 20,
  },
  progressLabelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  progressLabel: {
    fontSize: 14,
    color: colors.textLight,
  },
  progressBarBg: {
    height: 8,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    marginBottom: 16,
    overflow: 'hidden',
  },
  progressBarFg: {
    height: '100%',
    borderRadius: 4,
  },
  encouragementContainer: {
    width: '100%',
    padding: 16,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 228, 225, 0.5)',
    borderWidth: 1,
    borderColor: 'rgba(255, 182, 193, 0.5)',
    marginTop: 10,
  },
  encouragementText: {
    fontStyle: 'italic',
    textAlign: 'center',
    fontSize: 16,
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  controlButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
    justifyContent: 'center',
  },
  pauseButton: {
    backgroundColor: colors.primary,
    marginRight: 8,
  },
  stopButton: {
    backgroundColor: '#FF5252',
    marginLeft: 8,
  },
  controlButtonText: {
    color: 'white',
    fontWeight: '600',
    marginLeft: 8,
    fontSize: 16,
  },
});

export default ActiveSession;
