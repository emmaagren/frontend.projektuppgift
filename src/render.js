/**
 * Renderar väderinformation i DOM.
 * @function renderWeather
 * @param {Object} weather - Väderdata.
 * @param {number} weather.temperature - Temperatur.
 * @param {number} weather.windspeed - Vindhastighet.
 * @returns {void}
 */

export function renderWeather(weather) {
    const el = document.querySelector("#weather");

    el.innerHTML = `
    <p>Temperatur: ${weather.temperature}°C</p>
    <p>Vind: ${weather.windspeed} m/s</p>
    `;
}


/**
 * Renderar ridrekommendation i DOM.
 * @function renderAdvice
 * @param {string} advice - Rekommendationstext.
 * @returns {void}
 */

export function renderAdvice(advice) {
    const el = document.querySelector("#advice");
    el.textContent = advice;
}

/**
 * Renderear ridvägar i DOM.
 * @function renderRoutes
 * @param {Array} routes - lista med ridvägar från Overpass API.
 * @returns {void}
 */

export function renderRoutes(routes) {
    const el = document.querySelector("#routes");

    if (!routes.length) {
        el.innerHTML = "<h2>Möjliga ridvägar nära dig</h2><p>Inga ridvägar hittades i närheten</p>";
        return;
    }

    el.innerHTML = `
    <h2>Möjliga ridvägar nära dig</h2>
    <p>${routes.length} stigar, leder eller skogsvägar hittades inom 2 km.</p>
    <ul>
    ${routes.slice(0, 5).map(route => `
        <li>${route.tags?.name || "Namnlös ridväg/stig"}</li>
        `).join("")}
        </ul>
    `;
}