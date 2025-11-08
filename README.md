# The Great Chicago Fire Digital Project

An interactive web experience exploring the Great Chicago Fire of 1871 through games, maps, and historical essays.

## Overview

Users play location-based games to discover historical sites connected to the fire. Solving each game unlocks an essay about that location, its inhabitants, and significance. Additional pages cover background and research methodology.

## Structure

- **index.html** — Home page
- **background.html** — Project guide and gameplay instructions
- **research.html** — Research methodology and sources
- **point[N]_map_game.html** — Interactive map challenges
- **point[N]_guessing_game.html** — Clue-based puzzles
- **point[N]_essay.html** — Historical narratives (unlocked content)
- **scripts/** — JavaScript for maps and game logic
- **styles/** — CSS styling
- **images/, videos/, letter_pdfs/** — Historical materials

## Quick Start

Clone and open `index.html` in a browser. For map features, run a local server:
python3 -m http.server 8000

Then visit `http://localhost:8000`

## Technologies

HTML5, CSS3, JavaScript, Bootstrap 5, Leaflet.js

## Research

Based on archival materials, historical maps, and Chicago historical collections. Sources cited on research page.

## License

Educational and non-commercial use. Archival materials may have separate restrictions.
