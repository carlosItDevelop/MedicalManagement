app.service("alergiaService", function($http) {
    return $http.get("/Alergia/GetAlergias");
});