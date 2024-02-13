// Initialize and add the map
var map = L.map('map').setView([49.021750, 12.058500], 15); // Set initial view and zoom level

// Add the OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
}).addTo(map);

// Add a marker at the location where you met or had your first kiss
var marker = L.marker([49.021750, 12.058500]).addTo(map);