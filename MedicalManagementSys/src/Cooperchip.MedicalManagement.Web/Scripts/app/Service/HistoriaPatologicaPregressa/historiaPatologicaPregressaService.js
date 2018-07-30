


(function () {
    'use strict';
    angular.module('App').service("historiaPatologicaPregressaService", ['$http', function ($http) {


        //getHppregressa
        this.getHppregressa = function () {
            var response = $http({
                method: "GET",
                url: "/HistoriaPatologicaPregressa/getHPPregressa/",
                params: {},
                dataType: "json"
            });
            return response;
        }


    }]);

})();