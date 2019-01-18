
(function () {
    'use strict';

    // Convenios

    angular.module('App').controller('convenioCtrl', convenioCtrl);
    convenioCtrl.$inject = ['convenioService'];

    function convenioCtrl(convenioService) {
        var vm = this;

        vm.divconvenio = false;
        vm.titulo = "Lista de Convênios";


        function obterTodosOsConvenios() {
            let conveniosData = convenioService.ObterTodas()
                .then(function (resultado) {
                    vm.convenios = resultado.data;
                    vm.Acao = "";
                }, function () {
                    toastr["error"]("Erro ao obter convenios", "MedicalManagement-Sys");
                });
        }


        // obter por id
        // Habilita DIV para Edição de registros
        vm.obterPorId = function (convenio) {
            let convenioData = convenioService.GetConvenioPorId(convenio.ConvenioId)
                .then(function (resultado) {
                    vm.convenio = resultado.data;

                    vm.Acao = "Atualizar";
                    vm.divconvenio = true;
                }, function () {
                    toastr["error"]("Erro ao obter convenio por id!", "MedicalManagement-Sys");
                });
        };



        // Habilita DIV para Adição de registros
        vm.incluirConvenioDiv = function () {
            vm.convenio = {};
            vm.convenioForm.$setPristine();
            vm.Acao = "Adicionar";
            vm.divconvenio = true;
        };



        vm.ExcluirConvenio = function alert_it(convenio) {
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
                    apagarRegistro(convenio)
                    swal("EXCLUÍDO!", "O registro foi deletado com sucesso.", "success");
                });
        };


        var apagarRegistro = function (convenio) {
            let convenioData = convenioService.Excluir(convenio.ConvenioId)
                .then(function (data) {
                    if (data.status === 200) {
                        toastr["warning"]("Convenio excluído com sucesso!", "MedicalManagement-Sys");
                        obterTodosOsConvenios();
                    }
                }, function () {
                    toastr["error"]("Erro ao excluir convenio!", "MedicalManagement-Sys");
                });
        };





        vm.AdicionarEditarConvenio = function () {
            let _convenio = {
                Descricao: vm.convenio.Descricao
            };
            let valorAcao = vm.Acao;
            if (valorAcao === "Atualizar") {
                _convenio.ConvenioId = vm.convenio.ConvenioId;
                let convenioData = convenioService.AtualizarConvenio(_convenio)
                    .then(function (data) {
                        if (data.status === 200) {
                            toastr["success"]("Convenio alterado com sucesso!", "MedicalManagement-Sys");
                            obterTodosOsConvenios();
                            vm.divconvenio = false;
                        }
                    }, function (data) {
                        toastr["error"](data.data, "MedicalManagement-Sys");
                    });
            } else if (valorAcao === "Adicionar") {
                let convenioData = convenioService.AddConvenio(_convenio)
                    .then(function (resultado) {
                        if (resultado.status === 200) {
                            //console.log(data.status);  // 200
                            toastr["success"]("Convenio Adicionado com sucesso!", "MedicalManagement-Sys");
                            obterTodosOsConvenios();
                            vm.divconvenio = false;
                        }
                    }, function (resultado) {
                        if (resultado.status === 401) {
                            toastr["error"](resultado.data, "MedicalManagement-Sys");
                        }
                        toastr["error"]("Erro ao Adicionar convenio!", "MedicalManagement-Sys");
                    });
            }
        };


        vm.cancelaEdicao = function () {
            vm.Acao = "";
            vm.divconvenio = false;
            vm.convenioForm.$setPristine();
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



        obterTodosOsConvenios();


    }

})();