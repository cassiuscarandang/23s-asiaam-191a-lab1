// declare variables
let mapOptions = {'center': [34.0709,-118.444],'zoom':5}

// use the variables
const map = L.map('the_map').setView(mapOptions.center, mapOptions.zoom);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// create a function to add markers
function addMarker(lat,lng,title,message){
    console.log(message)
    L.marker([lat,lng]).addTo(map).bindPopup(`<h2>${title}</h2> <h3>${message}</h3>`)
    return message
}

const dataUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR7PFIBKZjdKhT_kxuDz9kp0yVxVsAg8Rey_319ywLPI9SfDZEzekT7vsZc6TpUeUjPuzzStXql3BZR/pub?output=csv"

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
        addMarker(data.lat,data.lng,data['Where did you get vaccinated?'],data['Have you been vaccinated?'])
    })
}

addMarker(34.0911056700226, -118.34610971932614,'Breakfast Republic','Santa Monica: Great american style breakfast, but with a twist!')
addMarker(34.04399562341614, -118.23855499049235, 'Avenue 26 Tacos','Little Tokyo: Tacos served from a straightfoward grill!')
addMarker(34.07982012860386, -118.3027982744584, 'Katsu Bar','Koreatown: They have the best Katsu Sandos here!')
addMarker(34.062876885026505, -118.30854783347301, 'Gangnam Station Korean BBQ','Downtown Los Angeles: Korean BBQ that closes at 4:00AM on weekends!')

// create a function to add markers
function addMarker(lat,lng,title,message){
    console.log(message)
    L.marker([lat,lng]).addTo(map).bindPopup(`<h2>${title}</h2> <h3>${message}</h3>`)
    return message
}


function createButtons(lat,lng,title){
    const newButton = document.createElement("button"); 
    newButton.id = "button"+title; 
    newButton.innerHTML = title; 
    newButton.setAttribute("lat",lat); 
    newButton.setAttribute("lng",lng); 
    newButton.addEventListener('click', function(){
        map.flyTo([lat,lng]); 
    })
    document.getElementById("contents").appendChild(newButton); 
}

function addMarker(lat,lng,title,message){
    console.log(message)
    L.marker([lat,lng]).addTo(map).bindPopup(`<h2>${title}</h2> <h3>${message}</h3>`)
    createButtons(lat,lng,title); 
    return message
}


loadData(dataUrl)