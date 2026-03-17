import './styles/main.scss'

import { getCoordinates } from './api/geo.js';
import { fetchWeather } from './api/weather.js';
import { initMap } from './api/map.js';

import { renderAdvice, renderWeather } from './render.js';

import { getRidingAdvice } from './ridingAdvice.js';

/**
 * Initierar applikationen och hanterar användarinteraktion.
 * @function initApp
 * @returns {void}
 */

function initApp() {
    const form = document.querySelector("#searchForm");

    form.addEventListener("submit", handleSearch);
}

/**
 * Hanterar sökning av plats.
 * @async
 * @function handleSearch
 * @param {Event} e - Submit-event från formulär.
 * @returns {Promise<void>} 
 */

async function handleSearch(e) {
    e.preventDefault();

    const input = document.querySelector("#searchInput");
    const place = input.value;

    try {
        const coords = await getCoordinates(place);
        const weather = await fetchWeather(coords.lat, coords.lon);

        initMap(coords.lat, coords.lon);
        renderWeather(weather);

        const advice =getRidingAdvice(weather);
        renderAdvice(advice);

    } catch (error) {
        console.error("Fel:", error);
    }
    
}

initApp();