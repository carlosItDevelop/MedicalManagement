
(function () {
    'use strict';
    angular.module('App').service("telefoneService", ['$http', function ($http) {


        // Recupera os telefones do paciente selecionado
        this.getTelefonePorIdPaciente = function (id) {
            //return $http.get("/api/v1/evm/GetTelefonePacientePorId?id=" + id);
            return $http.get("/TelefonePaciente/GetTelefonePacientePorId?id=" + id);
        };


        // Adicionar registros
        this.addTelefoneParaPaciente = function (telefonePaciente) {
            var response = $http({
                method: "post",
                //url: "/api/v1/evm/AdicionarProntuario",
                url: "/TelefonePaciente/AddTelefonePaciente",
                data: JSON.stringify(telefonePaciente),
                dataType: "json"
            });
            return response;
        };


    }]);

})();