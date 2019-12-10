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


    getValues(position) {
        this.latitud = position.coords.latitude;
        this.longitud = position.coords.longitude;
        this.accuracy = position.coords.accuracy;
        this.altitude = position.coords.altitude;
        this.altAccur = position.coords.altitudeAccuracy;
        this.heading = position.coords.heading;
        this.speed = position.coords.speed;

        this.mostrar();

    }

    mostrar() {

        var ubicacion = document.getElementById('ubicacion');
        var datos = '';
        datos += 'Latitud: ' + this.latitud + ' grados<br>';
        datos += 'Longitud: ' + this.longitud + ' grados<br>';
        datos += 'Exactitud: ' + this.accuracy + ' metros<br>';
        datos += 'Altitud: ' + this.altitude + ' metros.<br>';
        datos += 'Exactitud de la altitud: ' + this.altAccur + ' metros<br>';
        datos += 'Rumbo: ' + this.heading + ' grados<br>';
        datos += 'Velocidad: ' + this.speed + ' metros/segundo<br>';
        ubicacion.innerHTML = datos;

    }

    getErrores(error) {
        alert('Error: ' + error.code + ' ' + error.message);
    }

    execute() {
        navigator.geolocation.getCurrentPosition(this.getValues.bind(this), this.getErrores);
    }

    verMapa() {
        var mapa = new google.maps.Map(document.getElementById('mapa'), { zoom: 12, center: { lat: 53.34980185, lng: -6.260254191619831 }});

        var marker = new google.maps.Marker({ position: { lat: 53.34980185, lng: -6.260254191619831 } , map: mapa });
    }
}

var g = new GeoLocalizacion();