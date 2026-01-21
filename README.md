♟️ Khon’s Chess, Checkers & Backgammon

A pixel-powered bar game app for Chess, Checkers, and Backgammon — with theme switching, deep links, auto-saves, and crawfish spirit 🦐

⸻

🎮 Features
	•	Play Chess, Checkers, or Backgammon in a single app
	•	Full rule support:
	•	Chess
	•	Castling (king and queen side)
	•	En passant
	•	Pawn promotion
	•	Check, checkmate, stalemate
	•	50-move draw rule
	•	Legal-move filtering (no moving into check)
	•	Checkers
	•	Captures and multi-jumps
	•	Kinging
	•	Turn continuation on forced jumps
	•	Win detection when a player has no pieces or no legal moves
	•	Backgammon
	•	Dice rolling (including doubles)
	•	Hitting and bar tracking
	•	Bar re-entry enforcement
	•	Bearing off
	•	Visual move highlighting
	•	Theme selector with multiple pixel-art sets:
	•	Classic
	•	Firefly
	•	Star Wars
	•	Star Trek
	•	300
	•	Dracula vs Vampire Hunter
	•	Samurai vs Vikings
	•	Dinos vs Dino-Ghosts
	•	SFIFF
	•	Deep linking via URL
	•	Launch directly into a specific game and theme
	•	Example:

https://petesimple.github.io/khonschess/?theme=SFIFF&game=chess


	•	Autosave per game mode
	•	Chess, Checkers, and Backgammon each maintain independent saves
	•	Refresh-safe and offline-friendly
	•	Chess PGN export
	•	Download a standard PGN file for completed or in-progress games
	•	QR code toggle
	•	Tap the logo to reveal a shareable QR code
	•	Offline-capable PWA
	•	Service worker support for offline play
	•	Installable on desktop and mobile

⸻

🧠 Built With
	•	HTML5
	•	Vanilla JavaScript
	•	CSS3
	•	No frameworks
	•	Mild chaos, strong coffee ☕

⸻

🚀 Getting Started
	1.	Clone or download the repository:

git clone https://github.com/petesimple/khons-chess.git


	2.	Open index.html in your browser
	3.	Pick a game, pick a theme, start playing

No build step. No accounts. No nonsense.

⸻

📁 Project Structure

khons-chess/
├── index.html              # Main app logic and UI
├── manifest.json           # PWA metadata
├── service-worker.js       # Offline support
├── pieces/                 # Theme-specific sprites
│   ├── classic/
│   ├── firefly/
│   ├── starwars/
│   ├── startrek/
│   ├── 300/
│   ├── dracula/
│   ├── SamvsVik/
│   ├── Dinos/
│   └── SFIFF/
├── kclogo.png              # Default logo
├── khonschess-qr.png       # QR overlay image
└── README.md


⸻

🧪 Customization
	•	Add a new theme by creating:

/pieces/{theme-name}/


	•	Sprite naming:
	•	Chess:

white-p.png, black-k.png, white-q.png, etc.


	•	Checkers:

white-p.png, black-p.png
white-k.png, black-k.png


	•	Backgammon:

white-p.png, black-p.png


	•	All rules, UI behavior, and visuals live directly in index.html for easy tinkering.

⸻

🔗 Deep Linking

You can fully configure the app via URL parameters:
	•	Set theme:

?theme=SFIFF


	•	Set game:

?game=chess
?game=checkers
?game=backgammon


	•	Combine both:

https://petesimple.github.io/khonschess/?theme=SFIFF&game=chess



Shorthand theme links like ?SFIFF&game=chess are also supported and automatically normalized.

⸻

📜 Version

v2.7.1 – Bug Fixes: Checkers, Chess, Theme Restore, Labels
	•	Fixed checkers capture and win detection bugs
	•	Corrected chess attack detection (pawn attacks, castling safety, check logic)
	•	Restored saved theme on refresh
	•	Cleaned up rank and file label positioning
	•	General rules accuracy and stability improvements

⸻

🙌 Credits
	•	Developed by Pete Lippincott
	•	Inspired by the vibes of Khon’s Bar, Houston, TX
	•	Pixel-art nods to NES and arcade classics
	•	Rules logic powered by stubbornness and curiosity ♛

⸻

📬 Feedback

Found a bug or want a feature?
Open an issue — or challenge the code to a game and see who wins 🦐
