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
        return "Blåsigt - klä på dig och undvik öppna fält. Tänk på att hästen kan bli rädd för lösa föremål som blåser förbi.";
    }

    if (temp < 0) {
        return "Kallt - risk för halka! Klä på dig ordentligt och undersök om hästen behöver brodd eller snösulor.";
    }

    if (temp > 20) {
        return "Varmt - rid gärna tidigt på morgonen och använd flugmedel. Se till så att både du och hästen får i er ordentligt med vatten.";
    }

    return "Perfekt väder för en ridtur, upp i sadeln och njut av dagen!"
}