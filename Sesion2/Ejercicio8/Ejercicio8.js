class WebMeteorologica {
    constructor(lugar) {
        this.apikey = "fb67488ace55ddf8ffc08c8919ffb28f";
        this.url = "http://api.openweathermap.org/data/2.5/weather?q="+lugar+",ES&units=metric&lang=es&APPID=fb67488ace55ddf8ffc08c8919ffb28f";
        this.nombre = "";
        this.temperatura = "";
        this.humedad = "";
        this.lon = "";
        this.lat = "";
        this.tMax = "";
        this.pais = "";
        this.ref = "";
    }

    cargarDatos() {
        $("ul").empty();
        $("h2").empty();
        $("#parrafo2").empty();
        jQuery.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function (info) {
                this.nombre = info.name;
                this.temperatura = info.main.temp;
                this.humedad = info.main.humidity;
                this.lon = info.coord.lon;
                this.lat = info.coord.lat;
                this.pais = info.sys.country;
                this.ref = info.weather[0].icon;

                $("h2").append(this.nombre + ", " + this.pais);
                                       
                $("#parrafo2").append("<img alt='Imagen meteorologia' src=http://openweathermap.org/img/w/"+ this.ref +".png>");

                $("ul").append("<li>Longitud: " + this.lon + "</li>")
                $("ul").append("<li>Latitud: " + this.lat + "</li>");
                $("ul").append("<li>Temperatura: " + this.temperatura + "&deg;C</li>");

                $("ul").append("<li>Humedad: " + this.humedad + " %</li>")
                this.lon = info.main.pressure;
                $("ul").append("<li>Presion: " + this.lon + " hpa</li>");
                this.lon = info.main.temp_min;
                $("ul").append("<li>Temperatura minima: " + this.lon + " &deg;C</li>");
                this.lon = info.main.temp_max;
                $("ul").append("<li>Temperatura maxima: " + this.lon + " &deg;</li>");
                this.lon = info.wind.speed;
                $("ul").append("<li>Viento: " + this.lon + "m/s</li>");
                this.lon = new Date(info.sys.sunrise * 1000).toLocaleTimeString();
                $("ul").append("<li>Amanecer: " + this.lon+ "</li>");
                this.lon = new Date(info.sys.sunset * 1000).toLocaleTimeString();
                $("ul").append("<li>Puesta de sol: " + this.lon + "</li>");

            },   
            error: function () {
                alert("No se ha podido cargar la página")
            }
        });
    }
    
    
}

var mOviedo = new WebMeteorologica("Oviedo");
var mAviles = new WebMeteorologica("Aviles");
var mGijon = new WebMeteorologica("Gijon");
var mMieres = new WebMeteorologica("Mieres");
var mLlanes = new WebMeteorologica("Llanes");
