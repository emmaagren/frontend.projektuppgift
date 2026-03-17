/**
 * Hämtar koordinater (latitud och longitud) från ett platsnamn 
 * med hjälp av Nominatim API.
 * @async
 * @function getCoordinates
 * @param {string} place - Namn på plats.
 * @returns {Promise<{lat: number, lon: number}>} Objekt med koordinater.
 * @throws {Error} Om platsen inte hittas.
 */

export async function getCoordinates(place) {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${place}`;

    const res = await fetch(url);
    const data = await res.json();

    if (!data.length) {
        throw new Error("Platsen hittades inte");
    }

    return {
        lat: parseFloat(data[0].lat),
        lon: parseFloat(data[0]. lon)
    };
}