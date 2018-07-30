

(function () {
    'use strict';
    // ---/ Dieta

    

    angular.module('App').controller('dietaCtrl', dietaCtrl);

    dietaCtrl.$inject = ['dietaService'];

    function dietaCtrl(dietaService) {
        var vm = this;


        vm.divdieta = false;
        vm.titulo = "Lista de Dietas";


        function obterTodosAsDietas() {
            let dietasData = dietaService.ObterTodas()
                .then(function (dieta) {
                    vm.dietas = dieta.data;
                    vm.Acao = "";
                }, function () {
                    toastr["error"]("Erro ao obter dietas", "MedicalManagement-Sys");
                }
                );
        };


        // obter por id
        // Habilita DIV para Edição de registros
        vm.obterPorId = function (dieta) {
            let dietaData = dietaService.GetDietaPorId(dieta.DietaId)
                .then(function (dieta) {
                    vm.dieta = dieta.data;

                    vm.Acao = "Atualizar";
                    vm.divdieta = true;
                }, function () {
                    toastr["error"]("Erro ao obter dieta por id!", "MedicalManagement-Sys");
                });
        };



        // Habilita DIV para Adição de registros
        vm.incluirDietaDiv = function () {
            vm.dieta = {};
            //vm.dietaForm.$setPristine();
            vm.Acao = "Adicionar";
            vm.divdieta = true;
        };


        vm.ExcluirDieta = function alert_it(dieta) {
            swal({
                title: "Tem certeza que deseja excluir este registro?",
                text: "Após a exclusão não será possível recuperá-lo!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Sim, Pode excluir!",
                closeOnConfirm: false
            }, function () {
                apagarRegistro(dieta)
                swal("EXCLUÍDO!", "O registro foi deletado com sucesso.", "success");
            });
        }


        var apagarRegistro = function (dieta) {
            let dietaData = dietaService.Excluir(dieta.DietaId)
                .then(function (data) {
                    if (data.status === 200) {
                        toastr["warning"]("Dieta excluído com sucesso!", "MedicalManagement-Sys");
                        obterTodosAsDietas();
                    }
                }, function () {
                    toastr["error"]("Erro ao excluir dieta!", "MedicalManagement-Sys");
                });
        };





        vm.AdicionarEditarDieta = function () {
            let _dieta = {
                Descricao: vm.dieta.Descricao
            };
            var valorAcao = vm.Acao;
            if (valorAcao === "Atualizar") {
                _dieta.DietaId = vm.dieta.DietaId;
                let dietaData = dietaService.AtualizarDieta(_dieta)
                    .then(function (data) {
                        if (data.status === 200) {
                            toastr["success"]("Dieta alterado com sucesso!", "MedicalManagement-Sys");
                            obterTodosAsDietas();
                            vm.divdieta = false;
                        }
                    }, function () {
                        toastr["error"]("Erro ao editar dieta!", "MedicalManagement-Sys");
                    });
            } else if (valorAcao === "Adicionar") {
                let dietaData = dietaService.AdicionarDieta(_dieta)
                    .then(function (data) {
                        if (data.status === 200) {
                            toastr["success"]("Dieta Adicionado com sucesso!", "MedicalManagement-Sys");
                            obterTodosAsDietas();
                            vm.divdieta = false;
                        }
                    }, function () {
                        toastr["error"]("Erro ao Adicionar dieta!", "MedicalManagement-Sys");
                    });
            }
        };


        vm.cancelaEdicao = function () {
            vm.Acao = "";
            vm.divdieta = false;
            //vm.dietaForm.$setPristine();
        };

        //  ----/ Otimizar, tornando o mais genérico possível e tentar numa única função --- //
        vm.inibeBtnAtualizar = function () {
            if ((vm.Acao === "Atualizar") || (vm.Acao === "Adicionar")) {
                return true;
            }
            return false;
        };

        vm.inibeBtnAdicionar = function () {
            if ((vm.Acao === "Atualizar") || (vm.Acao === "Adicionar")) {
                return true;
            }
            return false;
        };


        vm.inibeBtnExcluir = function () {
            if ((vm.Acao === "Atualizar") || (vm.Acao === "Adicionar")) {
                return true;
            }
            return false;
        };
        //  ----/ Otimizar, tornando o mais genérico possível e tentar numa única função --- //




        vm.ordenarPor = function (campo) {
            vm.criterioDeOrdenacao = campo;
            vm.direcaoDaOrdenacao = !vm.direcaoDaOrdenacao;
        };



        obterTodosAsDietas();


    }

}());