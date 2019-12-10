class CambioMoneda {
    constructor() {
        this.apikey = "df7c55eecec421f713509ce1a4a297ad";
        this.url = "";
        this.nombre = "";
        this.field = "";
    }
    
    cargar(moneda) {
        this.url = "http://data.fixer.io/api/latest?access_key=" + this.apikey + "&symbols=" + moneda;
        if (moneda == "USD")
            this.cargarDatosUSD();
        else if (moneda == "GBP")
            this.cargarDatosGBP();
        else if (moneda == "PLN")
            this.cargarDatosPLN();
        else if (moneda == "JPY")
            this.cargarDatosJPY();
        else
            this.cargarDatosCHF()

    }

    cargarDatosUSD() {
        jQuery.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function (info) {

                this.nombre = info.rates.USD; 
                $("#resultadoUSD").val(this.nombre);
                
            },   
            error: function () {
                alert("No se ha podido cargar la página")
            }
        });
    }

    cargarDatosGBP() {
        jQuery.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function (info) {

                this.nombre = info.rates.GBP;
                $("#resultadoGBP").val(this.nombre);

            },
            error: function () {
                alert("No se ha podido cargar la página")
            }
        });
    }

    cargarDatosPLN() {
        jQuery.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function (info) {
                this.nombre = info.rates.PLN;
                $("#resultadoPLN").val(this.nombre);

            },
            error: function () {
                alert("No se ha podido cargar la página")
            }
        });
    }

    cargarDatosJPY() {
        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function (info) {
                this.nombre = info.rates.JPY;
                $("#resultadoJPY").val(this.nombre);

            },
            error: function () {
                alert("No se ha podido cargar la página")
            }
        });
    }

    cargarDatosCHF() {
        jQuery.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function (info) {
                this.nombre = info.rates.CHF;
                $("#resultadoCHF").val(this.nombre);

            },
            error: function () {
                alert("No se ha podido cargar la página")
            }
        });
    }
    
}

var d = new CambioMoneda();
