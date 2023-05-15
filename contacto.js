// crea el mapa y lo coloca en el elemento con el id "mapid"
var mymap = L.map('mapid').setView([42.7288, -78.0137], 13);

// añade una capa de teselas de mapa de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 0
}).addTo(mymap);

// añade un marcador en la ubicación del  Caffé Nascosto
var marker = L.marker([42.7288, -78.0137]).addTo(mymap);

// añade un cuadro emergente con información del  Caffé Nascosto cuando se hace clic en el marcador
marker.bindPopup("<b> Caffé Nascosto</b><br> 123 Main St<br> Anytown, USA").openPopup();
