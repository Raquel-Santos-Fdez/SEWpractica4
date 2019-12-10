class Calculadora {

    constructor() {
        this.resultado = "";
        this.num = 0;
        this.contador = 0;
        this.memoria = "0";
    }
    //"2+Math.pow(2,2)"
    //Para potencias NO usar **
    //NO usar Math.eval() SIEMPRE eval()

    botonNumero(numero) {
        this.resultado += numero;
        document.getElementById('resultado').value = this.resultado;
    }

    botonOperacion(operando) {
        
        if (this.contador < 1) {
            this.resultado += operando;
            document.getElementById('resultado').value = this.resultado;
            this.contador++;
        }else
            this.operar();

    }

    botonLimpiar() {
        this.resultado = "";
        document.getElementById('resultado').value = "";
        this.contador = 0;
    }

    operar() {
        document.getElementById('resultado').value = eval(this.resultado);
        this.contador = 0;
        this.resultado = document.getElementById('resultado').value
    }

    mostrarMemoria() {
        document.getElementById('resultado').value = eval(this.memoria);
        //document.getElementById('resultado').value = this.memoria;
    }

    sumaMemoria() {
        this.memoria += "+";
        this.memoria += document.getElementById('resultado').value;
        
    }

    restaMemoria() {
        this.memoria += "-";
        this.memoria += document.getElementById('resultado').value;
    }

}
var calculadora = new Calculadora();