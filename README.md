♟️ Khon’s Chess, Checkers & Backgammon

A pixel powered tabletop game collection featuring Chess, Checkers, and Backgammon, complete with themed pieces, local autosaves, offline play, deep links, and a computer opponent that is always suspiciously available for a rematch.

🎮 Play it here:
https://petesimple.github.io/khonschess/

⸻

🧠 Now Featuring a Computer Chess Player

Khon’s Chess includes a built in computer opponent that runs directly in the browser.

No account is required.
No server connection is required.
No grandmaster hiding inside the computer is required.

Choose the computer player and put your chess strategy to the test. Because the opponent runs locally, computer matches remain available when the app is installed or used offline.

⸻

🎮 Three Games in One App

♟️ Chess

Play locally against another person or challenge the computer.

Supported chess rules include:

* Legal move validation
* Check detection
* Checkmate
* Stalemate
* King side and queen side castling
* Castling safety validation
* En passant
* Pawn promotion
* Fifty move draw tracking
* Prevention of moves that leave the king in check
* PGN game export

⛀ Checkers

A complete checkers board with enforced captures and proper multi jump handling.

Supported checkers rules include:

* Standard diagonal movement
* Captures
* Multiple jump sequences
* Forced continuation during a jump
* Kinging
* Legal move highlighting
* Win detection when a player has no remaining pieces
* Win detection when a player has no legal moves

🎲 Backgammon

Roll the dice, race your pieces home, and politely blame probability.

Supported backgammon rules include:

* Dice rolling
* Doubles
* Legal move highlighting
* Hitting opposing pieces
* Bar tracking
* Required bar reentry
* Bearing off
* Turn management
* Win detection

⸻

🎨 Pixel Art Themes

Change the entire personality of the board with the theme selector.

Included themes:

* Classic
* Firefly
* Star Wars
* Star Trek
* 300
* Dracula vs Vampire Hunter
* Samurai vs Vikings
* Dinos vs Dino Ghosts
* SFIFF

Each theme includes custom pixel art pieces while preserving the same game rules underneath.

⸻

💾 Autosave Support

Each game mode maintains its own independent save.

That means:

* Chess progress does not overwrite Checkers
* Checkers progress does not overwrite Backgammon
* Refreshing the page does not immediately destroy your brilliant strategy
* Returning players can continue from their previous board position

Saved games and settings are stored locally in the browser.

⸻

🔗 Deep Linking

Launch the app directly into a selected game and theme using URL parameters.

Select a game

?game=chess
?game=checkers
?game=backgammon

Select a theme

?theme=SFIFF

Combine both options

https://petesimple.github.io/khonschess/?theme=SFIFF&game=chess

Shorthand theme links such as the following are also supported and normalized:

?SFIFF&game=chess

⸻

📲 Progressive Web App

Khon’s Chess can be installed as a Progressive Web App on supported desktop and mobile devices.

PWA features include:

* Installable app experience
* Full screen friendly layout
* Service worker support
* Offline access
* Local computer opponent
* Local game saves
* Mobile and desktop compatibility

Once the required files have been cached, the games can continue even when the internet wanders off to find better Wi Fi.

⸻

📤 Sharing and Exporting

QR Code Sharing

Tap the Khon’s Chess logo to reveal a QR code that can be scanned by another device.

This makes it easy to place the app on a tablet, share it at the bar, or challenge someone who claims they are pretty good at chess.

Chess PGN Export

Chess matches can be downloaded in Portable Game Notation format.

PGN files can be saved, shared, reviewed, or imported into compatible chess software.

⸻

🚀 Getting Started

Play Online

Open:

https://petesimple.github.io/khonschess/

Run Locally

Clone the repository:

git clone https://github.com/petesimple/khonschess.git
cd khonschess

For basic testing, open index.html in a browser.

For full Progressive Web App and service worker support, run the project through a local web server.

Example using Python:

python3 -m http.server 8080

Then open:

http://localhost:8080

⸻

📁 Project Structure

khonschess/
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
├── icon-192.png
├── icon-512.png
└── README.md

The exact file list may change as new themes, icons, and features are added.

⸻

🛠️ Built With

* HTML5
* CSS3
* Vanilla JavaScript
* Browser local storage
* Progressive Web App technology
* No frameworks
* No required backend
* Mild chaos
* Strong coffee
* At least one crawfish supervising development

⸻

🎨 Adding a New Theme

Create a new directory inside:

pieces/

Example:

pieces/mytheme/

Add the required piece images using the existing naming format.

Chess Pieces

white-p.png
white-r.png
white-n.png
white-b.png
white-q.png
white-k.png
black-p.png
black-r.png
black-n.png
black-b.png
black-q.png
black-k.png

Checkers Pieces

white-p.png
white-k.png
black-p.png
black-k.png

Backgammon Pieces

white-p.png
black-p.png

After adding the artwork, register the theme in the theme selector and theme loading logic inside index.html.

⸻

🧪 Testing Checklist

Chess

* Normal piece movement
* Computer player turns
* Captures
* Check
* Checkmate
* Stalemate
* Castling on both sides
* Castling through check prevention
* En passant
* Pawn promotion
* Saved game restoration
* PGN export

Checkers

* Normal movement
* Forced captures
* Multiple jumps
* Kinging
* No legal move detection
* Saved game restoration

Backgammon

* Normal dice rolls
* Doubles
* Bar entry
* Hitting pieces
* Bearing off
* Saved game restoration

App

* Theme switching
* Theme restoration after refresh
* Deep links
* QR code display
* Offline loading
* Mobile layout
* Desktop layout

⸻

🙌 Credits

Developed by Pete Lippincott

Inspired by Khon, the namesake of the game, along with the tabletop spirit of Khon’s Bar in Houston, Texas.

Built for casual matches, serious challenges, bar room rivalries, and people who need one more game before going home.

Pixel art inspired by classic console and arcade games.

⸻

🐛 Feedback and Bug Reports

Found a bug, confusing rule, questionable computer move, or feature worth adding?

Open an issue in the GitHub repository and include:

* The game being played
* The selected theme
* What happened
* What you expected to happen
* Steps that reproduce the problem
* A screenshot when possible

Please remember that “the computer beat me” is technically feedback, but may not qualify as a software defect.

⸻

📜 License

Review the repository license before redistributing, modifying, or publishing derivative versions of the project.

⸻

🦐 Final Challenge

Pick a game.
Choose a theme.
Challenge a friend or the computer.
Try not to blame the crawfish.
