
# 🎯 Model-Based Reflex Agent - Tic-Tac-Toe (Minimax AI)

A **JavaScript implementation** of a **Model-Based Reflex Agent** that plays **Tic-Tac-Toe** optimally using the **Minimax algorithm**.  
The agent maintains an **internal model** of the game board, predicts future states, and chooses the best possible move.  
This ensures it will **never lose** — only win or draw against a rational opponent.

---

## 📌 Features
- **Model-Based Reflex Agent**
  - Maintains and updates an internal game model (`board` array).
  - Uses the model to plan ahead and decide moves.
- **Minimax Algorithm**
  - Simulates all possible moves to choose the optimal one.
  - Guarantees no loss against perfect play.
- **Responsive UI**
  - Works on desktop, tablet, and mobile.
  - Click or tap to place your move.
- **Endgame Popup**
  - Shows result with emoji 🎉😢😐 and "Play Again" button.
- **Score Tracker**
  - Displays wins, losses, and draws.

---

## 🧠 How it Works

### Agent Type
- **Model-Based Reflex Agent**:
  - **Percept**: Player's move.
  - **Update Model**: Reflects new game state in `board`.
  - **Decision**: Uses Minimax to simulate future game states and choose best move.
  - **Action**: Updates model and UI with chosen move.

### Minimax Logic
- **Maximizing Player**: AI (O) tries to maximize score.
- **Minimizing Player**: Human (X) tries to minimize AI score.
- **Scores**:
  - Win: +10
  - Loss: -10
  - Draw: 0

---

## 📂 Project Structure
```

tic-tac-toe/
│
├── index.html      # Game UI layout
├── styles.css      # Styling (responsive, colorful)
├── script.js       # Game logic (Model-Based + Minimax)
└── README.md       # Project documentation
```
## 🚀 Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/yourusername/tic-tac-toe-minimax.git
cd tic-tac-toe-minimax
````

### 2️⃣ Open the game

Simply open `index.html` in your web browser.

---

## 🎮 How to Play

1. You are **X**, AI is **O**.
2. Click a square to make your move.
3. AI will instantly respond with the best move.
4. Game ends when either player wins or it's a draw.
5. Click **"Play Again"** in the popup to restart.

## 🧪 Sample Run

```
Initial Board: [ , , , , , , , , ]

1. Human: X at 0, AI: O at 4  => AI takes center
2. Human: X at 1, AI: O at 2  => AI blocks
3. Human: X at 8, AI: O at 6  => AI creates fork
Result: AI Wins
```

---

## 🔍 Concepts Demonstrated

* **Artificial Intelligence**

  * Model-Based Reflex Agents
  * Minimax Search Algorithm
* **Game Theory**

  * Zero-sum games
  * Optimal strategy
* **Web Development**

  * HTML, CSS (Responsive UI), JavaScript

---

## 👨‍💻 Author
**Rajdeep Pal**

If you want, I can also **add a small AI decision-making diagram** to this README showing:  
**Percept → Update Model → Simulate Future States → Choose Move → Update Model → Act**  
Do you want me to prepare that diagram so the README looks even more professional?
```
