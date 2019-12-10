class Mapa {
    constructor() {
        this.apikey = "g9DXO54O6Y6oUYI0GbPlnZpF95CDHltS-AULt0ikC6UqyFM14";
        //this.url = "http://api.nytimes.com/svc/search/v2/articlesearch.json?&api-key=g9DXO54O6Y6oUYI0GbPlnZpF95CDHltS&q=Spain";
        this.url = "https://api.nytimes.com/svc/books/v3/lists/best-sellers/names.json?&api-key=g9DXO54O6Y6oUYI0GbPlnZpF95CDHltS";
        this.nombre = "";
        this.field = "";
    }

    execute() {
        jQuery.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function (info) {
                var articles = info.results;

                for (var i = 0; i < articles.length; i++) {
                    $("ul").append("<li>" + info.results[i].title + "</li>");
                }
            },   
            error: function () {
                alert("No se ha podido cargar la página")
            }
        });
    }
    
}

var m = new Mapa();
