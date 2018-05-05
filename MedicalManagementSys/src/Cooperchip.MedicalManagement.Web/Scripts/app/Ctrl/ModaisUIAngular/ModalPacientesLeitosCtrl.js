
app.controller('ModalPacientesLeitosCtrl', function ($scope, $uibModalInstance, pac, $filter) {

    $scope.pac = pac;
    $scope.ok = function () {
        $uibModalInstance.close();
    };

});