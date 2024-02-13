// Initialize and add the map
function initMap() {
    // The location of where you met or had your first kiss
    const location = { lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE };
    // The map, centered at the location
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: location,
    });
    // The marker, positioned at the location
    const marker = new google.maps.Marker({
      position: location,
      map: map,
    });
  }
  