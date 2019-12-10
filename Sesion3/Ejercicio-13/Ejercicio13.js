class CargarArchivos {
    constructor() {

    }

    cargar(files) {
        var elemento = document.getElementById('lArchivos');
        var datos = "";

        datos += "<li>Nombre: " + files[0].name + "</li>";
        datos += "<li>Tama&ntilde;o: " + files[0].size + " bytes</li>";
        datos += "<li>Tipo de archivo: " + files[0].type + "</li>";

        elemento.innerHTML = datos;

        var elemento2 = document.getElementById('parrafo1');
        var fReader = new FileReader();
        fReader.onload = function (f) {
                
            elemento2.innerHTML = "Contenido: " + fReader.result ;
        }
        fReader.readAsText(files[0]);
        
    }
}

var c = new CargarArchivos();