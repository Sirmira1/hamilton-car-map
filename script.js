const carMarkers = [
  
];
const markers = [];
let map;
function initMap() {
    const hamilton = { lat: 43.2557, lng: -79.8711 };
    map = new google.maps.Map(document.getElementById("map"), {
        center: hamilton,
        zoom: 13,
    });
    carMarkers.forEach (data => {
        const marker = new google.maps.Marker({
            position: data.position,
            map: map,
            title: data.name,
        });
        const info = new google.maps.InfoWindow ({
            content: `<h5>${data.name}</h5><p>${data.description}</p>`,
        });
        marker.addListener("click", () => {
            info.open(map, marker);
        })
        markers.push({ marker, category: data.category });
    });
}