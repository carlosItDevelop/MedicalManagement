
(function () {

    'use strict';

    angular.module('App').controller('ModalPacientesLeitosCtrl',
        ['$scope', '$uibModalInstance', 'pac', '$filter',
            function ($scope, $uibModalInstance, pac, $filter) {
                $scope.pac = pac;
                $scope.ok = function () {
                    $uibModalInstance.close();
                };
            }
        ]);
})();