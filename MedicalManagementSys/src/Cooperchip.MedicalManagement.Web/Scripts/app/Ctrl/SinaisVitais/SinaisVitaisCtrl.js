
(function () {
    'use strict';

    angular.module('App').controller("SinaisVitaisCtrl",
        ['$scope', '$filter', 'pacienteService', 'sinaisVitaisService',
            function ($scope, $filter, pacienteService, sinaisVitaisService) {

                $scope.titulo = "Sinais Vitais nas Últimas 24 horas";

                $scope.sinaisvitais = [];
                $scope.pacientes = [];
                $scope.paciente = {};

                $scope.sinaisvitaisHoras = [
                    { Hora: "07:00" }, { Hora: "08:00" }, { Hora: "09:00" }, { Hora: "10:00" }, { Hora: "11:00" }, { Hora: "12:00" },
                    { Hora: "13:00" }, { Hora: "14:00" }, { Hora: "15:00" }, { Hora: "16:00" }, { Hora: "17:00" }, { Hora: "18:00" },
                    { Hora: "19:00" }, { Hora: "20:00" }, { Hora: "21:00" }, { Hora: "22:00" }, { Hora: "23:00" }, { Hora: "00:00" },
                    { Hora: "01:00" }, { Hora: "02:00" }, { Hora: "03:00" }, { Hora: "04:00" }, { Hora: "05:00" }, { Hora: "06:00" }
                ];

                var idprontuario;
                var idpaciente;
                // Evento click simulado em outra controller,
                // via javaScript, => ProntuarioCtrl.js.
                $("#idPaciente").click(function () {
                    idpaciente = $("#idPaciente").val();
                    idprontuario = $("#ProntuarioId").val();
                    if (idpaciente && idprontuario) {
                        carregaSinalVitalPorId(idpaciente, idprontuario);
                    };
                });


                let carregaSinalVitalPorId = function (idpaciente, idprontuario) {
                    let sinaisVitaisData = sinaisVitaisService.getSinalVitalPorId(idpaciente, idprontuario)
                        .then(function (resultado) {
                            $scope.sinaisvitais = resultado.data;
                        }, function (data, status) {
                            toastr['error']('Erro carregando Sinais Vitais...', 'MedicalManagement-Sys');
                        });
                };



                $scope.adicionarSinaisVitais = function (sinalvital) {
                    //debugger;
                    sinalvital.PacienteGuid = idpaciente;
                    sinalvital.ProntuarioGuid = idprontuario;
                    $http.post("/Prontuario/AddSinaisVitais", sinalvital).success(function (data) {
                        delete $scope.sinalvital;
                        $scope.sinaisVitaisForm.$setPristine();
                        carregaSinalVitalPorId(idpaciente, idprontuario);
                        toastr["success"]("Sinais Vitais Adicionada com sucesso!", "Medical Management - Sys");
                    }).error(function (data, status) {
                        toastr["error"]("Erro ao Adicionar Sinais Vitais!", "Medical Management - Sys");
                    });
                };




                $scope.alterarSinaisVitais = function (sinalvital) {
                    $http.post("/Prontuario/UdtSinaisVitais/", sinalvital.SinaisVitaisId).success(function (data) {
                        //    delete $scope.sinalvital;
                        //    $scope.sinaisVitaisForm.$setPristine();
                        //    carregaSinaisVitais();
                    }).error(function (data, status) {
                        toastr["error"]("Erro ao Atualizar Sinais Vitais!", "Medical Management - Sys");
                    });
                };


                $scope.apagarSinaisVitais = function (sinaisvitais) {
                    $scope.sinaisvitais = sinaisvitais.filter(function (sinalvital) {
                        if (sinalvital.selecionado) {
                            $http.post("/Prontuario/DelSinaisVitais/" + sinalvital.SinaisVitaisId).success(function (data) {
                                toastr["warning"]("Sinais Vitais Excluídos com sucesso!", "Medical Management - Sys");
                            }).error(function (data, status) {
                                toastr["error"]("Erro ao remover Sinais Vitais!", "Medical Management - Sys");
                            });
                        };
                        if (!sinalvital.selecionado) return sinalvital;
                    });
                };

                $scope.isSinaisVitaisSelecionado = function (sinaisvitais) {
                    return sinaisvitais.some(function (sinalvital) {
                        return sinalvital.selecionado;
                    });
                };

                $scope.ordenarPor = function (campo) {
                    $scope.criterioDeOrdenacao = campo;
                    $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
                };


                // Habilita o botão de adicionar apenas 
                // se o PacienteGuid estiver selecionado
                $scope.isIdPacienteInvalido = function () {
                    if ((idpaciente === 0) || (idpaciente === undefined)) {
                        //console.log(idpaciente);
                        return true;
                    } else {
                        return false;
                    }
                }


            }
        ]);
}());