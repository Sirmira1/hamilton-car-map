const carMarkers = [
    { name: "Ridge Road Overlook", position: { lat: 43.211605113937644, lng: -79.74081953896356 }, category: "scenic-route", description: "Beautiful drive with lots of spots to park and take pictures of your car with a look on Hamilton and Lake Ontario."}
];
const markers = [];
const filterButtons = document.querySelectorAll("#filter-buttons button");
let map;
let usermarker = null;
let geocoder;
let directionsService;
let directionsRenderer;
let selectedMarkerPosition = null;
let userPosition = null;
function initMap() {
    const hamilton = { lat: 43.2557, lng: -79.8711 };
    map = new google.maps.Map(document.getElementById("map"), {
        center: hamilton,
        zoom: 13,
    });
    geocoder = new google.maps.Geocoder();
    directionsRenderer = new google.maps.DirectionsRenderer({
        map: map,
        suppressMarkers: false
    });
    directionsService = new google.maps.DirectionsService();
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                userPosition = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
            }, () => {
                alert ("Locaation needed to calculate directions");
            }
        );
    }
    carMarkers.forEach (data => {
        const marker = new google.maps.Marker({
            position: data.position,
            map: map,
            title: data.name,
        });
        const info = new google.maps.InfoWindow ({
            content: `<h5>${data.name}</h5><p>${data.description}</p></p>${data.category}</p>`,
        });
        marker.addListener("click", () => {
            selectedMarkerPosition = marker.position;
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
document.getElementById("locate-btn").addEventListener("click", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const userloc = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            if (usermarker) {
                usermarker.setMap(null);
            }
            usermarker = new google.maps.Marker ({
                position: userloc,
                map: map,
                title: "Your Location",
                icon: {url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png"}
            });
            map.setCenter(userloc);
        }, () => {
            alert("Unable to acquire your location");
        });
    } else {
        alert("Geolocation not supported by this browser");
    }
});
document.getElementById("add-marker-btn").addEventListener("click", () => {
    const name = document.getElementById("place-name").value;
    const address = document.getElementById("place-address").value;
    const desc = document.getElementById("place-desc").value;
    const category = document.getElementById("place-category").value;
    if (!name || !address) {
        alert ("You must enter a name, a description, and an address.");
        return;
    }
    geocoder.geocode({ address: address}, (results, status) => {
        if (status === "OK") {
            const location = results[0].geometry.location;
            const marker = new google.maps.Marker ({
                position: location,
                map: map,
                title: name,
            });
            const infoWindow = new google.maps.InfoWindow({
                content: `<h5>${name}</h5></p>${desc}</p><p>${category}</p>`
            });
            marker.addListener("click", () => {
                selectedMarkerPosition = marker.position;
                infoWindow.open(map, marker);
            });
            markers.push({marker, category});
            map.setCenter(location);
            document.getElementById("place-name").value = "";
            document.getElementById("place-address").value = "";
        } else {
            alert ("Invalid address.");
        }
    });
});
document.getElementById("routeBtn").addEventListener("click", () => {
    if (!userPosition || !selectedMarkerPosition) {
        alert("You must select a position and allow GPS first.");
        return;
    }
    const req = {
        origin: userPosition,
        destination: selectedMarkerPosition,
        travelMode: google.maps.TravelMode.DRIVING
    };
    directionsService.route(req, (results, status) => {
        if (status === "OK") {
            directionsRenderer.setDirections(result);
        } else {
            alert("Could not calculate route.");
        }
    });
});