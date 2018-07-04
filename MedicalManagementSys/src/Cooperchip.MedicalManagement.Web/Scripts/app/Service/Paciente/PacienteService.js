
(function () {
    'use strict';


    // Service Paciente
    app.service("pacienteService", ['$http', function ($http) {


        // Criar um novo Paciente;
        this.novoPaciente = function () {
            return $http.get("/api/v1/evm/CriarNovopaciente");
        };

        //Obter todos os regitros
        this.srvcObterPacientes = function () {
            return $http.get("/api/v1/evm/ApiObeterTodosOsPacientes");
        };



        //Obter todos os novos prontuarios sem evolução/prescrição
        this.getMakeNewProntuario = function () {
            var response = $http({
                method: "GET",
                url: "/Prontuario/MakeNewProntuario/",
                params: {},
                dataType: "json"
            });
            return response;
        }


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


        //getComplicacoes
        this.getComplicacoes = function () {
            var response = $http({
                method: "GET",
                url: "/Complicacao/getComplicacao/",
                params: {},
                dataType: "json"
            });
            return response;
        }


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



        //Obter regitros para a RightSidebar
        this.srvcObterPacientesRightSidebar = function () {
            return $http.get("/api/v1/evm/ApiObeterPacientesRightSidebar");
        };



        //Obter os registros por id
        this.srvcGetPacientePorId = function (id) {
            return $http.get("/api/v1/evm/ApiObterPacientePorId?id=" + id);
        };

        // Atualizar os registros
        this.AtualizarPaciente = function (paciente) {
            var response = $http({
                method: "put",
                url: "/api/v1/evm/AlterarPaciente",
                data: JSON.stringify(paciente),
                dataType: "json"
            });
            return response;
        };

        // Adicionar registros
        this.AdicionarPaciente = function (paciente) {
            var response = $http({
                method: "post",
                url: "/api/v1/evm/AdicionarUmPaciente",
                data: JSON.stringify(paciente),
                dataType: "json"
            });
            return response;
        };

        // Excluir Registro
        this.Excluir = function (id) {
            var response = $http({
                method: "delete",
                url: "/api/v1/evm/ExcluirPaciente?id=" + id
            });
            //console.log(response);
            return response;
        };

    }]);

})();