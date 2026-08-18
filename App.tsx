import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
  Modal,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GameScreen from './src/screens/GameScreen';
import HowToPlayScreen from './src/screens/HowToPlayScreen';
import StatsScreen from './src/screens/StatsScreen';
import DifficultyScreen from './src/screens/DifficultyScreen';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('difficulty');
  const [difficulty, setDifficulty] = useState('medium');
  const [gameStats, setGameStats] = useState<{
    totalGames: number;
    wins: number;
    losses: number;
    totalAttempts: number;
    bestScore: number;
    history: Array<{ result: string; attempts: number; difficulty: string; timestamp: string }>;
  }>({
    totalGames: 0,
    wins: 0,
    losses: 0,
    totalAttempts: 0,
    bestScore: Infinity,
    history: [],
  });

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const stats = await AsyncStorage.getItem('gameStats');
      if (stats) {
        setGameStats(JSON.parse(stats));
      }
    } catch (error) {
      console.error('Error loading stats:', error);
    }
  };

  const saveStats = async (newStats: typeof gameStats) => {
    try {
      await AsyncStorage.setItem('gameStats', JSON.stringify(newStats));
      setGameStats(newStats);
    } catch (error) {
      console.error('Error saving stats:', error);
    }
  };

  const updateStats = (won: boolean, attempts: number) => {
    const newStats = { ...gameStats };
    newStats.totalGames += 1;
    newStats.totalAttempts += attempts;
    
    if (won) {
      newStats.wins += 1;
      if (attempts < newStats.bestScore) {
        newStats.bestScore = attempts;
      }
      newStats.history.unshift({
        result: 'Win',
        attempts: attempts,
        difficulty: difficulty,
        timestamp: new Date().toLocaleDateString(),
    });
    } else {
      newStats.losses += 1;
      newStats.history.unshift({
        result: 'Loss',
        attempts: attempts,
        difficulty: difficulty,
        timestamp: new Date().toLocaleDateString(),
      });
    }
    
    // Keep only last 20 games
    if (newStats.history.length > 20) {
      newStats.history = newStats.history.slice(0, 20);
    }
    
    saveStats(newStats);
  };

  const getWinPercentage = () => {
    if (gameStats.totalGames === 0) return 0;
    return Math.round((gameStats.wins / gameStats.totalGames) * 100);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'difficulty':
        return (
          <DifficultyScreen
            onSelectDifficulty={(diff: string) => {
              setDifficulty(diff);
              setCurrentScreen('game');
            }}
            onViewStats={() => setCurrentScreen('stats')}
            onHowToPlay={() => setCurrentScreen('howtoplay')}
          />
        );
      case 'game':
        return (
          <GameScreen
            difficulty={difficulty}
            onGameEnd={(won: boolean, attempts: number) => {
              updateStats(won, attempts);
              setCurrentScreen('stats');
            }}
            onBack={() => setCurrentScreen('difficulty')}
          />
        );
      case 'stats':
        return (
          <StatsScreen
            stats={gameStats}
            winPercentage={getWinPercentage()}
            onBack={() => setCurrentScreen('difficulty')}
            onPlayAgain={() => {
              setCurrentScreen('game');
            }}
          />
        );
      case 'howtoplay':
        return (
          <HowToPlayScreen
            onBack={() => setCurrentScreen('difficulty')}
          />
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderScreen()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default App;