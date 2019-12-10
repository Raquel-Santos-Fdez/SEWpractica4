class Calculadora {

    constructor() {
        this.resultado = "";
        this.num = 0;
        this.contador = 0;
        this.memoria = "0";
        this.pila = new Array();
        this.cadPila = "";
    }

    botonNumero(numero) {
        this.resultado += numero;
        document.getElementById('resultado').value = this.resultado;

    }

    botonOperacion(operando) {

        if (this.pila.length == 0)
            document.getElementById('pila').value = "0";
        else if (this.pila.length == 1) {
            var elemento = this.pila.pop();
            var elementoFinal = elemento + operando + 0;
            var result = eval(elementoFinal);
            this.pila.push(result);
            this.cambiarValorPila();
        }
        else {
            var v1 = this.pila.pop();
            var v2 = this.pila.pop();
            var elementoFinal = v1 + operando + v2
            var result = eval(elementoFinal);
            this.pila.push(result);
            this.cambiarValorPila();
        }
    }

    cambiarValorPila() {
        this.cadPila = "";
        for (var i = 0; i < this.pila.length; i++)
            this.cadPila += " " + this.pila[i];
        document.getElementById('pila').value = this.cadPila;
    }

    botonLimpiar() {
        this.resultado = "";
        document.getElementById('resultado').value = "";
        this.contador = 0;
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

    apilar() {
        this.pila.push(document.getElementById('resultado').value);
        if (this.cadPila==="")
            this.cadPila += document.getElementById('resultado').value;
        else
            this.cadPila +="\t"+ document.getElementById('resultado').value;
        document.getElementById('pila').value = this.cadPila;
        this.resultado = "";
        document.getElementById('resultado').value = this.resultado;
    }

    seno() {
        if (this.pila.length != 0)
            this.resultado = Math.sin(this.pila.pop());
        else
            this.resultado = Math.sin(0);

        this.pila.push(this.resultado);
        this.cambiarValorPila();
    }

    coseno() {
        if (this.pila.length != 0)
            this.resultado = Math.cos(this.pila.pop());
        else
            this.resultado = Math.cos(0);
        
        this.pila.push(this.resultado);
        this.cambiarValorPila();
    }

    tangente() {
        if (this.pila.length != 0)
            this.resultado = Math.tan(this.pila.pop());
        else
            this.resultado = Math.tan(0);
        
        this.pila.push(this.resultado);
        this.cambiarValorPila();
    }

    pi() {
        this.resultado += Math.PI;
        document.getElementById('resultado').value = this.resultado;
    }

    logaritmo() {
        if (this.pila.length != 0)
            this.resultado = Math.log(this.pila.pop());
        else
            this.resultado = Math.log(0);
        this.pila.push(this.resultado);
        this.cambiarValorPila();
    }

    factorial() {

        try {
            this.pila.push(this.factorialRecursivo(parseFloat(document.getElementById('resultado').value, 10)));
            this.resultado = document.getElementById('resultado').value;
        }
        catch (error) {
            this.pila.push(this.factorialRecursivo(0));

        }
    }

    factorialRecursivo(numero) {
        if (numero == 0)
            return 1;
        return numero * this.factorialRecursivo(numero - 1);
    }

    exponente10() {
        this.resultado = Math.pow(10, this.pila.pop());
        this.pila.push(this.resultado);
        this.cambiarValorPila();
    }

    raiz() {
        this.resultado = Math.sqrt(this.pila.pop());
        this.pila.push(this.resultado);
        this.cambiarValorPila();

    }

    exponenteX2() {
        
        this.resultado = Math.pow(this.pila.pop(), 2);
        this.pila.push(this.resultado);
        this.cambiarValorPila();

    }
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

    exponenteXY() {
        var v1 = this.pila.pop();
        var v2 = this.pila.pop();
        var result = Math.pow(v1, v2);
        this.pila.push(result);
        this.cambiarValorPila();
    }

    exponenteE() {
        this.resultado = Math.pow(Math.E, this.pila.pop());
        this.pila.push(this.resultado);
        this.cambiarValorPila();
    }

    borrarTodo() {
        this.botonLimpiar();
        this.pila = new Array();
        this.cadPila = "";
        document.getElementById('pila').value = "";
    }
}

var calculadoraCientifica = new Calculadora();
