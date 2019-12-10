class GeoLocalizacion {
    constructor() {
        this.latitud = "";
        this.longitud = "";
        this.accuracy = "";
        this.altitude = "";
        this.altAccur = "";
        this.heading = "";
        this.speed = "";
    }


    execute() {
        navigator.geolocation.getCurrentPosition(function (position) {
            this.latitud = position.coords.latitude;
            this.longitud = position.coords.longitude;
            this.accuracy = position.coords.accuracy;
            this.altitude = position.coords.altitude;
            this.altAccur = position.coords.altitudeAccuracy;
            this.heading = position.coords.heading;
            this.speed = position.coords.speed;
        
            $("#listaLoc").append("<li> Latitud: "+this.latitud+" grados </li>");
            $("#listaLoc").append("<li> Longitud: " + this.longitud + " grados</li>");
            $("#listaLoc").append("<li> Exactitud: " + this.accuracy + " metros</li>");
            $("#listaLoc").append("<li> Altitud: " + this.altitude + " metros</li>");
            $("#listaLoc").append("<li> Exactitud de altitud: " + this.altAccur + " metros</li>");
            $("#listaLoc").append("<li> Rumbo: " + this.heading + " grados</li>");
            $("#listaLoc").append("<li> Velocidad: " + this.speed + " metros/segundo</li>");


        }.bind(this));
    }
}

var g = new GeoLocalizacion();
