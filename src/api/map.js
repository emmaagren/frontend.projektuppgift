let map;


/**
 * Initierar en Leaflet-karta och placerar en markör.
 * @function initMap
 * @param {number} lat - laitud. 
 * @param {number} lon - longitud. 
 * @param {Array} routes - Ridvägar från Overpass API.
 * @returns {object} Leaflet map.
 */

export function initMap(lat, lon, routes = []) {
    if (map) {
        map.remove();
    }

    map = L.map("map").setView([lat, lon], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap"
    }).addTo(map);

    L.marker([lat, lon])
    .addTo(map)
    .bindPopup("Vald plats")
    .openPopup();

    routes.forEach(route => {
        if (!route.geometry) return;

        const coordinates = route.geometry.map(point => [
            point.lat,
            point.lon
        ]);

        L.polyline(coordinates, {
            color: "#8b5e3c",
            weight: 6,
            opacity: 0.9
        })
        .addTo(map)
        .bindPopup(route.tags?.name || "Möjlig ridväg");
    });

    return map;
}