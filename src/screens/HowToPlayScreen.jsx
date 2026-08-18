import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

const HowToPlayScreen = ({ onBack }) => {
  const rules = [
    {
      title: '🎯 Objective',
      description: 'Guess the correct number within the specified range.',
    },
    {
      title: '📊 Difficulty Levels',
      description: 'Choose from Easy (1-50), Medium (1-100), or Hard (1-200).',
    },
    {
      title: '🔄 Attempts',
      description: 'Easy: Unlimited attempts, Medium: 10 attempts, Hard: 7 attempts.',
    },
    {
      title: '💡 Hints',
      description: 'Get temperature-based hints (🔥 Hot, ❄️ Cold) to guide you.',
    },
    {
      title: '📈 Statistics',
      description: 'Track your wins, losses, win percentage, and best scores.',
    },
    {
      title: '🏆 Winning',
      description: 'Guess the number before running out of attempts to win!',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>How to Play</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.introContainer}>
          <Text style={styles.introText}>
            Welcome to the Number Guessing Game! Test your intuition and logic skills.
          </Text>
        </View>

        {rules.map((rule, index) => (
          <View key={index} style={styles.ruleCard}>
            <Text style={styles.ruleTitle}>{rule.title}</Text>
            <Text style={styles.ruleDescription}>{rule.description}</Text>
          </View>
        ))}

        <View style={styles.tipsContainer}>
          <Text style={styles.tipsTitle}>💡 Pro Tips</Text>
          <Text style={styles.tipItem}>• Start with the middle number to eliminate half the range</Text>
          <Text style={styles.tipItem}>• Pay attention to the hints (Hot/Cold indicators)</Text>
          <Text style={styles.tipItem}>• Track your attempts to improve your strategy</Text>
          <Text style={styles.tipItem}>• Challenge yourself with harder difficulties</Text>
        </View>

        <TouchableOpacity style={styles.playButton} onPress={onBack}>
          <Text style={styles.playButtonText}>Ready to Play!</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#2c3e50',
  },
  backButton: {
    padding: 5,
  },
  backButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  introContainer: {
    backgroundColor: '#3498db',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  introText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 24,
  },
  ruleCard: {
    backgroundColor: 'white',
    padding: 18,
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
  ruleTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
  },
  ruleDescription: {
    fontSize: 16,
    color: '#7f8c8d',
    lineHeight: 22,
  },
  tipsContainer: {
    backgroundColor: '#f1c40f',
    padding: 20,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
  },
  tipsTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
  },
  tipItem: {
    fontSize: 16,
    color: '#2c3e50',
    lineHeight: 24,
    marginBottom: 5,
  },
  playButton: {
    backgroundColor: '#2ecc71',
    padding: 18,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 30,
  },
  playButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default HowToPlayScreen;