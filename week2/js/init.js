var mario = 3;
var age = 12;
var combined = mario + age
console.log (combined)
console.log('Hello Asian Am 191 from linked Javascript!')

console.log("Hello Asia-Am 191A! :)")

// JavaScript const variable declaration
const map = L.map('the_map').setView([34.0709, -118.444], 15); 

// Leaflet tile layer, i.e. the base map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map); 

//JavaScript let variable declaration to create a marker
let marker = L.marker([34.07159104523408, -118.44536032353822]).addTo(map) 
        .bindPopup('John Wooden Center<br> Outdoor and Upstairs patio is where I drink coffee at! ')
        .openPopup();
        
 let marker2 = L.marker([34.07016913102211, -118.44058012680507]).addTo(map) 
        .bindPopup('Evelyn & Mo Ostin Music Cafe<br> Hidden Coffee spot to study! ')
        .openPopup();

let marker3 = L.marker([34.07417614428507, -118.44349190210461]).addTo(map) 
        .bindPopup('UCLA Anderson School of Management<br> Aesthetic and Futuristic building!  ')
        .openPopup();

let marker4 = L.marker([34.06682584646792, -118.44146467558404]).addTo(map) 
        .bindPopup('Mildred E. Mathias Botanical Gardens<br> Peaceful environment! ')
        .openPopup();

function addMarket (latitude,longitude, message){
    L.marker([latitude,longitude].addTo(map).bindPopup(message))
}

