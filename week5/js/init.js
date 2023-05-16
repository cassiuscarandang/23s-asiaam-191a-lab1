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

const dataUrl = "map.geojson"

function loadData(url){
    Papa.parse(dataUrl, {
        header: true,
        download: true,
        complete: results => console.log(results)
    })
}
const dataURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR3YHP9ahFhAkbIF5bRYbF91u1SatT3YylQNzhks_YleAA9XO6mVCLVpratXtFa7kMZrUoZYLSlRoJR/pub?output=csv"
loadData(dataUrl)