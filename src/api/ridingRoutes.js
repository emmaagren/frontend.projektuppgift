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
    way["highway"="bridleway"](around:2000,${lat},${lon});
    way["highway"="path"](around:2000,${lat},${lon});
    way["highway"="track"](around:2000,${lat},${lon});
    relation["route"="horse"](around:2000,${lat},${lon});
    );
    out tags geom;
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