import './styles/main.scss'

import { getCoordinates } from './api/geo.js';
import { fetchWeather } from './api/weather.js';
import { initMap } from './api/map.js';
import { fetchRidingRoutes } from './api/ridingRoutes.js';

import { renderAdvice, renderWeather, renderRoutes } from './render.js';

import { getRidingAdvice } from './ridingAdvice.js';


/*
 * Initierar applikationen och hanterar användarinteraktion.
 * @function initApp
 * @returns {void}
 */

function initApp() {

    const form = document.querySelector("#searchForm");

    renderSearchHistory();

    if (!form) {
        console.error("Form hittades inte!");
        return;
    }

    form.addEventListener("submit", handleSearch);

    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
        console.log("KLICK FUNKAR");
        navLinks.classList.toggle("active");
    });
}

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
    const place = input.value.trim();

    saveSearch(place);

    try {
        const coords = await getCoordinates(place);
        const weather = await fetchWeather(coords.lat, coords.lon);
        const routes = await fetchRidingRoutes(coords.lat, coords.lon);
        renderRoutes(routes);

        initMap(coords.lat, coords.lon, routes);
        renderWeather(weather);
        renderRoutes(routes);

        const advice = getRidingAdvice(weather);
        renderAdvice(advice);

    } catch (error) {
        console.error("Fel:", error);
        renderAdvice("Platsen kunde inte hittas. Kontrollera stavningen och försök igen.");
    }

}

/**
 * Sparar sökning i localStorage.
 * @function saveSearch
 * @param {string} place - Sökplats
 * @returns {void}
 */

function saveSearch(place) {

    let searches = JSON.parse(localStorage.getItem("searches")) || [];

    if (!searches.includes(place)) {
        searches.unshift(place);
    }

    searches = searches.slice(0, 5);

    localStorage.setItem("searches", JSON.stringify(searches));

    renderSearchHistory();
}

/**
 * Renderar tidigare sökningar.
 * @function renderSearchHistory
 * @returns {void}
 */

function renderSearchHistory() {

    const container = document.querySelector("#searchHistory");

    if (!container) return;

    const searches = JSON.parse(localStorage.getItem("searches")) || [];

    if (!searches.length) {
        container.innerHTML = "";
        return;
    }

    container.innerHTML = `
    <h2>Tidigare sökningar</h2>
    <ul class="history-list">
    ${searches.map(place => `
        <li>
            <button class="history-btn" data-place="${place}">
                ${place}
            </button>
        </li>
        `).join("")}
        </ul>
        `;

        document.querySelectorAll(".history-btn").forEach(button => {
            button.addEventListener("click", () => {

                const input = document.querySelector("#searchInput");

                input.value = button.dataset.place;

                document.querySelector("#searchForm")
                .dispatchEvent(new Event("submit"));
            });
        });
    }

document.addEventListener ("DOMContentLoaded", initApp);