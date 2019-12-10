class Acoger {

    constructor() {
        this.contador = 0;
    }

    mostrarPerros() {
        $("#parrafoPerros").show();
        $("#p1").show();
    }

    ocultarPerros() {
        $("#parrafoPerros").hide();
        $("#p1").hide();
    }

    modificar() {
        $("h2").text("Gatos");
        $("#parrafoPerros").text("Hay muchos gatitos en acogida deseando encontrar un hogar");
        $("#pImagen").html("<img alt = 'Gato en adopcion' src = 'gato.jpg' />" );

    }

    add() {
        $("#parrafoAdd").append("<img alt='Perro en adopcion2' src='perro2.jpg' />");
    
    }

    remove() {
        $("#parrafoAdd").remove();
    }

    sumar() {  
        $("#tablaPerros").each(function () {

            $("#tbody").find("tr").eq("3").each(function () {

                var elemento = $(this).text();
                var cadArray = elemento.split(" ");
                this.contador += parseInt(cadArray[1]);
            });
           
        });
        $("#parrafoSuma").append(this.contador);

    }
}

var acog = new Acoger();