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

    el.innerHTML =`
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

el.classList.add("fade-in");