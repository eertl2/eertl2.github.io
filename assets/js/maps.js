let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 43.073, lng: -89.401 },
    zoom: 8,
  });
}

window.initMap = initMap;