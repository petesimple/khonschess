# ♟️ Khon's Chess, Checkers & Backgammon

A pixel-powered bar game app for Chess, Checkers, and Backgammon with theme switching, deep links, auto-saves, and crawfish spirit 🦐

---

## 🎮 Features

- Play Chess, Checkers, or Backgammon in a single app
- Full rule support:
  - Chess
    - Castling (king and queen side)
    - En passant
    - Pawn promotion
    - Check, checkmate, stalemate
    - 50-move draw rule
    - Legal-move filtering (no moving into check)
  - Checkers
    - Captures and multi-jumps
    - Kinging
    - Forced continuation on jumps
    - Win detection when a player has no pieces or no legal moves
  - Backgammon
    - Dice rolling including doubles
    - Hitting and bar tracking
    - Bar re-entry enforcement
    - Bearing off
    - Visual move highlighting

- Theme selector with multiple pixel-art sets:
  - Classic
  - Firefly
  - Star Wars
  - Star Trek
  - 300
  - Dracula vs Vampire Hunter
  - Samurai vs Vikings
  - Dinos vs Dino-Ghosts
  - SFIFF

- Deep linking via URL
  - Launch directly into a specific game and theme
  - Example:
    https://petesimple.github.io/khonschess/?theme=SFIFF&game=chess

- Autosave per game mode
  - Chess, Checkers, and Backgammon each maintain independent saves
  - Refresh-safe and offline-friendly

- Chess PGN export
  - Download standard PGN files for completed or in-progress games

- QR code toggle
  - Tap the logo to reveal a shareable QR code

- Offline-capable PWA
  - Service worker support
  - Installable on desktop and mobile

---

## 🧠 Built With

- HTML5
- Vanilla JavaScript
- CSS3
- No frameworks
- Mild chaos and strong coffee ☕

---

## 🚀 Getting Started

1. Clone or download the repository:
   git clone https://github.com/petesimple/khons-chess.git
2. Open index.html in your browser
3. Pick a game, pick a theme, start playing

---

## 📁 Project Structure

khons-chess/
├── index.html
├── manifest.json
├── service-worker.js
├── pieces/
│   ├── classic/
│   ├── firefly/
│   ├── starwars/
│   ├── startrek/
│   ├── 300/
│   ├── dracula/
│   ├── SamvsVik/
│   ├── Dinos/
│   └── SFIFF/
├── kclogo.png
├── khonschess-qr.png
└── README.md

---

## 🧪 Customization

- Add new themes by creating:
  /pieces/{theme-name}/

- Sprite naming:
  - Chess: white-p.png, black-k.png, etc.
  - Checkers: white-p.png, black-p.png, white-k.png, black-k.png
  - Backgammon: white-p.png, black-p.png

- All rules, UI behavior, and visuals live in index.html

---

## 🔗 Deep Linking

- Set theme:
  ?theme=SFIFF
- Set game:
  ?game=chess
  ?game=checkers
  ?game=backgammon
- Combine:
  https://petesimple.github.io/khonschess/?theme=SFIFF&game=chess

Shorthand theme links like ?SFIFF&game=chess are supported and normalized.

---

## 📜 Version

v2.7.1 – Bug Fixes: Checkers, Chess, Theme Restore, Labels

- Fixed checkers capture and win detection bugs
- Corrected chess attack detection and castling safety
- Restored saved theme on refresh
- Cleaned up rank and file label positioning

---

## 🙌 Credits

Developed by Pete Lippincott  
Inspired by Khon’s Bar, Houston TX  
Pixel-art vibes from NES and arcade classics  

---

## 📬 Feedback

Found a bug or want a feature  
Open an issue or challenge the app to a rematch 🦐
