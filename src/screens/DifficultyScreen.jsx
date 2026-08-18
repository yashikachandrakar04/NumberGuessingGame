import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

const DifficultyScreen = ({ onSelectDifficulty, onViewStats, onHowToPlay }) => {
  const difficulties = [
    {
      id: 'easy',
      label: '🟢 Easy',
      range: '1-50',
      attempts: 'Unlimited',
      color: '#2ecc71',
      description: 'Perfect for beginners',
    },
    {
      id: 'medium',
      label: '🟡 Medium',
      range: '1-100',
      attempts: '10',
      color: '#f39c12',
      description: 'Test your skills',
    },
    {
      id: 'hard',
      label: '🔴 Hard',
      range: '1-200',
      attempts: '7',
      color: '#e74c3c',
      description: 'For experts only',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎯 Number Guessing</Text>
      <Text style={styles.subtitle}>Choose Your Difficulty</Text>

      <View style={styles.difficultiesContainer}>
        {difficulties.map((diff) => (
          <TouchableOpacity
            key={diff.id}
            style={[styles.difficultyCard, { borderColor: diff.color }]}
            onPress={() => onSelectDifficulty(diff.id)}
            activeOpacity={0.8}
          >
            <Text style={[styles.difficultyLabel, { color: diff.color }]}>
              {diff.label}
            </Text>
            <Text style={styles.difficultyRange}>Range: {diff.range}</Text>
            <Text style={styles.difficultyAttempts}>
              Max Attempts: {diff.attempts}
            </Text>
            <Text style={styles.difficultyDescription}>
              {diff.description}
            </Text>
            <View style={[styles.playButton, { backgroundColor: diff.color }]}>
              <Text style={styles.playButtonText}>Play</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.bottomButtons}>
        <TouchableOpacity
          style={[styles.bottomButton, styles.howToPlayButton]}
          onPress={onHowToPlay}
        >
          <Text style={styles.bottomButtonText}>📖 How to Play</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.bottomButton, styles.statsButton]}
          onPress={onViewStats}
        >
          <Text style={styles.bottomButtonText}>📊 Statistics</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 18,
    color: '#7f8c8d',
    textAlign: 'center',
    marginBottom: 30,
  },
  difficultiesContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  difficultyCard: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    borderWidth: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  difficultyLabel: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  difficultyRange: {
    fontSize: 16,
    color: '#34495e',
    marginBottom: 3,
  },
  difficultyAttempts: {
    fontSize: 16,
    color: '#34495e',
    marginBottom: 5,
  },
  difficultyDescription: {
    fontSize: 14,
    color: '#7f8c8d',
    fontStyle: 'italic',
    marginBottom: 10,
  },
  playButton: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  playButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 10,
  },
  bottomButton: {
    flex: 1,
    paddingVertical: 15,
    borderRadius: 10,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  howToPlayButton: {
    backgroundColor: '#3498db',
  },
  statsButton: {
    backgroundColor: '#9b59b6',
  },
  bottomButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DifficultyScreen;