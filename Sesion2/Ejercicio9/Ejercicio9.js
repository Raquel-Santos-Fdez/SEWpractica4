class WebMeteorologica {
    constructor(lugar) {
        this.apikey = "fb67488ace55ddf8ffc08c8919ffb28f";
        this.url = "http://api.openweathermap.org/data/2.5/weather?q="+lugar+",ES&mode=xml&units=metric&lang=es&APPID=fb67488ace55ddf8ffc08c8919ffb28f";
        this.nombre = "";
        this.pais = "";
        this.unidad = "";
        this.lon = "";
    }

    cargarDatos() {
        $("ul").empty();
        $("h2").empty();
        $("#parrafo2").empty();
        jQuery.ajax({
            dataType: "xml",
            url: this.url,
            method: 'GET',
            success: function (info) {
              
                this.nombre = $('city', info).attr("name");
                this.pais = $('country', info).text();
                $("h2").append(this.nombre+", "+this.pais);

                this.nombre = $('weather', info).attr("icon");
                $("#parrafo2").append("<img alt='Imagen meteorologia' src=http://openweathermap.org/img/w/" + this.nombre + ".png>");

                this.nombre = $('coord',info).attr("lon");
                $("ul").append("<li>Longitud: " + this.nombre + "</li>")

                this.nombre = $('coord',info).attr("lat");
                $("ul").append("<li>Latitud: " + this.nombre + "</li>");

                this.nombre = $('temperature',info).attr("value");
                this.unidad = $('temperature',info).attr("unit");
                $("ul").append("<li>Temperatura: " + this.nombre + " " + this.unidad+"</li > ");

                this.nombre = $('humidity',info).attr("value");
                this.unidad = $('humidity',info).attr("unit");
                $("ul").append("<li>Humedad: " + this.nombre + " " + this.unidad + "</li > ");

                this.nombre = $('pressure', info).attr("value");
                this.unidad=$('pressure',info).attr("unit");
                $("ul").append("<li>Presion: " + this.nombre + " " + this.unidad + "</li > ");

                this.nombre = $('temperature', info).attr("min");
                this.unidad = $('temperature', info).attr("unit");
                $("ul").append("<li>Temperatura minima: " + this.nombre + " " + this.unidad + "</li > ");

                this.nombre = $('temperature', info).attr("max");
                this.unidad = $('temperature', info).attr("unit");
                $("ul").append("<li>Temperatura maxima: " + this.nombre + " " + this.unidad + "</li > ");

                this.nombre = $('speed', info).attr("value");
                this.unidad = $('speed', info).attr("unit");
                $("ul").append("<li>Viento: " + this.nombre + " " + this.unidad + "</li > ");

                var hora1 = new Date($('sun', info).attr("rise"));
                $("ul").append("<li>Amanecer: " + hora1.getHours() + ":" + hora1.getMinutes() + "</li > ");

                //var hora2 = new Date($('sun', info).attr("set"));
                var hora2 = new Date($('sun', info).attr("set"));
                $("ul").append("<li>Puesta de sol: " + hora2.getHours() + ":" + hora2.getMinutes() + "</li > ");

                //var hora2 = $('sun', info).attr("set");
                //var h2 = hora2.split("T");
                //$("ul").append("<li>Puesta de sol: " + h2[1]+  "</li > ");

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
