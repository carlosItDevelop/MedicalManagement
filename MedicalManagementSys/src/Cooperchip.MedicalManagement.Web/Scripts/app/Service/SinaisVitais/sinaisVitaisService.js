
(function () {
    'use strict';
    angular.module('App').service("sinaisVitaisService", ['$http', function ($http) {

        this.getSinalVitalPorId = function (idpaciente, idprontuario) {
            let response = $http({
                url: '/api/v1/evm/ObterSVitaisPorId/',
                method: 'GET',
                params: {
                    idpc: idpaciente,
                    idpt: idprontuario
                }
            });
            return response;
        };

    }]);

})();