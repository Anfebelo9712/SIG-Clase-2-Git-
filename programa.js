var map = L.map('map').setView([4.6375214051232145, -74.06164979595312], 17);
var marker = L.marker([4.638569388042792, -74.06292652746052]).addTo(map);
var marker = L.marker([4.637580220532336, -74.06121527808723]).addTo(map);
var marker = L.marker([4.636452033194299, -74.06103825228999]).addTo(map);
var marker = L.marker([4.636823168277613, -74.06230108439775]).addTo(map);
var marker = L.marker([4.637537448671928, -74.06314377891375]).addTo(map);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

