


// ----/  Tipo de Causa Service ---

app.service("causaprecaucaoService", function ($http) {

    //Obter todos os regitros
    this.ObterCausasPrecaucoes = function (id) {
        return $http.get("/api/v1/evm/ObterCausasPrecaucoes?id="+id);
    };

});