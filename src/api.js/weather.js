/**
 * Hämtar väderdata från Open-Meteo.
 * @async
 * @function fetchWeather
 * @param {number} lat - latitud.
 * @param {number} lon - longitud.
 * @returns {Promise<Object>} Aktuellt väder.
 * @throws {Error} Om anropet misslyckas.
 */

export async function fetchWeather(lat, lon) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error ('Kunde inte hämta väderdata');
    }
    
    const data = await response.json();
    return data.current_weather;
}