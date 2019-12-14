(function () {
    'use strict';

    angular.module('App').service("medicamentoPosologiaService", ['$http', function($http) {


        this.GetMedicamentoPosologiaService = function () {
            return $http.get("/MedicamentoPosologia/GetMedicamentosPosologia");
        };


    }]);
})();