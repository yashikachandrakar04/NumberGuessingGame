# 🎯 Number Guessing Game

A fun and interactive **Number Guessing Game** built with **React Native CLI**. Test your guessing skills across multiple difficulty levels, use temperature-based hints to get closer to the answer, and track your performance through detailed statistics and game history.

The game provides a simple but engaging experience with smooth navigation, persistent statistics, and progressively challenging difficulty levels.

---

## ✨ Features

### 🎯 Multiple Screens

The application includes several dedicated screens for a smooth user experience:

* 🎚️ **Difficulty Screen** — Choose between Easy, Medium, and Hard.
* 🎮 **Game Screen** — Guess the number with hints and attempt tracking.
* 📖 **How to Play Screen** — Learn the rules and get helpful gameplay tips.
* 📊 **Stats Screen** — View detailed performance statistics and recent game history.

---

## 📊 Statistics Tracking

The app automatically tracks your gameplay statistics, including:

* 🎮 Total games played
* 🏆 Total wins
* ❌ Total losses
* 📈 Win percentage
* 🔢 Total attempts
* 📊 Average attempts per game
* 🥇 Best score — fewest attempts required to win
* 🕐 Recent game history
* 📋 Last 20 games

Game statistics are persisted locally so your progress remains available when you reopen the app.

---

## 🎮 Difficulty Levels

Choose a difficulty level based on how challenging you want the game to be.

| Difficulty | Number Range | Attempt Limit |
| ---------- | -----------: | ------------: |
| 🟢 Easy    |       1 – 50 |     Unlimited |
| 🟡 Medium  |      1 – 100 |   10 attempts |
| 🔴 Hard    |      1 – 200 |    7 attempts |

### 🟢 Easy

* Number range: **1–50**
* Unlimited attempts
* Recommended for beginners

### 🟡 Medium

* Number range: **1–100**
* Maximum of **10 attempts**
* Balanced challenge

### 🔴 Hard

* Number range: **1–200**
* Maximum of **7 attempts**
* Designed for experienced players

---

## 💡 Gameplay Features

### 🌡️ Temperature-Based Hints

The game provides **Hot/Cold hints** to help you determine whether your guess is getting closer to or farther away from the target number.

For example:

* 🔥 **Hot** — Your guess is very close.
* 🌡️ **Warm** — Your guess is getting closer.
* ❄️ **Cold** — Your guess is far from the target.

### 🔄 Dynamic Range Updates

The possible number range can dynamically update based on your previous guesses, helping narrow down the search area.

### 🔢 Attempt Tracking

Every guess is tracked and displayed to the player.

Depending on the difficulty:

* Easy allows unlimited attempts.
* Medium allows 10 attempts.
* Hard allows 7 attempts.

### 💾 Persistent Game History

Game results and statistics are stored locally using **AsyncStorage**, allowing your progress to remain available between sessions.

---

## 📱 Screens

### Difficulty Screen

Select the difficulty level before starting a game.

```text
┌─────────────────────────┐
│    Choose Difficulty    │
│                         │
│  🟢 Easy                │
│  1 - 50                 │
│                         │
│  🟡 Medium              │
│  1 - 100 | 10 Attempts  │
│                         │
│  🔴 Hard                │
│  1 - 200 | 7 Attempts   │
└─────────────────────────┘
```

### Game Screen

The main gameplay screen includes:

* Current number range
* Guess input
* Attempt counter
* Temperature-based hints
* Win/loss feedback
* Game restart functionality

### How to Play

A dedicated screen explains:

* Game rules
* How guessing works
* Difficulty differences
* Hint system
* Tips for improving your score

### Stats Screen

View your overall performance:

```text
Games Played:       25
Wins:               18
Losses:              7
Win Rate:          72%
Total Attempts:    143
Average Attempts:  5.7
Best Score:          3
```

Recent game results are also displayed.

---

## 🛠️ Tech Stack

| Technology              | Purpose                      |
| ----------------------- | ---------------------------- |
| React Native            | Mobile application framework |
| React Native CLI        | Native project setup         |
| JavaScript / TypeScript | Application logic            |
| React Navigation        | Screen navigation            |
| AsyncStorage            | Persistent local storage     |
| React Hooks             | State management             |
| Git                     | Version control              |
| GitHub                  | Source code hosting          |

---

## 📋 Prerequisites

Before running the project, make sure you have:

* Node.js
* npm
* React Native development environment
* Git

### Android

* Android Studio
* Android SDK
* Android Emulator or physical Android device

### iOS

* macOS
* Xcode
* CocoaPods
* iOS Simulator or physical iPhone

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yashikachandrakar04/NumberGuessingGame.git
```

### 2. Navigate to the project

```bash
cd NumberGuessingGame
```

### 3. Install dependencies

```bash
npm install
```

### 4. iOS Setup

If you're running the application on iOS:

```bash
cd ios
pod install
cd ..
```

### 5. Start Metro

```bash
npm start
```

### 6. Run on Android

Open another terminal:

```bash
npm run android
```

Or:

```bash
npx react-native run-android
```

### 7. Run on iOS

```bash
npm run ios
```

Or:

```bash
npx react-native run-ios
```

---

## 🎯 How to Play

1. Launch the application.
2. Select a difficulty level.
3. The game generates a random number within the selected range.
4. Enter your guess.
5. Submit your guess.
6. Use the **Hot/Cold** hint to adjust your next guess.
7. Continue guessing until you find the number.
8. Try to win using the fewest possible attempts.
9. Check the **Stats** screen to review your performance.

---

## 🏆 Scoring

Your primary score is based on the number of attempts required to find the correct number.

**Fewer attempts = better score.**

The app records your best score, allowing you to challenge yourself and improve over time.

---

## 📂 Project Structure

```text
NumberGuessingGame/
│
├── android/
├── ios/
├── src/
│   ├── screens/
│   │   ├── DifficultyScreen/
│   │   ├── GameScreen/
│   │   ├── HowToPlayScreen/
│   │   └── StatsScreen/
├── App.tsx
├── package.json
├── package-lock.json
├── babel.config.js
├── metro.config.js
└── README.md
```

> The exact project structure may vary depending on the implementation.

---

## 🔮 Future Improvements

Possible future additions include:

* 🏆 Global leaderboard
* 🥇 Achievements and badges
* 📅 Daily challenges
* 🔥 Win streak tracking
* 🎨 Custom themes
* 🌙 Dark/light mode
* 🔊 Sound effects
* ✨ Animations
* 🌐 Online leaderboard
* 👤 User profiles
* 📈 Advanced statistics and charts

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository.
2. Create a feature branch:

```bash
git checkout -b feature/new-feature
```

3. Make your changes.
4. Commit your changes:

```bash
git add .
git commit -m "Add new feature"
```

5. Push your branch:

```bash
git push origin feature/new-feature
```

6. Open a Pull Request.

---

## 🐛 Issues

Found a bug or have an idea for a new feature?

Feel free to open an issue in the GitHub repository.

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**Your Name**

GitHub: [yashikachandrakar04](https://github.com/yashikachandrakar04)

---

⭐ If you enjoyed the game, consider giving the repository a **star**!
