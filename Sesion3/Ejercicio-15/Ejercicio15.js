class Ejercicio15 {
    constructor() {
        this.apikey = "AIzaSyCrmEJuUDuT97pIVb-AULt0ikC6UqyFM14";
        this.url = "https://maps.googleapis.com/maps/api/js?key=" + this.apikey ;
        this.valor = "";
        this.aLatitud = new Array();
        this.aLongitud = new Array();
    }

    mostrarTitulo() {
        var canvas = document.getElementById('canvas');
        var canvas1 = canvas.getContext('2d');
        canvas1.font = 'italic bold 60px sans-serif';
        canvas1.strokeStyle = "rgba(0, 0, 0)";
        canvas1.strokeText("Ejercicio 15", 100, 75);
    }

    cargar(files) {

        var elemento2 = document.getElementById('cFile');
        var fReader = new FileReader();
        fReader.onload = function () {
            var arrayElem1 = fReader.result.split("\n");
            var datos = "";
            for (var i = 0; i < arrayElem1.length; i++) {
                datos += "<li>" + arrayElem1[i] + "</li>";
                var arrayElem2 = arrayElem1[i].split(",");
                this.aLatitud.push(arrayElem2[0]);
                this.aLongitud.push(arrayElem2[1]);
            }

            this.valor = fReader.result;
            elemento2.innerHTML = datos;
        }.bind(this);
        fReader.readAsText(files[0]);

    }

    verMapa() {
        
        var mapa = new google.maps.Map(document.getElementById('mapa'), { zoom: 8, center: { lat: 53.292279, lng: -6.1360079 } });

        var lon = this.aLatitud.length;
        for (var i = 0; i < lon; i++) {
            var latitud = parseFloat(this.aLatitud.pop());
            var longitud = parseFloat(this.aLongitud.pop());
            new google.maps.Marker({ position: { lat: latitud, lng: longitud }, map: mapa });
        }
        
    }

   
}

var e = new Ejercicio15();