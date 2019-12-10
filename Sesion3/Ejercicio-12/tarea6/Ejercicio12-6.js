class GeoLocalizacion {
    constructor() {
        this.apikey = "AIzaSyCrmEJuUDuT97pIVb-AULt0ikC6UqyFM14";
        this.url = "https://maps.googleapis.com/maps/api/js?key=" + this.apikey ;
        this.latitud = "";
        this.longitud = "";
        this.accuracy = "";
        this.altitude = "";
        this.altAccur = "";
        this.heading = "";
        this.speed = "";
        
    }

    getErrores(error) {
        alert('Error: ' + error.code + ' ' + error.message);
    }

    execute() {
        this.aMadrid();

    }

    aMadrid() {
        var cMadrid = { lat: 40.486998363114594, lng: -3.5645379608927215 };
        var cBarcelona = { lat: 41.29547906636566, lng: 2.08566460373828 };
        var cMallorca = { lat: 39.5523128, lng: 2.7283212 };
        var cMalaga = { lat: 36.6777495, lng: -4.4901616 };
        var cAlicante = { lat: 38.2844177, lng: -0.5657529 };

        var mapa = new google.maps.Map(document.getElementById('mapa'), { zoom: 7, center: cMadrid });

        var marker = new google.maps.Marker({ position: cMadrid, map: mapa });
        var marker2 = new google.maps.Marker({ position: cBarcelona, map: mapa });
        var marker3 = new google.maps.Marker({ position: cMallorca, map: mapa });
        var marker4 = new google.maps.Marker({ position: cMalaga, map: mapa });
        var marker5 = new google.maps.Marker({ position: cAlicante, map: mapa });
    }

   
}

var g = new GeoLocalizacion();