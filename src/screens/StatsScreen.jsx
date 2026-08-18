import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

const StatsScreen = ({ stats, winPercentage, onBack, onPlayAgain }) => {
  const getWinRateColor = (percentage) => {
    if (percentage >= 70) return '#2ecc71';
    if (percentage >= 40) return '#f39c12';
    return '#e74c3c';
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Statistics</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.statsGrid}>
          <View style={[styles.statCard, { backgroundColor: '#3498db' }]}>
            <Text style={styles.statValue}>{stats.totalGames}</Text>
            <Text style={styles.statLabel}>Total Games</Text>
          </View>
          
          <View style={[styles.statCard, { backgroundColor: '#2ecc71' }]}>
            <Text style={styles.statValue}>{stats.wins}</Text>
            <Text style={styles.statLabel}>Wins</Text>
          </View>
          
          <View style={[styles.statCard, { backgroundColor: '#e74c3c' }]}>
            <Text style={styles.statValue}>{stats.losses}</Text>
            <Text style={styles.statLabel}>Losses</Text>
          </View>
          
          <View style={[styles.statCard, { backgroundColor: '#9b59b6' }]}>
            <Text style={styles.statValue}>{winPercentage}%</Text>
            <Text style={styles.statLabel}>Win Rate</Text>
          </View>
        </View>

        <View style={styles.detailedStats}>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Total Attempts</Text>
            <Text style={styles.detailValue}>{stats.totalAttempts}</Text>
          </View>
          
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Average Attempts</Text>
            <Text style={styles.detailValue}>
              {stats.totalGames > 0 
                ? Math.round(stats.totalAttempts / stats.totalGames) 
                : 0}
            </Text>
          </View>
          
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Best Score</Text>
            <Text style={styles.detailValue}>
              {stats.bestScore === Infinity ? 'N/A' : stats.bestScore}
            </Text>
          </View>
        </View>

        {stats.history.length > 0 && (
          <View style={styles.historyContainer}>
            <Text style={styles.historyTitle}>Recent Games</Text>
            {stats.history.map((game, index) => (
              <View 
                key={index} 
                style={[
                  styles.historyItem,
                  { borderLeftColor: game.result === 'Win' ? '#2ecc71' : '#e74c3c' }
                ]}
              >
                <View style={styles.historyLeft}>
                  <Text style={styles.historyResult}>
                    {game.result === 'Win' ? '✅' : '❌'} {game.result}
                  </Text>
                  <Text style={styles.historyDetails}>
                    {game.difficulty} • {game.attempts} attempts
                  </Text>
                </View>
                <Text style={styles.historyDate}>{game.timestamp}</Text>
              </View>
            ))}
          </View>
        )}

        <TouchableOpacity style={styles.playButton} onPress={onPlayAgain}>
          <Text style={styles.playButtonText}>🎮 Play Again</Text>
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
    padding: 20,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statCard: {
    width: '48%',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  statValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
  statLabel: {
    fontSize: 14,
    color: 'white',
    marginTop: 5,
    opacity: 0.9,
  },
  detailedStats: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ecf0f1',
  },
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  detailLabel: {
    fontSize: 16,
    color: '#7f8c8d',
  },
  detailValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  historyContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
  historyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
  },
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ecf0f1',
    borderLeftWidth: 4,
    paddingLeft: 10,
  },
  historyLeft: {
    flex: 1,
  },
  historyResult: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  historyDetails: {
    fontSize: 14,
    color: '#7f8c8d',
    marginTop: 2,
  },
  historyDate: {
    fontSize: 12,
    color: '#bdc3c7',
  },
  playButton: {
    backgroundColor: '#2ecc71',
    padding: 18,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  playButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default StatsScreen;