const carMarkers = [
    { name: "Hamilton Car Mechanic", position: { lat: 43.2523507, lng: -79.8765251 }, category: "auto-shop", description: "Highly-rated downtown mechanic on Bay St. offering oil changes, tire swaps, and general repairs at fair prices. Friendly staff and quick turnaround." },
    { name: "Coin Car Wash – Cannon St", position: { lat: 43.2590904, lng: -79.8577669 }, category: "car-wash", description: "24-hour self-serve coin car wash right in the heart of downtown Hamilton on Cannon St E. Multiple bays and a touchless automatic option available." },
    { name: "1 GR8 CARWASH – Cannon St", position: { lat: 43.259242, lng: -79.8573033 }, category: "car-wash", description: "One of Hamilton's most praised self-serve washes, open 24/7 with excellent staff and a touchless auto option. Located downtown on Cannon St E." },
    { name: "RSK Automotive Hamilton", position: { lat: 43.2602192, lng: -79.864255 }, category: "auto-shop", description: "Trusted body and mechanical shop on Cannon St E downtown. Known for Tesla repairs, honest diagnostics, and complimentary detailing on completed jobs." },
    { name: "Chestnut Avenue Auto", position: { lat: 43.2541225, lng: -79.839565 }, category: "auto-shop", description: "Perfect 5-star neighbourhood shop in lower Hamilton. Transparent communication, fair pricing, and seasonal tire storage make this a local favourite." },
    { name: "BBT Auto Repair & Tires", position: { lat: 43.2574504, lng: -79.8332137 }, category: "auto-shop", description: "Full-service shop in the north end near downtown offering tire changes, rust proofing, and detailing. Friendly team with very reasonable prices." },
    { name: "CRS Automotive", position: { lat: 43.2509634, lng: -79.8339236 }, category: "auto-shop", description: "Community staple on King St E for nearly a decade. Handles everything from tires to complex diagnostics. Open 7 days a week with extended hours." },
    { name: "Sam Lawrence Park", position: { lat: 43.2449437, lng: -79.8657336 }, category: "scenic-route", description: "Iconic Hamilton escarpment lookout with sweeping panoramic views of the city skyline, Hamilton Harbour, and Lake Ontario. A favourite sunset and car photo spot with free parking on Concession St." },
    { name: "Mountain Brow East Lookout Point", position: { lat: 43.2298202, lng: -79.8174642 }, category: "scenic-route", description: "One of the best overlooks on the Niagara Escarpment. On clear days you can see the entire city and even Toronto's CN Tower across Lake Ontario. Great for car shoots." },
    { name: "Mountain Brow Lookout – Kenilworth", position: { lat: 43.2329136, lng: -79.8263896 }, category: "scenic-route", description: "Quiet escarpment lookout at the top of the Kenilworth Access with stunning city views. Ample roadside parking and easy access make it ideal for car meets and photos." },
    { name: "75 John St N Parking Lot", position: { lat: 43.2583314, lng: -79.8661513 }, category: "meet-spot", description: "Open surface lot in the heart of downtown Hamilton. Large, open-concept layout and central location makes it a common informal car meet and gathering spot on weekend evenings." },
    { name: "Eric's Automotive – Upper Wellington", position: { lat: 43.2387378, lng: -79.8670227 }, category: "auto-shop", description: "Award-winning shop on the Hamilton Mountain known for detailed inspection reports with photos, complimentary interior wipe-down, and a genuine small-business feel." },
    { name: "GS Car Wash & Detailing Centre", position: { lat: 43.2200167, lng: -79.8429137 }, category: "car-wash", description: "Full-service wash and detailing centre on Upper Gage with over 1,400 five-star reviews. Offers exterior, interior, and premium detail packages 7 days a week." },
    { name: "Gageview Carwash", position: { lat: 43.2455723, lng: -79.8335614 }, category: "car-wash", description: "24-hour self-serve car wash on Main St E on the Hamilton Mountain. Multiple bays, soft-bristle brushes, and a large dry-off lot. Accepts credit card and coin." },
    { name: "Main East Car Wash", position: { lat: 43.2397867, lng: -79.8066204 }, category: "car-wash", description: "Top-rated full-service wash in the east end. Staff-run VIP cleans leave cars spotless inside and out. Consistently ranked one of the best in Hamilton." },
    { name: "Red Hill Car Wash – Parkdale", position: { lat: 43.238712, lng: -79.791499 }, category: "car-wash", description: "Hugely popular Red Hill location at Parkdale Ave with 4.7 stars from 800+ reviews. 24/7 self-serve bays, seat shampoo machines, and a dedicated dry-off area." },
    { name: "Right Way Auto Repair – Rymal Rd", position: { lat: 43.1891674, lng: -79.8423129 }, category: "auto-shop", description: "Trusted shop on the south Mountain near Rymal Rd. Provides transparent inspection reports with photos, honest pricing, and service for all makes including performance vehicles." },
    { name: "Escarpment Rail Trail Lookout", position: { lat: 43.2289013, lng: -79.8151023 }, category: "scenic-route", description: "Scenic escarpment viewpoint accessible via the Wentworth Stairs. Overlooks the Red Hill Valley and East Hamilton. Part of the Bruce Trail with a UNESCO biosphere designation." },
    { name: "Royal Auto Care – Main St W", position: { lat: 43.2576573, lng: -79.9285614 }, category: "auto-shop", description: "Highly recommended shop on the west side near McMaster. Handles complex jobs like dash removal, transmission flushes, and suspension work at fair prices. 4.9 stars from 128 reviews." },
    { name: "Princess Point Lookout", position: { lat: 43.2756541, lng: -79.8970782 }, category: "scenic-route", description: "Hidden gem at the end of a short trail off Churchill Park. Stunning waterfront views over Cootes Paradise and Lake Ontario. Peaceful and rarely crowded – a favourite for sunset photos." },
    { name: "Sassafras Point Lookout", position: { lat: 43.2734786, lng: -79.9019239 }, category: "scenic-route", description: "Elevated lookout within the Royal Botanical Gardens trail system offering dramatic views of Cootes Paradise Marsh. A rewarding spot to park and hike to for sunrise or sunset car shoots." },
    { name: "Chedoke Scenic Lookout", position: { lat: 43.2459349, lng: -79.9295225 }, category: "scenic-route", description: "Best lookout for West Hamilton and the Dundas Valley from the Chedoke Radial Trail. Views stretch across the escarpment to Lake Ontario. Open 24 hours with trail parking nearby." },
    { name: "Mountview Waterfall – Scenic Dr", position: { lat: 43.245625, lng: -79.9214833 }, category: "scenic-route", description: "Scenic Drive along the western escarpment leads to Princess Falls and this hidden waterfall stop. The road itself offers excellent backdrops for car photography through all four seasons." },
    { name: "Dundas Valley Conservation Area", position: { lat: 43.2550687, lng: -79.9937426 }, category: "scenic-route", description: "Stunning forested conservation area on Governors Rd in Dundas with 40+ km of trails. The winding road into the conservation area is a great scenic drive with waterfalls along the route." },
    { name: "Red Hill Car Wash – Mountain", position: { lat: 43.193786, lng: -79.819641 }, category: "car-wash", description: "South Mountain Red Hill location on Pritchard Rd. 24/7 access with well-maintained self-serve bays, a rug shampoo attachment, and wax/detail products available on-site." },
    { name: "Devil's Punchbowl Conservation Area", position: { lat: 43.2109704, lng: -79.7555776 }, category: "scenic-route", description: "Dramatic escarpment overlook in Stoney Creek with breathtaking views over Hamilton and Burlington. The Ridge Rd approach is itself a stunning scenic drive along the top of the escarpment." },
    { name: "Red Hill Car Wash – Waterdown", position: { lat: 43.3249382, lng: -79.9207083 }, category: "car-wash", description: "Flagship Red Hill Car Wash in Waterdown with exceptional 4.8 stars from 700+ reviews. 24/7 self-serve bays, seat shampoo system, and top-tier detailing products make this the best in the region." },
    { name: "Flamboro Speedway", position: { lat: 43.3281402, lng: -80.0243530 }, category: "meet-spot", description: "Active 1/3-mile oval race track in Millgrove just north of Hamilton. Hosts weekly Saturday night racing events and is a hub for local motorsport enthusiasts and car clubs." },
    { name: "Hamilton Corvette Club HQ", position: { lat: 43.2161847, lng: -79.8881574 }, category: "meet-spot", description: "Home base for the Hamilton Corvette Club on Upper James St. Active club with regular local events, cruises, and car shows throughout the summer season." },
    { name: "Beamer Memorial Conservation Area", position: { lat: 43.1882348, lng: -79.5756026 }, category: "scenic-route", description: "Stunning Niagara Escarpment conservation area in Grimsby with lookout points offering views of Lake Ontario all the way to Toronto. The Ridge Rd drive here is a must-do scenic route." },
    { name: "Beamer Lookout Point", position: { lat: 43.1901128, lng: -79.5674850 }, category: "scenic-route", description: "Elevated lookout above Grimsby on the Niagara Escarpment with sweeping lake views. On clear days Toronto is visible across the water — an incredible backdrop for car photography." },
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
            selectedMarkerPosition = marker.getPosition();
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
            userPosition = userloc;
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
                selectedMarkerPosition = marker.getPosition();
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
    directionsService.route(req, (result, status) => {
        if (status === "OK") {
            directionsRenderer.setDirections(result);
        } else {
            alert("Could not calculate route.");
        }
    });
});