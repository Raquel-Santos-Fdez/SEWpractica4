class Calculadora {

    constructor() {
        this.resultado = "";
        this.num = 0;
        this.contador = 0;
        this.memoria = "0";
    }

    botonNumero(numero) {
        this.resultado += numero;
        document.getElementById('resultado').value = this.resultado;
    }

    botonOperacion(operando) {
        
        
            this.resultado += operando;
            document.getElementById('resultado').value = this.resultado;
            this.contador++;
        

    }

    botonLimpiar() {
        this.resultado = "";
        document.getElementById('resultado').value = "";
        this.contador = 0;
    }

    operar() {
        document.getElementById('resultado').value = eval(this.resultado);
        this.contador = 0;
        this.resultado = document.getElementById('resultado').value;
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

class CalculadoraCientifica extends Calculadora {
    constructor(){
        super();
        this.n = 0;
        this.expo = false;
        this.cE = false;
        this.v1 = "";
        this.v2 = "";
    }

    factorial() {

        try {
            document.getElementById('resultado').value = this.factorialRecursivo(parseFloat(document.getElementById('resultado').value, 10));
            this.resultado = document.getElementById('resultado').value;
        }
        catch (error) {
            document.getElementById('resultado').value = this.factorialRecursivo(0);
        
        }
    }

    factorialRecursivo(numero) {
        if (numero == 0)
            return 1;
        return numero * this.factorialRecursivo(numero - 1);
    }

    pi() {
        this.resultado += Math.PI;
        document.getElementById('resultado').value = this.resultado;
    }

    modulo() {
        this.resultado += "%";
        document.getElementById('resultado').value = this.resultado;
    }

    exponenteE() {
        this.resultado = Math.pow(Math.E, document.getElementById('resultado').value);
        document.getElementById('resultado').value = this.resultado;
    }
    

    logaritmo() {
        this.resultado = Math.log(document.getElementById('resultado').value);
        document.getElementById('resultado').value = this.resultado;
    }

    exponente10() {
        this.resultado = Math.pow(10,document.getElementById('resultado').value);
        document.getElementById('resultado').value = this.resultado;
    }

    raiz() {
        this.resultado = Math.sqrt(document.getElementById('resultado').value);
        document.getElementById('resultado').value = this.resultado;
        
    }

    exponenteX2() {
        this.resultado = Math.pow(document.getElementById('resultado').value,2);
        document.getElementById('resultado').value = this.resultado;

    }

    exponenteXY() {
        this.expo = true;
        this.resultado += "^";
        document.getElementById('resultado').value = this.resultado;
    }

    seno() {
        this.resultado = Math.sin(document.getElementById('resultado').value, 2);
        document.getElementById('resultado').value = this.resultado;

    }
    coseno() {
        this.resultado = Math.cos(document.getElementById('resultado').value, 2);
        document.getElementById('resultado').value = this.resultado;

    }
    tangente() {
        this.resultado = Math.tan(document.getElementById('resultado').value, 2);
        document.getElementById('resultado').value = this.resultado;

    }

    /*
     * Math.sign()
    It returns 1 if the argument passed is a positive number.
    It returns - 1 if the argument passed is a negative number.
    It returns 0 if the argument passed is a positive zero.
    It returns - 0 if the argument passed is a negative zero.
    */
    masmenos() {
        this.valor = 0;
        this.resultado = document.getElementById('resultado').value;
        this.valor = parseFloat(this.resultado);
        var val = parseFloat(this.resultado);
        if (Math.sign(this.valor) == 1 || Math.sign(this.valor) == -1) {
            val = -val;
            document.getElementById('resultado').value = val.toString();
            this.resultado = val.toString();
        }
    }

    operar() {
        if (this.expo == true) {
            var arrayDeCadenas = this.resultado.split("^");
            for (var i = 0; i < arrayDeCadenas.length-1; i++) {
               var operando= Math.pow(parseFloat(arrayDeCadenas[i]), parseFloat(arrayDeCadenas[i + 1]));
                var eleres = document.getElementById('resultado');
                eleres.value = operando;
                this.resultado = operando;
            }
            this.expo = false;   
        }else
            super.operar();
    }

}

var calculadoraCientifica = new CalculadoraCientifica();
