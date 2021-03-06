﻿// ---------------------------------------------------- //
(function () {

    'use strict';

    angular.module('App').controller("exameDeImagemCtrl",
        ['$http', '$scope', '$filter', 'exameDescricaoService', 'pacienteService', 'exameDeImagemService',
            function ($http, $scope, $filter, exameDescricaoService, pacienteService, exameDeImagemService) {

                $scope.titulo = "Exame de Imagem";
                $scope.examesdescricoes = [];
                $scope.examedeimagens = [];
                $scope.examedeimagem = {};

                var idprontuario;
                var idpaciente;
                // Evento click simulado em outra controller,
                // via javaScript, => ProntuarioCtrl.js.
                $("#idPaciente").click(function () {
                    idpaciente = $("#idPaciente").val();
                    idprontuario = $("#ProntuarioId").val();
                    if (idpaciente && idprontuario) {
                        $scope.examedeimagem.PacienteGuid = idpaciente;
                        $scope.examedeimagem.ProntuarioGuid = idprontuario;
                        carregaExameDeImagemPorId(idpaciente, idprontuario);
                    };
                });



                let carregaExameDeImagemPorId = function (idpaciente, idprontuario) {
                    console.log("Id Paciente: " + idpaciente);
                    console.log("Id Prontuario: " + idprontuario);

                    let eximgData = exameDeImagemService.getImgImagem(idpaciente, idprontuario)
                        .then(function (resultado) {

                            console.log("Exame de Imagens - Dados: " + resultado.data);
                            $scope.examedeimagens = resultado.data;
                            console.log("Exame de Imagens - Scope: " + $scope.examedeimagens);

                        }, function () {
                            toastr["error"]("Erro ao carregar Exame de Imagem!", "MedicalManagement-Sys");
                        });
                };


                $scope.adicionarExameDeImagem = function (examedeimagem) {
                    examedeimagem.PacienteGuid = idpaciente;
                    examedeimagem.ProntuarioGuid = idprontuario;
                    $http.post("/ExameDeImagem/AddExameDeImagem", examedeimagem).success(function (data) {
                        delete $scope.examedeimagem;
                        $scope.exameDeImagemForm.$setPristine();
                        carregaExameDeImagemPorId(idpaciente, idprontuario);
                        toastr["success"]("Exame de Imagem Adicionada com sucesso!", "Medical Management - Sys");
                    }).error(function (data, status) {
                        $scope.message = "Aconteceu um erro: " + data;
                    });
                };


                $scope.alterarExameDeImagem = function (examedeimagem) {
                    examedeimagem.data = new Date();
                    $http.post("/ExameDeImagem/UdtExameDeImagem/", examedeimagem.ExameDeImagemId).success(function (data) {

                    }).error(function (data, status) {
                        $scope.message = "Aconteceu um erro: " + data;
                    });
                };



                $scope.apagarExameDeImagens = function alert_it(examedeimagens) {
                    swal({
                        title: "Tem certeza que deseja excluir este registro?",
                        text: "Após a exclusão não será possível recuperá-lo!",
                        type: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#DD6B55",
                        confirmButtonText: "Sim, Pode excluir!",
                        closeOnConfirm: false
                    },
                        function () {
                            DeletarExameDeImagens(examedeimagens)
                            swal("EXCLUÍDO!", "O registro foi deletado com sucesso.", "success");
                        });
                }

                var DeletarExameDeImagens = function (examedeimagens) {
                    $scope.examedeimagens = examedeimagens.filter(function (examedeimagem) {
                        if (examedeimagem.selecionado) {
                            $http.post("/ExameDeImagem/DelExameDeImagem/" + examedeimagem.ExameDeImagemId).success(function (data) {
                                toastr["warning"]("Exame de Imagem Excluída com sucesso!", "Medical Management - Sys");
                            }).error(function (data, status) {
                                $scope.message = "Aconteceu um erro: " + data;
                                toastr["error"]("Erro ao remover registro!", "Medical Management - Sys");
                            });
                        };
                        if (!examedeimagem.selecionado) return examedeimagem;
                    });
                };


                function obterTodosOsExameDescricaos() {
                    var examedescricaosData = exameDescricaoService.ObterDescricoes();
                    examedescricaosData.then(function (examedescricao) {
                        $scope.examesdescricaos = examedescricao.data;
                    }, function () {
                        toastr["error"]("Erro ao obter examedescricaos", "MedicalManagement-Sys");
                    }
                    );
                };
                obterTodosOsExameDescricaos();

                /*
                Retirei o carregamento de pacientes daqui
                */

                $scope.isExameDeImagemSelecionado = function (examedeimagens) {
                    return examedeimagens.some(function (examedeimagem) {
                        return examedeimagem.selecionado;
                    });
                };

                $scope.ordenarPor = function (campo) {
                    $scope.criterioDeOrdenacao = campo;
                    $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
                };

            }]);
})();