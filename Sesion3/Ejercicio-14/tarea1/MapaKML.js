class MapaKML {
    constructor() {
        this.apikey = "AIzaSyCrmEJuUDuT97pIVb-AULt0ikC6UqyFM14";
        this.url = "https://maps.googleapis.com/maps/api/js?key=" + this.apikey;
        
    }

    
    verMapa() {
        
        var mapOptions = {
            zoom: 12,
            center: { lat: 43.3630808, lng: -5.8499189 },
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        
        var mapa = new google.maps.Map(document.getElementById('mapa'), mapOptions);

        var ctaLayer = new google.maps.KmlLayer('https://uo266047.github.io/SEWpractica4/rutas.kml');
           ctaLayer.setMap(mapa);  
    }
  
}

var m = new MapaKML();