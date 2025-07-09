# ♟️ Khon's Chess, Checkers & Backgammon!

> A pixel-powered bar game app for Chess, Checkers, **and Backgammon** — with theme switching, auto-saves, and crawfish spirit 🦐

---

## 🎮 Features

- ✅ **Play Chess, Checkers, or Backgammon** on the same app
- ✅ Full rule support:
  - ♟️ Chess: castling, en passant, promotion, checkmate/stalemate detection
  - 🔘 Checkers: multi-jumps, kinging, forced-move logic
  - 🎲 Backgammon: dice rolls, hitting (capturing), bar re-entry, bearing off
- 🎨 **Theme selector** with:
  - `Classic`, `Firefly`, `Star Wars`, `Star Trek`, and more
- 🐷 **Custom sprites** — including pig checkers for Backgammon
- 💾 **Autosaves** your game in localStorage
- 📄 **PGN download** support for Chess
- 📷 **QR code** toggle for easy sharing
- 🌐 Offline-capable with PWA support

---

## 🧠 Built With

- **HTML5**
- **Vanilla JavaScript**
- **CSS3**
- ❤️ Pure creativity, no frameworks

---

## 🚀 Getting Started

1. Clone or download this repo:
   ```bash
   git clone https://github.com/petesimple/khons-chess.git

   2.	Open index.html in your browser.
	3.	Start playing — no setup needed!

   khons-chess/
├── index.html              # Main game logic and layout
├── manifest.json           # PWA metadata
├── service-worker.js       # Offline support
├── pieces/                 # Theme-specific sprites (Chess & Backgammon)
│   ├── classic/
│   ├── firefly/
│   ├── starwars/
│   └── startrek/
├── checkers-black.png      # Basic Checkers pieces
├── checkers-white.png
├── checkers-black-king.png
├── checkers-white-king.png
├── kclogo.png              # Default logo
├── khonschess-qr.png       # QR overlay image
└── README.md

🧪 Customization
	•	Add new piece art by dropping sprites into /pieces/{theme}/
	•	Chess format: white-p.png, black-k.png, etc.
	•	Backgammon format: white-pig.png, black-pig.png
	•	Checkers uses the same assets as pawns and special kings
	•	Customize themes, board styles, or game logic directly in index.html

⸻

📜 Version

v2.4 — (Jazz) 

Adds Backgammon support with dice rolls, hitting, re-entry, bearing off, and pig checker sprites

⸻

🙌 Credits
	•	Developed by Pete Lippincott
	•	Inspired by the vibes of Khon’s Bar, Houston, TX
	•	Pixel art style nod to NES & arcade classics
	•	Chess & Backgammon logic powered by coffee and intuition ☕♛

⸻

📬 Feedback

Have a bug or feature request?
Open an issue or send us a telepathic crawfish 🧠🦐

