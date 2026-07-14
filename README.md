♟️ Khon’s Chess, Checkers & Backgammon

A pixel powered tabletop game collection featuring Chess, Checkers, and Backgammon, complete with themed pieces, custom board colors, local autosaves, offline play, deep links, message based correspondence games, and a computer opponent that is always suspiciously available for a rematch.

🎮 Play it here:
https://petesimple.github.io/khonschess/

Current release:
v3.3.1 Toned Move Replay Messages

https://github.com/petesimple/khonschess/releases/latest

⸻

🧠 Now Featuring a Computer Chess Player

Khon’s Chess includes a built in computer opponent that runs directly in the browser.

No account is required.
No server connection is required.
No grandmaster hiding inside the computer is required.

Choose the computer player and put your chess strategy to the test. Because the opponent runs locally, computer matches remain available when the app is installed or used offline.

Computer play remains the default chess mode. Play by Message is optional and can be enabled from Tools and Settings.

⸻

✉️ Play by Message

Khon’s Chess includes a correspondence mode inspired by playing chess through the mail.

No account is required.
No game database is required.
No central match server is required.

After each move, the complete game history is encoded inside a shareable Khon’s Chess URL. Send the link through Messages, Messenger, email, or another app. The opponent opens it, makes a move, and sends the updated game back.

Play by Message includes:

* Complete move history inside every shared link
* Automatic legal replay of received moves
* Castling, en passant, promotion, check, and result reconstruction
* Damaged link and illegal move rejection
* Protection against older links replacing newer local games
* Conflict detection when two histories no longer match
* Automatic player and color assignment from the received link
* Native device sharing
* Copy Message and Link support
* Local saving with no required backend

The game data is stored in the URL fragment. Anyone who receives the link can open that copy of the game, so treat message game links like digital chess postcards.

⸻

📚 Message Game Library

Multiple correspondence games can be stored on the same device.

The My Message Games library organizes locally saved games into:

* Your Turn
* Waiting for Opponent
* Finished Games

Each entry shows the opponent, player color, status, move count, and last update time. Select a saved game to review it or continue playing without deleting the other games.

Finished message games contribute to local statistics for:

* Wins
* Losses
* Draws
* Win percentage
* Loss percentage
* Draw percentage

These records belong to the current browser and device. Clearing browser storage removes the local library and statistics.

⸻

💬 Move Replay Messages

Shared game links can include a short explanation of the latest action.

Khon’s Chess recognizes:

* Ordinary moves
* Captures
* Recaptures
* Castling
* Promotion
* Check
* Checkmate

Choose a message attitude before sharing:

* Funny, the default
* Serious
* Playful
* Trash Talk
* No Message

No Message shares only the playable game link. The selected attitude is remembered on the device.

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
* Competition
* Poison Pawns
* Firefly
* Star Wars
* Star Trek
* Orville
* 300
* Cats vs Computers
* Death and Taxes
* Dracula vs Vampire Hunter
* Samurai vs Vikings
* Dinos vs Dino Ghosts
* Wacky Inflatables vs Dino People
* SFIFF

Each theme includes custom pixel art pieces while preserving the same game rules underneath.

⸻

🖌️ Custom Board Colors

Piece themes and board colors can be selected independently, making it easier to improve contrast or build a favorite combination.

Built in board styles include:

* Classic Gray
* Walnut
* Tournament Green
* Tournament Blue
* Midnight
* Custom Colors

Custom Colors provides editable light square, dark square, and border colors with live preview and hex color controls. A quick swap button reverses the square colors, and the Walnut reset restores the original Khon’s Chess board.

Board choices persist between sessions, and legal move highlighting remains visible across the available styles.

⸻

💾 Autosave Support

Each game mode maintains its own independent save.

That means:

* Chess progress does not overwrite Checkers
* Checkers progress does not overwrite Backgammon
* Refreshing the page does not immediately destroy your brilliant strategy
* Returning players can continue from their previous board position
* Multiple Play by Message games can coexist in the local game library
* Board preferences, message settings, and the selected replay tone persist between visits

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

Message Game Links

When Play by Message is enabled, Send or Share Game creates a message containing the latest move replay and the updated game link. Copy Game Link prepares the same content for pasting manually. Selecting No Message sends only the link.

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
├── vendor/
│   └── chess.js
├── stockfish/
│   └── stockfish-18-lite-single.js
├── pieces/
│   ├── classic/
│   ├── competition/
│   ├── poisonpawns/
│   ├── firefly/
│   ├── starwars/
│   ├── startrek/
│   ├── orville/
│   ├── 300/
│   ├── catsvscomputers/
│   ├── deathandtaxes/
│   ├── dracula/
│   ├── SamvsVik/
│   ├── Dinos/
│   ├── wacky/
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
* chess.js for PGN parsing and chess notation support
* Stockfish 18 Lite for the local computer opponent
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

Play by Message

* New game creation and player color assignment
* Share sheet and copied message links
* Legal move replay from received links
* Older link and conflicting history protection
* Multiple saved games grouped by turn status
* Finished game win, loss, draw, and percentage tracking
* Funny, Serious, Playful, and Trash Talk replay tones
* No Message link only sharing
* Castling, promotion, capture, recapture, check, and checkmate summaries

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
* Built in board style switching
* Custom light square, dark square, and border colors
* Board color restoration after refresh
* Tools and Settings accordion sections
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
