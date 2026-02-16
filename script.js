const carMarkers = [
    { name: "Ridge Road Overlook", position: { lat: 43.211605113937644, lng: -79.74081953896356}, category: "scenic-route", description: "Beautiful drive with lots of spots to park and take pictures of your car with a look on Hamilton and Lake Ontario."}
];
const markers = [];
const filterButtons = document.querySelectorAll("#filter-buttons button");
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
filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const category = button.getAttribute("data-category");
        markers.forEach (obj => {
            if (category === "all" || obj.category === category) {
                obj.marker.setMap(map);
            } else {
                obj.marker.setMap(null);
            }
        });
    });
});