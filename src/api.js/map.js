/**
 * Initierar en Leaflet-karta och placerar en markör.
 * @function initMap
 * @param {number} lat - laitud. 
 * @param {number} lon - longitud. 
 * @returns {object} Leaflet map.
 */

export function initMap(lat, lon) {
    const map = L.map("map").setView([lat, lon], 10);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap"
    }).addTo(map);

    L.marker([lat, lon]).addTo(map);

    return map;
}