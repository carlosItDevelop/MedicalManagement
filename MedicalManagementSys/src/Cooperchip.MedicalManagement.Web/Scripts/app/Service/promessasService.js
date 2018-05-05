app.service("promessasService", function($http) {
    return $http.get("/Alergia/GetAlergias");
});