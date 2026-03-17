/**
 * Genererar rekommendationer baserat på väderdata.
 * @function getRidingAdvice
 * @param {Object} weather - Väderobjekt från API.
 * @param {number} weather.temperature - Temperatur i grader celsius.
 * @param {number} weather.windspeed - Vindhastighet i m/s.
 * @returns {string} Text med rekommendation för ridning.
 */

export function getRidingAdvice(weather) {

    const temp = weather.temperature;
    const wind = weather.windspeed;

    if (wind > 10) {
        return "Blåsigt - undvik öppna fält.";
    }

    if (temp < 0) {
        return "Kallt - risk för halka, välj säkra vägar.";
    }

    if (temp > 20) {
        return "Varmt - rid tidigt på morgonen.";
    }

    return "Perfekt väder för en ridtur!"
}