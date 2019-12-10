class Crucigrama {

    constructor() {
        this.solucion = ['M', 'A', 'D', 'R', 'I', 'D', 'I', 'O', 'S', 'C', 'A', 'R', 'A', 'R'];
        this.comp = true;
    }

    comprobar() {
        var cadena = "";
        var d=""
        for (var i = 0; i < 14; i++) {
            cadena += i;
            d = document.getElementById(cadena).value

            if (this.solucion[i] != d.toUpperCase())
                this.comp = false;
            
            cadena = "";
        }
        if (this.comp == true)
            alert("¡ENHORABUENA! Has completado el crucigrama");
        else {
            alert("Crucigrama incorreto");
            this.comp = true;
        }
    }

    resolver() {
        var cadena = "";
        for (var i = 0; i < 14; i++) {
            cadena += i;
            document.getElementById(cadena).value = this.solucion[i];
            cadena = "";
        }
        
    }
  
}

var c = new Crucigrama();
