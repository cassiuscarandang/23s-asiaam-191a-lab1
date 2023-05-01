// declare the map
const map = L.map('the_map').setView([34.0709,-118.444], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

addMarker(34,-118,'Universal Studios','Los Angeles, California: Have not been there since I was 5 years old!')
addMarker(40.896472663048804, -73.92895045888656, 'Statue of Liberty','New York: Never been to New York before: I am going this summer!')
addMarker(29.55205599463767, -95.09811512883603, 'NASA Space Center','Houston, Texas: I have always been curious about NASA and the science behind it!')
addMarker(25.825979962317607, -80.12606946754914, 'Miami Beach','Miami, Florida: There is no better place than a hot sunny day on the beach!')

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

function random(number){
  return Math.floor(Math.random() * (number + 1));
}

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});
