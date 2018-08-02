
(function () {
    'use strict';
    angular.module('App').service("sinaisVitaisService", ['$http', function ($http) {



        this.getSinalVitalPorId = function (idpaciente, idprontuario) {
            let response = $http({
                url: '/Prontuario/GetSinaisVitaisPorId/',
                method: 'GET',
                params: {
                    idpc: idpaciente,
                    idpt: idprontuario
                }
            });
            return response;
        };



        ////Obter todos os novos prontuarios sem evolução/prescrição
        //this.getMakeNewProntuario = function () {
        //    var response = $http({
        //        method: "GET",
        //        url: "/Prontuario/MakeNewProntuario/",
        //        params: {},
        //        dataType: "json"
        //    });
        //    return response;
        //}







        ////CriarNovoProntuario de um paciente => este id é do paciente
        //this.srvcCriarNovoProntuarioPorId = function (id) {
        //    return $http.get("/api/v1/evm/CriarNovoProntuario?id=" + id);
        //};



        ////Obter os registros por id
        //this.srvcGetProntuarioPorId = function (id) {
        //    return $http.get("/api/v1/evm/ObterProntuarioPorId?id=" + id);
        //};


        //this.srvcObterProntuarios = function (id) {
        //    if (id) {
        //        return $http.get("/api/v1/evm/ObterTodosOsProntuarios?id=" + id);
        //    } else {
        //        return $http.get("/api/v1/evm/ObterTodosOsProntuarios");
        //    }
        //};


        //this.srvcObterProntuariosBase = function (id) {
        //    if (id) {
        //        return $http.get("/api/v1/evm/ObterTodosOsProntuariosBase?id=" + id);
        //    } else {
        //        return $http.get("/api/v1/evm/ObterTodosOsProntuariosBase");
        //    }
        //};



        ////Obter todos os novos prontuarios sem evolução/prescrição
        //this.getMakeNewProntuario = function () {
        //    var response = $http({
        //        method: "GET",
        //        url: "/Prontuario/MakeNewProntuario/",
        //        params: {},
        //        dataType: "json"
        //    });
        //    return response;
        //}



        //// Atualizar os registros
        //this.AtualizarProntuario = function (prontuario) {
        //    var response = $http({
        //        method: "put",
        //        url: "/api/v1/evm/AlterarProntuario",
        //        data: JSON.stringify(prontuario),
        //        dataType: "json"
        //    });
        //    return response;
        //};


        //// Adicionar registros
        //this.AdicionarProntuario = function (prontuario) {
        //    var response = $http({
        //        method: "post",
        //        url: "/api/v1/evm/AdicionarProntuario",
        //        data: JSON.stringify(prontuario),
        //        dataType: "json"
        //    });
        //    return response;
        //};

    }]);

})();