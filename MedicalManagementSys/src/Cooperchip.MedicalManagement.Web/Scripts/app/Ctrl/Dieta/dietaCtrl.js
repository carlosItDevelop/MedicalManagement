

(function () {
    'use strict';
    // ---/ Dieta

    app.controller("dietaCtrl",
        ['dietaService',
            function (dietaService) {
                var vm = this;


                vm.divdieta = false;
                vm.titulo = "Lista de Dietas";


                function obterTodosAsDietas() {
                    var dietasData = dietaService.ObterTodas();
                    dietasData.then(function (dieta) {
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
                    var dietaData = dietaService.GetDietaPorId(dieta.DietaId);
                    dietaData.then(function (dieta) {
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
                    },
                        function () {
                            apagarRegistro(dieta)
                            swal("EXCLUÍDO!", "O registro foi deletado com sucesso.", "success");
                        });
                }


                var apagarRegistro = function (dieta) {
                    var dietaData = dietaService.Excluir(dieta.DietaId);
                    dietaData.then(function (data) {
                        if (data.status === 200) {
                            toastr["warning"]("Dieta excluído com sucesso!", "MedicalManagement-Sys");
                            obterTodosAsDietas();
                        }
                    }, function () {
                        toastr["error"]("Erro ao excluir dieta!", "MedicalManagement-Sys");
                    });
                };





                vm.AdicionarEditarDieta = function () {
                    var dietaData = null;
                    var _dieta = {
                        Descricao: vm.dieta.Descricao
                    };
                    var valorAcao = vm.Acao;
                    if (valorAcao === "Atualizar") {
                        _dieta.DietaId = vm.dieta.DietaId;
                        dietaData = dietaService.AtualizarDieta(_dieta);
                        dietaData.then(function (data) {
                            if (data.status === 200) {
                                toastr["success"]("Dieta alterado com sucesso!", "MedicalManagement-Sys");
                                obterTodosAsDietas();
                                vm.divdieta = false;
                            }
                        }, function () {
                            toastr["error"]("Erro ao editar dieta!", "MedicalManagement-Sys");
                        });
                    } else if (valorAcao === "Adicionar") {
                        dietaData = dietaService.AdicionarDieta(_dieta);

                        dietaData.then(function (data) {
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


            }]);

}());