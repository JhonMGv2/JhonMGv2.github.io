// Initialize and add the map
function initMap() {
    // The location of where you met or had your first kiss
    const location = { lat: 49.021750, lng: 12.058500 }; // Updated coordinates
    // The map, centered at the location
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: location,
    });
    // The custom heart icon
    const icon = {
      url: "https://img.icons8.com/plasticine/2x/heart.png", // Heart icon URL
      scaledSize: new google.maps.Size(50, 50), // Size of the heart icon
      origin: new google.maps.Point(0, 0), // Position of the heart icon
      anchor: new google.maps.Point(25, 50), // Position to attach the heart icon
    };
    // The marker, positioned at the location
    const marker = new google.maps.Marker({
      position: location,
      map: map,
      icon: icon, // Use the heart icon
    });
  }
  