import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

// Import components
import SessionCard from '../components/SessionCard';
import ActiveSession from '../components/ActiveSession';
import ProgressMandala from '../components/ProgressMandala';

// Import data and theme
import { sessions } from '../data/sessions';
import { colors, fonts } from '../styles/theme';

const HomeScreen = ({ weeklyProgress, totalMinutes, streakDays, completeExercise }) => {
  const [activeSession, setActiveSession] = useState(null);

  const handleStartSession = (sessionId) => {
    const session = sessions.find(s => s.id === sessionId);
    setActiveSession(session);
  };

  const handleFinishSession = () => {
    if (activeSession) {
      completeExercise(activeSession.duration);
      setActiveSession(null);
    }
  };

  const handlePauseSession = () => {
    setActiveSession(null);
  };

  // Calculate daily progress
  const dailyMinutesGoal = 10;
  const dailyMinutesDone = activeSession ? 0 : 0; // Replace with actual tracking
  const dailyProgressPercentage = (dailyMinutesDone / dailyMinutesGoal) * 100;

  // Calculate weekly target (4 days per week)
  const daysCompleted = weeklyProgress.filter(day => day).length;
  const weeklyTargetDays = 4;

  return (
    <LinearGradient
      colors={['#FFF8E1', '#FFCCBC']}
      style={styles.container}
    >
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Header with flower logo */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Ionicons name="flower" size={40} color={colors.accent} style={styles.flowerLarge} />
            <Ionicons name="flower" size={28} color={colors.secondary} style={styles.flowerMedium} />
            <Ionicons name="flower" size={20} color={colors.primary} style={styles.flowerSmall} />
          </View>
          <Text style={styles.headerTitle}>BloemKracht</Text>
        </View>

        {/* Today's progress bar */}
        {!activeSession && (
          <View style={styles.progressCard}>
            <View style={styles.progressHeader}>
              <Text style={styles.progressTitle}>Vandaag</Text>
              <View style={styles.progressTime}>
                <Ionicons name="time-outline" size={18} color={colors.text} />
                <Text style={styles.progressTimeText}>{dailyMinutesDone} / {dailyMinutesGoal} min</Text>
              </View>
            </View>
            <View style={styles.progressBarContainer}>
              <View 
                style={[
                  styles.progressBar, 
                  { width: `${dailyProgressPercentage}%` }
                ]} 
              />
            </View>
          </View>
        )}

        {activeSession ? (
          // Show active session when one is selected
          <ActiveSession 
            session={activeSession}
            onFinish={handleFinishSession}
            onPause={handlePauseSession}
          />
        ) : (
          // Otherwise show session options and weekly progress
          <>
            <View style={styles.sessionsCard}>
              <Text style={styles.sectionTitle}>Je 10-minuten voor vandaag</Text>
              
              {/* Session cards */}
              {sessions.map(session => (
                <SessionCard 
                  key={session.id}
                  session={session}
                  onPress={() => handleStartSession(session.id)}
                />
              ))}
            </View>

            {/* Weekly mandala progress */}
            <View style={styles.mandalaCard}>
              <Text style={styles.sectionTitle}>Je wekelijkse mandala</Text>
              <ProgressMandala progress={weeklyProgress} />
              <Text style={styles.mandalaText}>
                {daysCompleted} van {weeklyTargetDays} dagen deze week • 
                <Text style={styles.highlightText}> Nog {weeklyTargetDays - daysCompleted} te gaan!</Text>
              </Text>
            </View>

            {/* Quick stats */}
            <View style={styles.statsBar}>
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>Totaal tijd</Text>
                <Text style={styles.statValue}>{totalMinutes} min</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>Streak</Text>
                <Text style={styles.statValue}>{streakDays} dagen</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>Bloemen</Text>
                <Text style={styles.statValue}>{daysCompleted}</Text>
              </View>
            </View>
          </>
        )}
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  logoContainer: {
    position: 'relative',
    width: 40,
    height: 40,
    marginRight: 10,
  },
  flowerLarge: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  flowerMedium: {
    position: 'absolute',
    top: 6,
    left: 6,
  },
  flowerSmall: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.text,
  },
  progressCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 2,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  progressTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
  },
  progressTime: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressTimeText: {
    marginLeft: 5,
    color: colors.text,
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: 4,
  },
  sessionsCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 12,
  },
  mandalaCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 2,
  },
  mandalaText: {
    marginTop: 12,
    textAlign: 'center',
    color: colors.text,
  },
  highlightText: {
    color: colors.primary,
    fontWeight: '500',
  },
  statsBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255, 245, 231, 0.9)',
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 204, 188, 0.5)',
  },
  statItem: {
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 12,
    color: colors.textLight,
    marginBottom: 2,
  },
  statValue: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
});

export default HomeScreen;
