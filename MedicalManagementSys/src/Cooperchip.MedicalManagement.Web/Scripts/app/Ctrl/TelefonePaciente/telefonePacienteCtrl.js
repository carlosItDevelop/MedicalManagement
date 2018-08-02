
(function () {
    'use strict';


    // Telefone de Pacientes

    // ---------------------------------------------------- //


    angular.module('App').controller("TelefonePacienteCtrl",
        ['$scope', '$filter', 'telefoneService',
            function ($scope, $filter, telefoneService) {

                $scope.titulo = "Telefones / Pacientes";
                $scope.telefonepacientes = [];
                $scope.tipotelefone = {};
                $scope.telefonepaciente = {};

                var idpaciente = 0;
                // Evento click simulado em outra controller, 
                // via javaScript, => ProntuarioCtrl.js.
                $("#idPaciente").on("click", function () {
                    idpaciente = $("#idPaciente").val();
                    $scope.telefonepaciente.PacienteGuid = idpaciente;
                    if (idpaciente) {
                        carregaTelefonePacientePorId(idpaciente);
                    } else {
                        idpaciente = 0;
                        carregaTelefonePacientePorId(idpaciente);
                    };
                });



                // Puxa apenas os dados/telefones do paciente em questão
                var carregaTelefonePacientePorId = function (idpaciente) {
                    let telPorIdData = telefoneService.getTelefonePorIdPaciente(idpaciente)
                        .then(function (resultado) {
                            $scope.telefonepacientes = resultado.data;
                        }, function () {
                            toastr['error']('Erro carregando Telefone de Paciente...', 'MedicalManagement-Sys');
                        });
                }


                $scope.adicionarTelefonePaciente = function (telefonepaciente) {
                    $scope.telefonepaciente.PacienteGuid = idpaciente;
                    let telPorIdData = telefoneService.addTelefoneParaPaciente(telefonepaciente)
                        .then(function (resultado) {
                            delete $scope.telefonepaciente;
                            //$scope.telefonepacienteForm.$setPristine();
                            toastr["success"]("Telefone adicionado com sucesso!", "Medical Management - Sys");
                            carregaTelefonePacientePorId(idpaciente);
                        }, function () {
                            toastr['error']('Erro carregando Telefone de Paciente...', 'MedicalManagement-Sys');
                        });
                }



                //$scope.adicionarTelefonePaciente = function (telefonepaciente) {
                //    $scope.telefonepaciente.PacienteGuid = idpaciente;
                //    $http.post("/TelefonePaciente/AddTelefonePaciente", telefonepaciente).success(function (data) {
                //        delete $scope.telefonepaciente;
                //        //$scope.telefonepacienteForm.$setPristine();
                //        toastr["success"]("Telefone adicionado com sucesso!", "Medical Management - Sys");
                //        carregaTelefonePacientePorId(idpaciente);
                //    }).error(function (data, status) {
                //        toastr["error"]("Erro ao Adicionar Telefone!", "Medical Management - Sys");
                //    });
                //};



                $scope.tipotelefones = [
                    { TipoTelefoneId: 1, "Descricao": "Residencial" },
                    { TipoTelefoneId: 2, "Descricao": "Comercial" },
                    { TipoTelefoneId: 3, "Descricao": "Celular" },
                    { TipoTelefoneId: 4, "Descricao": "Rádio" },
                    { TipoTelefoneId: 5, "Descricao": "Contato" },
                    { TipoTelefoneId: 6, "Descricao": "Outros" }
                ];


                $scope.apagarTelefonePacientes = function (telefonepacientes) {
                    $scope.telefonepacientes = telefonepacientes.filter(function (telefonepaciente) {
                        if (telefonepaciente.selecionado) {
                            $http.post("/TelefonePaciente/DelTelefonePaciente/" + telefonepaciente.TelefonePacienteId).success(function (data) {
                                toastr["warning"]("Telefone Excluída com sucesso!", "Medical Management - Sys");
                            }).error(function (data, status) {
                                toastr["error"]("Erro ao remover Telefone!", "Medical Management - Sys");
                            });
                        };
                        if (!telefonepaciente.selecionado) return telefonepaciente;
                    });
                };



                $scope.isTelefonePacienteSelecionado = function (telefonepacientes) {
                    return telefonepacientes.some(function (telefonepaciente) {
                        return telefonepaciente.selecionado;
                    });
                };



                $scope.ordenarPor = function (campo) {
                    $scope.criterioDeOrdenacao = campo;
                    $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
                };



                // Habilita o botão de adicionar apenas 
                // se o PacienteGuid estiver selecionado
                $scope.isIdPacienteInvalido = function () {
                    if (!idpaciente) {
                        return true;
                    } else {
                        return false;
                    }
                }


            }
        ]);
})();

