
(function () {
    'use strict';
    angular.module('App').service('exameDeImagemService', ['$http', function ($http) {
        
        this.getImgImagem = function (idpaciente, idprontuario) {
            var response = $http({
                method: "GET",
                url: "/ExameDeImagem/GetExameDeImagemPorId/",
                params: {
                    idpc: idpaciente,
                    idpt: idprontuario
                },
                dataType: "json"
            });
            return response;
        }


    }]);

})();