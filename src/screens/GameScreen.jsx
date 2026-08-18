import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

const GameScreen = ({ difficulty, onGameEnd, onBack }) => {
  const [randomNumber, setRandomNumber] = useState(0);
  const [userGuess, setUserGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [minRange, setMinRange] = useState(1);
  const [maxRange, setMaxRange] = useState(100);
  const [maxAttempts, setMaxAttempts] = useState(10);
  const [hint, setHint] = useState('');

  const difficultySettings = {
    easy: { max: 50, maxAttempts: Infinity, label: 'Easy' },
    medium: { max: 100, maxAttempts: 10, label: 'Medium' },
    hard: { max: 200, maxAttempts: 7, label: 'Hard' },
  };

  useEffect(() => {
    startNewGame();
  }, [difficulty]);

  const startNewGame = () => {
    const settings = difficultySettings[difficulty];
    const min = 1;
    const max = settings.max;
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    
    setRandomNumber(random);
    setMinRange(min);
    setMaxRange(max);
    setMaxAttempts(settings.maxAttempts);
    setAttempts(0);
    setGameOver(false);
    setMessage(`Guess a number between ${min} and ${max}`);
    setUserGuess('');
    setHint('');
  };

  const handleGuess = () => {
    if (gameOver) {
      Alert.alert('Game Over', 'Start a new game to play again!');
      return;
    }

    const guess = parseInt(userGuess);
    
    if (isNaN(guess) || guess < minRange || guess > maxRange) {
      Alert.alert(
        'Invalid Input',
        `Please enter a number between ${minRange} and ${maxRange}`
      );
      setUserGuess('');
      return;
    }

    const newAttempts = attempts + 1;
    setAttempts(newAttempts);

    if (guess === randomNumber) {
      setMessage(`🎉 Congratulations! You guessed it in ${newAttempts} attempts!`);
      setGameOver(true);
      setUserGuess('');
      onGameEnd(true, newAttempts);
      return;
    } else if (guess < randomNumber) {
      setMessage(`⬆️ Too low! Try a higher number. (Attempts: ${newAttempts}/${maxAttempts === Infinity ? '∞' : maxAttempts})`);
      setMinRange(Math.max(minRange, guess + 1));
    } else {
      setMessage(`⬇️ Too high! Try a lower number. (Attempts: ${newAttempts}/${maxAttempts === Infinity ? '∞' : maxAttempts})`);
      setMaxRange(Math.min(maxRange, guess - 1));
    }

    setUserGuess('');

    // Check for loss condition
    if (maxAttempts !== Infinity && newAttempts >= maxAttempts) {
      setMessage(`😔 Game Over! The number was ${randomNumber}`);
      setGameOver(true);
      onGameEnd(false, newAttempts);
    }

    // Provide hint
    provideHint(guess);
  };

  const provideHint = (guess) => {
    const diff = Math.abs(randomNumber - guess);
    if (diff <= 5) {
      setHint('🔥 You are very close!');
    } else if (diff <= 15) {
      setHint('🔥 You are getting warm!');
    } else if (diff <= 30) {
      setHint('❄️ You are cold!');
    } else {
      setHint('🧊 You are freezing cold!');
    }
  };

  const resetGame = () => {
    startNewGame();
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={onBack} style={styles.backButton}>
            <Text style={styles.backButtonText}>← Back</Text>
          </TouchableOpacity>
          <Text style={styles.difficultyBadge}>
            {difficultySettings[difficulty].label}
          </Text>
        </View>

        <Text style={styles.title}>🎯 Number Guessing</Text>
        
        <View style={styles.rangeContainer}>
          <Text style={styles.rangeText}>
            Range: {minRange} - {maxRange}
          </Text>
          <Text style={styles.attemptsText}>
            Attempts: {attempts}/{maxAttempts === Infinity ? '∞' : maxAttempts}
          </Text>
        </View>

        <View style={styles.messageContainer}>
          <Text style={styles.message}>{message}</Text>
          {hint && !gameOver && (
            <Text style={styles.hintText}>{hint}</Text>
          )}
        </View>

        {!gameOver ? (
          <>
            <TextInput
              style={styles.input}
              placeholder={`Enter number (${minRange}-${maxRange})`}
              placeholderTextColor="#999"
              keyboardType="numeric"
              value={userGuess}
              onChangeText={setUserGuess}
              maxLength={3}
              editable={!gameOver}
            />
            
            <TouchableOpacity
              style={styles.guessButton}
              onPress={handleGuess}
              activeOpacity={0.7}
            >
              <Text style={styles.buttonText}>Guess</Text>
            </TouchableOpacity>
          </>
        ) : (
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>
              {message.includes('Congratulations') ? '🎊 You Won!' : '😔 You Lost!'}
            </Text>
            <Text style={styles.resultSubText}>
              The number was: {randomNumber}
            </Text>
          </View>
        )}

        <TouchableOpacity
          style={styles.resetButton}
          onPress={resetGame}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>🔄 New Game</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    padding: 10,
  },
  backButtonText: {
    fontSize: 18,
    color: '#3498db',
    fontWeight: 'bold',
  },
  difficultyBadge: {
    backgroundColor: '#34495e',
    color: 'white',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 15,
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 20,
  },
  rangeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#3498db',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
    marginBottom: 20,
  },
  rangeText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  attemptsText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  messageContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 25,
    minHeight: 100,
    justifyContent: 'center',
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
  message: {
    fontSize: 18,
    color: '#2c3e50',
    textAlign: 'center',
    lineHeight: 24,
  },
  hintText: {
    fontSize: 20,
    color: '#e67e22',
    marginTop: 10,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: 'white',
    width: '100%',
    height: 60,
    borderRadius: 10,
    paddingHorizontal: 20,
    fontSize: 20,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#3498db',
    textAlign: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  guessButton: {
    backgroundColor: '#2ecc71',
    width: '100%',
    height: 55,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  resetButton: {
    backgroundColor: '#e74c3c',
    width: '100%',
    height: 55,
    borderRadius: 10,
    justifyContent: 'center',
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
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  resultContainer: {
    width: '100%',
    padding: 20,
    backgroundColor: '#f1c40f',
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  resultSubText: {
    fontSize: 18,
    color: '#2c3e50',
    marginTop: 5,
  },
});

export default GameScreen;