function initMap() {
  // Map for Attapur Location
  const attapurMap = new google.maps.Map(
    document.getElementById("map-attapur"),
    {
      center: { lat: 17.361542, lng: 78.428208 },
      zoom: 16,
    }
  );
  new google.maps.Marker({
    position: { lat: 17.361542, lng: 78.428208 },
    map: attapurMap,
    title: "Physiomax Attapur",
  });

  // Map for Lakdikapul Location
  const lakdikapulMap = new google.maps.Map(
    document.getElementById("map-lakdikapul"),
    {
      center: { lat: 17.404561, lng: 78.460763 },
      zoom: 16,
    }
  );
  new google.maps.Marker({
    position: { lat: 17.404561, lng: 78.460763 },
    map: lakdikapulMap,
    title: "Physiomax Lakdikapul",
  });
}
