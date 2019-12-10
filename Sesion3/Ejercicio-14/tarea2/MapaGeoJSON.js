class MapaGeoJSON {
    constructor() {
    }

    
    verMapa(files) {
        
        var mapOptions = {
            zoom: 10,
            center: { lat: 43.3630808, lng: -5.8499189 }
        };

        var mapa = new google.maps.Map(document.getElementById('mapa'), mapOptions);

        var r = new FileReader();
        r.readAsText(files[0]);
        r.onload = function (f) {
            var posicion = JSON.parse(r.result);
            mapa.data.addGeoJson(posicion);
        }
    }
  
}

var m = new MapaGeoJSON();