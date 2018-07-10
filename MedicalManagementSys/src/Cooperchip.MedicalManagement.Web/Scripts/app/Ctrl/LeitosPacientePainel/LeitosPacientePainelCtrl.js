
(function () {

    'use strict';

    app.controller('LeitosPacientePainelCtrl', LeitosPacientePainelCtrl);
    LeitosPacientePainelCtrl.$inject = ['pacienteService', '$uibModal', '$log', '$filter'];

    function LeitosPacientePainelCtrl(pacienteService, $uibModal, $log, $filter) {

        var vm = this;

        vm.titulo = "Leitos / Pacientes";
        vm.pacientes = [];
        vm.leitos = [];
        vm.paciente = {};
        vm.totalReg = 0;


        function ctrlGetPaciente() {
            let pacientesData = pacienteService.srvcObterPacientesRightSidebar()
                .then(function (paciente) {
                    vm.pacientes = paciente.data;
                    vm.totalReg = paciente.data.length;
                    vm.Acao = "";
                    //toastr["success"]("Pacientes carregados com sucesso!", "MedicalManagement-Sys");
                }, function () {
                    toastr["error"]("Erro ao obter pacientes", "MedicalManagement-Sys");
                }
                );
        };

        // Esta função só deve ser chamada quando houver atualização nos dados de Paciente.
        // Usar uma abordagem parecida com "ouvir" um evento para recarregar. Pode ser com
        // AngularJS, através da abordagem de $rootScope, #broadCast e #on ou C#, c/ Delegate.
        ctrlGetPaciente();

        vm.pacienteselecinado = [];
        vm.animationsEnabled = true;

        vm.openPacienteLeito = function (size, id) {

            let newProntuarioData = pacienteService.getPacienteMenuRigthModal(id)
                .then(function (pacienteModal) {

                    vm.pacienteselecinado = pacienteModal.data;

                    var modalInstance = $uibModal.open({
                        animation: vm.animationsEnabled,
                        templateUrl: 'ModalPacientesLeitos.html',
                        controller: 'ModalPacientesLeitosCtrl',
                        size: size,
                        resolve: {
                            pac: function () {
                                return vm.pacienteselecinado;
                            }
                        }
                    });

                    modalInstance.result.then(function () {
                    }, function () {
                    });

                },function (data, status) {
                    toastr["error"]("Erro na busca de Pacientes!", "MedicalManagement-Sys");
                });

        };

        vm.getCorEstado = function (estado) {
            let cor = "";
            switch (estado) {
                case 1:
                    cor = "status status-online";
                    break;
                case 2:
                    cor = "status status-obs";
                    break;
                case 3:
                    cor = "status status-offline";
                    break;
                case 4:
                    cor = "status status-nostatus";
                    break;
                default:
                    cor = "status status-nostatus";
                    break;
            }
            return cor;
        };

        vm.getNumLeitoFormatado = function (id) {

            let idformatado = id.toString();

            if (id < 10) {
                return idformatado = "00" + id;
            }
            else if (id < 100) {
                return idformatado = "0" + id;
            }
            else {
                return idformatado;
            }
        };

    };

})();