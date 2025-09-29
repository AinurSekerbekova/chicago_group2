# chicago_group2
group2 project about chicago fire for digital heritage class 

🔹 Open-source GeoGuessr-style Projects we Could Clone

[GeoGuessr Clone](https://github.com/jzmoya/geoguessr-clone)  (GeoGuessr Clone by Jose Moya)
 → basic implementation using Google Street View (you could swap with static historic images).

[OpenStreetGuessr](https://github.com/GeoGuess/Streetguessr)
 → open-source street/location guessing game.

[CityGuesser](https://github.com/mickael-kerjean/cityguesser)
 → uses videos/images instead of maps, could be adapted for Chicago historical photos.

[Leaflet-Quiz](https://github.com/ustroetz/leaflet-quiz)
 → small quiz framework built on Leaflet.


 🔹 Frameworks & Libraries for Map Games
 
Leaflet.js
→ lightweight, open-source JS library for interactive maps.
→ great for overlaying historical maps, markers, and quizzes.
→ example plugin: Leaflet Storymaps

Mapbox GL JS (free tier available, but not fully open-source)
→ more polished visuals, works well for styled maps and custom overlays.
→ you could georeference historic Chicago fire maps and let players explore/guess locations.

OpenLayers
→ more powerful than Leaflet, good if you need precise GIS data handling.

Phaser.js (if you want more “gamey” feel)
→ 2D game framework in JS; you can combine with map tiles.


🔹 Tech Stack Suggestion (simple, student-friendly)

Frontend: Leaflet.js (interactive maps) + Vanilla JS or React.

Data: GeoJSON with locations of destroyed/survived buildings.

Backend (optional): Node.js/Express if you want leaderboards, otherwise static hosting is enough.

Hosting: GitHub Pages, Netlify, or Vercel.
