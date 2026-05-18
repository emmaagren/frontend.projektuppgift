/**
 * Hämtar ridvägar nära en plats med Overpass API.
 * @async
 * @function fetchRidingRoutes
 * @param {number} lat - Latitude
 * @param {number} lon - Longitude
 * @returns {Promise<Array>} lista med ridvägar/stigar.
 */

export async function fetchRidingRoutes(lat, lon) {
    const query = `
    [out:json][timeout:25];
    (
    way["highway"="bridleway"](around:5000,${lat},${lon});
    way["horse"="yes"](around:5000,${lat},${lon});
    way["horse"="designated"](around:5000,${lat},${lon});
    relation["route"="horse"](around:5000,${lat},${lon});
    );
    out tags center 10;
    `;

    const url = "https://overpass-api.de/api/interpreter";

    const response = await fetch(url, {
        method: "POST",
        body: query
    });

    if (!response.ok) {
        throw new Error("Kunde inte hämta ridvägar");
    }

    const data = await response.json();
    return data.elements;
}