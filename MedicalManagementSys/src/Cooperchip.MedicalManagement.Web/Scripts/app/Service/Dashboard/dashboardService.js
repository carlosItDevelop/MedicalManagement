


(function () {
    'use strict';
    angular.module('App').service("dashboardService", ['$http', function ($http) {

        //Obter todos os regitros
        this.getEstadoPaciente = function () {
            //return $http.get("/api/v1/evm/xpto-melhor-com-essa-abordagem");
            return $http.get("/Home/GetEstadoPaciente");
        };


    }]);

})();