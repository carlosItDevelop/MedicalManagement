
(function () {
    'use strict';
    app.service("alergiaService", ['$http', function ($http) {

        //return $http.get("/Alergia/GetAlergias");


        ///Alergia/GetAlergia
        this.getAlergias = function () {
            var response = $http({
                method: "GET",
                url: "/Alergia/GetAlergia/",
                params: {},
                dataType: "json"
            });
            return response;
        }        


    }]);

})();