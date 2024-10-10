document.addEventListener('DOMContentLoaded', function() {
    const map = L.map('map').setView([52.1326, 5.2913], 7);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    breweries.forEach(brewery => {
        if (brewery.lat && brewery.lng) {
            L.marker([brewery.lat, brewery.lng])
                .addTo(map)
                .bindPopup(`<b>${brewery.name}</b><br><a href="${brewery.interne_url}" target="_blank">Meer info</a>`);
        }
    });
});