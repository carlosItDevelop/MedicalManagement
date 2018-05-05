

// ----/  Tipo de Precaucao Service ---

app.service("tipodeprecaucaoService", function ($http) {

    //Obter todos os regitros
    this.ObterTiposPrecaucoes = function () {
        return $http.get("/api/v1/evm/ObterTiposDePrecaucoes");
    };

});