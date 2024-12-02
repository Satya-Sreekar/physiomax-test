function initMap() {
  // Initialize the map for Attapur location
  const attapurMap = new google.maps.Map(
    document.getElementById("map-attapur"),
    {
      center: { lat: 17.361542, lng: 78.428208 },
      zoom: 16,
    }
  );

  const attapurMarker = new google.maps.Marker({
    position: { lat: 17.361542, lng: 78.428208 },
    map: attapurMap,
    title: "Physiomax Attapur",
  });

  // Initialize the map for Lakdikapul location
  const lakdikapulMap = new google.maps.Map(
    document.getElementById("map-lakdikapul"),
    {
      center: { lat: 17.404561, lng: 78.460763 },
      zoom: 16,
    }
  );

  const lakdikapulMarker = new google.maps.Marker({
    position: { lat: 17.404561, lng: 78.460763 },
    map: lakdikapulMap,
    title: "Physiomax Lakdikapul",
  });

  // Add a click event listener on both markers
  attapurMarker.addListener("click", () => {
    openGoogleMapsDirections(attapurMarker.getPosition());
  });

  lakdikapulMarker.addListener("click", () => {
    openGoogleMapsDirections(lakdikapulMarker.getPosition());
  });

  // Function to open Google Maps and get directions
  function openGoogleMapsDirections(destination) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;

          // Construct the URL to open Google Maps with directions
          const directionsUrl = `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLng}&destination=${destination.lat()},${destination.lng()}&travelmode=driving`;

          // Open Google Maps in a new tab or use Google Maps app
          window.open(directionsUrl, "_blank");
        },
        () => {
          alert("Geolocation failed. Please enable location services.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
}
