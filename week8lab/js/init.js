// declare variables
let mapOptions = {'center': [34.0709,-118.444],'zoom':5}

let LosAngeles = L.featureGroup();
let nonLosAngeles = L.featureGroup();

let layers = {
    "Los Angeles": LosAngeles,
    "Non-Los Angeles": nonLosAngeles
}

let circleOptions = {
    radius: 4,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
}

const dataUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR7PFIBKZjdKhT_kxuDz9kp0yVxVsAg8Rey_319ywLPI9SfDZEzekT7vsZc6TpUeUjPuzzStXql3BZR/pub?output=csv"

// define the leaflet map
const map = L.map('the_map').setView(mapOptions.center, mapOptions.zoom);

// add layer control box
L.control.layers(null,layers).addTo(map)

let Esri_WorldGrayCanvas = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
	maxZoom: 16
});

Esri_WorldGrayCanvas.addTo(map);

function addMarker(data){
    if(data['Is this Restaurant located in the Los Angeles area?'] == "Yes"){
        circleOptions.fillColor = "red"
        LosAngeles.addLayer(L.circleMarker([data.lat,data.lng],circleOptions).bindPopup(`<h2>Yes</h2>`))
        createButtons(data.lat,data.lng,data['What is the Restaurant Name?'])
        }
    else{
        circleOptions.fillColor = "blue"
        nonLosAngeles.addLayer(L.circleMarker([data.lat,data.lng],circleOptions).bindPopup(`<h2>No</h2>`))
        createButtons(data.lat,data.lng,data['What is the Restaurant Name?'])
    }
    return data
}

function createButtons(lat,lng,title){
    const newButton = document.createElement("button"); // adds a new button
    newButton.id = "button"+title; // gives the button a unique id
    newButton.innerHTML = title; // gives the button a title
    newButton.setAttribute("lat",lat); // sets the latitude 
    newButton.setAttribute("lng",lng); // sets the longitude 
    newButton.addEventListener('click', function(){
        map.flyTo([lat,lng]); //this is the flyTo from Leaflet
    })
    const spaceForButtons = document.getElementById('placeForButtons')
    spaceForButtons.appendChild(newButton);//this adds the button to our page.
}

function loadData(url){
    Papa.parse(url, {
        header: true,
        download: true,
        complete: results => processData(results)
    })
}

function processData(results){
    console.log(results)
    results.data.forEach(data => {
        console.log(data)
        addMarker(data)

        addMarker(34.0911056700226, -118.34610971932614,'Breakfast Republic','Santa Monica: Great american style breakfast, but with a twist!')
        addMarker(34.04399562341614, -118.23855499049235, 'Avenue 26 Tacos','Little Tokyo: Tacos served from a straightfoward grill!')
        addMarker(34.07982012860386, -118.3027982744584, 'Katsu Bar','Koreatown: They have the best Katsu Sandos here!')
        addMarker(34.062876885026505, -118.30854783347301, 'Gangnam Station Korean BBQ','Downtown Los Angeles: Korean BBQ that closes at 4:00AM on weekends!')
    })
    LosAngeles.addTo(map) // add our layers after markers have been made
    nonLosAngeles.addTo(map) // add our layers after markers have been made  
    let allLayers = L.featureGroup([LosAngeles,nonLosAngeles]);
    map.fitBounds(allLayers.getBounds());
}

loadData(dataUrl)
