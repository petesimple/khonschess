# ♟️ Khon's Chess, Checkers & Backgammon!

> A pixel-powered bar game app for Chess, Checkers, and Backgammon — with theme switching, deep links, auto-saves, and crawfish spirit 🦐

---

## 🎮 Features

- Play Chess, Checkers, or Backgammon in one app
- Full rule support:
  - Chess: castling, en passant, promotion, checkmate and stalemate detection
  - Checkers: multi-jumps, kinging, forced-move logic
  - Backgammon: dice rolls, hitting (capturing), bar re-entry, bearing off
- Theme selector with:
  - Classic, Firefly, Star Wars, Star Trek, SFIFF, and more
- Deep-linking via URL
  - Launch directly into a specific theme and game mode
  - Example:
    http://petesimple.github.io/khonschess/?theme=SFIFF&game=chess
- Autosaves per game mode
  - Chess, Checkers, and Backgammon each maintain independent saves
- PGN download support for Chess
- QR code toggle for instant sharing
- Offline-capable PWA with service worker support
- Custom sprites, including themed Backgammon checkers

---

## 🧠 Built With

- HTML5
- Vanilla JavaScript
- CSS3
- Pure creativity, no frameworks

---

## 🚀 Getting Started

1. Clone or download this repo:
   git clone https://github.com/petesimple/khons-chess.git
2. Open index.html in your browser
3. Start playing — no setup needed

---

## 📁 Project Structure

khons-chess/
├── index.html              # Main game logic and layout
├── manifest.json           # PWA metadata
├── service-worker.js       # Offline support
├── pieces/                 # Theme-specific sprites
│   ├── classic/
│   ├── firefly/
│   ├── starwars/
│   ├── startrek/
│   └── SFIFF/
├── kclogo.png              # Default logo
├── khonschess-qr.png       # QR overlay image
└── README.md

---

## 🧪 Customization

- Add new themes by dropping sprites into:
  /pieces/{theme-name}/
- Chess sprite format:
  white-p.png, black-k.png, etc.
- Backgammon sprite format:
  white-p.png, black-p.png
- Checkers uses pawn sprites and -k variants for kings
- Board styles, rules, and UI logic can all be modified directly in index.html

---

## 🔗 Deep Linking (v2.6.2+)

You can launch the app fully configured using URL parameters:

- Set theme:
  ?theme=SFIFF
- Set game:
  ?game=chess
  ?game=checkers
  ?game=backgammon
- Combine both:
  http://petesimple.github.io/khonschess/?theme=SFIFF&game=chess

Shorthand theme links (?SFIFF&game=chess) are also supported and auto-normalized.

---

## 📜 Version

v2.6.2 – LinkParams Theme + Game

Adds URL-based theme and game launching, per-game save isolation, and improved initialization for event and festival use.

---

## 🙌 Credits

- Developed by Pete Lippincott
- Inspired by the vibes of Khon’s Bar, Houston, TX
- Pixel art style nod to NES and arcade classics
- Chess and Backgammon logic powered by coffee and intuition ☕♛

---

## 📬 Feedback

Have a bug or feature request?
Open an issue — or send a telepathic crawfish 🧠🦐
