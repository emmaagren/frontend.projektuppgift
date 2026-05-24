# Ridvägar & väder

## Projektbeskrivning
Ridvägar & väder är en frontendbaserad webbapplikation utvecklad för ryttare.

Syftet är att skapa ett användarvänligt verktyg där ryttare snabbt kan avgöra:

- Aktuellt väder på vald plats
- Temperatur och vindförhållanden
- Rekommendationer för ridning baserat på väderdata
- Karta över området
- Tillgängliga ridvägar och hästvänliga stigar i närheten

## Målgrupp
Projektets primära målgrupp är:

-Hästägare
- Ryttare
- Hästintresserade
- Personer som planerar uteritter

## Använda API:er
Projektet använder flera externa webbtjänster:

### 1. Nominatim API
Används för geokodning:
- Omvandlar platsnamn till koordinater (latitud/longitud)

### 2. OpenMeteo API
Används för väderdata:
- Temperatur
- Vindhastighet
- Aktuellt väder

### 3. Overpass API / OpenStreetMap
Används för ridvägsinformation:
- Ridvägar
- Hästvänliga vägar
- Bridleways
- Ridleder i närheten av vald plats

### 4. Leaflet.js
Används för att:
- Presentera kartor
- Visa markerad plats
- Visualisera användarens valda område

## Funktioner
- Sökfunktion för valfri plats
- Dynamisk hämtning av koordinater
- Aktuell väderinformation
- Automatiska ridrekommendationer baserade på väder
- Visning av ridvägar i närheten
- Responsiv design för mobil, surfplatta och desktop
- Mobilanpassad hamburgermeny
- CSS-animationer
- SCSS/SASS-struktur
- JavaScript med JSDoc-dokumentation
- Automatiserad arbetsprocess via Node.js och Vite
- Versionshantering med Git/GitHub


## För att klona projektet
https://github.com/emmaagren/frontend.projektuppgift.git


###Skapad av 
Emma Ågren
Frontendbaserad webbutveckling - Mittuniversitetet.