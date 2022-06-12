// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
//let map = L.map('mapid').setView([40.7, -94.5], 4);

// Create the map object with a center and zoom level.
let map = L.map("mapid", {
    center: [
      44.0, -80.0
    ],
    zoom: 2
  });


// import json data
let torontoData = "https://raw.githubusercontent.com/AnnaKDay/Mapping-Earthquakes/Mapping_GeoJSON_Linestrings/Practice/Mapping_GeoJSON_Linestrings/torontoRoutes.json"

// Create a style for the lines.
let myStyle = {
    color: "#ffffa1",
    weight: 2
}

// Grabbing our GeoJSON data.
d3.json(torontoData).then(function(data) {
    console.log(data);
    L.geoJSON(data, {
        style: myStyle,
        // We turn each feature into a marker on the map.
        onEachFeature: function(feature, layer) {
        layer.bindPopup("<h1>" + "Airline: " + feature.properties.airline + "</h2>" + "<h3>"+ "Airline ID " + feature.properties.airline_id + "</h3>");
        }
    }).addTo(map);
});


// We create the tile layer that will be the background of our map.
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
light.addTo(map);