# ♟️ Khon's Chess (and Checkers!)

> A pixel-powered bar game app for Chess **and** Checkers — with theme switching, auto-saves, and crawfish spirit 🦐

---

## 🎮 Features

- ✅ **Play Chess or Checkers** on the same board
- ✅ Full rule support:
  - ♟️ Chess: castling, en passant, promotion, checkmate/stalemate detection
  - 🔘 Checkers: multi-jumps, kinging, forced-move logic
- 🎨 **Theme selector** with:
  - `Classic`, `Firefly`, `Star Wars`, and `Star Trek`
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
   git clone https://github.com/your-username/khons-chess.git
   ```
2. Open `index.html` in your browser.
3. Start playing — no setup needed!

---

## 🗂️ Project Structure

```
khons-chess/
├── index.html              # Main game logic and layout
├── manifest.json           # PWA metadata
├── service-worker.js       # Offline support
├── pieces/                 # Theme-specific Chess piece sprites
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
```

---

## 🧪 Customization

- Add new piece art by dropping sprites into `/pieces/{theme}/`
  - Format: `white-p.png`, `black-k.png`, etc.
- Checkers uses the same assets as pawns and special kings
- Customize themes or game logic directly in `index.html`

---

## 📜 Version

**v1.0 — Crawfish Edition 🦐**  
> First public release with full Chess + Checkers logic, win detection, theme switching, and PGN export

---

## 🙌 Credits

- Developed by [Pete Lippincott](https://github.com/petesimple)
- Inspired by the vibes of **Khon's Bar**, Houston, TX
- Pixel art style nod to NES & arcade classics
- Chess logic powered by coffee and intuition ☕♛

---

## 📬 Feedback

Have a bug or feature request?  
Open an issue or send us a telepathic crawfish 🧠🦐
