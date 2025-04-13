import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

// Import screens
import HomeScreen from './screens/HomeScreen';
import ExercisesScreen from './screens/ExercisesScreen';
import ProgressScreen from './screens/ProgressScreen';
import WisdomScreen from './screens/WisdomScreen';

// Import theme
import { colors } from './styles/theme';

const Tab = createBottomTabNavigator();

export default function App() {
  const [hasExercisedToday, setHasExercisedToday] = useState(false);
  const [totalMinutes, setTotalMinutes] = useState(0);
  const [streakDays, setStreakDays] = useState(0);
  const [weeklyProgress, setWeeklyProgress] = useState([false, false, false, false, false, false, false]);

  // Load saved data when app starts
  useEffect(() => {
    // Here you would load saved data from AsyncStorage or another storage method
    // This is a placeholder for demonstration
    setTotalMinutes(92);
    setStreakDays(2);
    setWeeklyProgress([true, true, false, false, false, false, false]);
  }, []);

  // Function to update progress when exercise is completed
  const completeExercise = (minutes) => {
    const newTotal = totalMinutes + minutes;
    setTotalMinutes(newTotal);
    
    if (!hasExercisedToday) {
      setHasExercisedToday(true);
      setStreakDays(streakDays + 1);
      
      // Update weekly progress
      const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, ...
      const dayIndex = today === 0 ? 6 : today - 1; // Convert to 0 = Monday, ... 6 = Sunday
      
      const newWeeklyProgress = [...weeklyProgress];
      newWeeklyProgress[dayIndex] = true;
      setWeeklyProgress(newWeeklyProgress);
    }
    
    // Here you would save the updated data
  };

  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'sunny' : 'sunny-outline';
              } else if (route.name === 'Oefeningen') {
                iconName = focused ? 'heart' : 'heart-outline';
              } else if (route.name === 'Voortgang') {
                iconName = focused ? 'flower' : 'flower-outline';
              } else if (route.name === 'Wijsheid') {
                iconName = focused ? 'book' : 'book-outline';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: colors.primary,
            tabBarInactiveTintColor: 'gray',
            headerShown: false,
            tabBarStyle: {
              paddingBottom: 5,
              height: 60,
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
            },
            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: '500',
            }
          })}
        >
          <Tab.Screen name="Home">
            {props => <HomeScreen 
              {...props} 
              weeklyProgress={weeklyProgress}
              totalMinutes={totalMinutes}
              streakDays={streakDays}
              completeExercise={completeExercise}
            />}
          </Tab.Screen>
          <Tab.Screen name="Oefeningen" component={ExercisesScreen} />
          <Tab.Screen name="Voortgang" component={ProgressScreen} />
          <Tab.Screen name="Wijsheid" component={WisdomScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
