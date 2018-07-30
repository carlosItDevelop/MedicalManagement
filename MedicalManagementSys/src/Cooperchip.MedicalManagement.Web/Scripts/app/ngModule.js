
// Declaração principal do módulo global com o app 'Medical Management - Sys';

(function () {
    angular.module('App',
        ['ngMessages',
         'angularUtils.directives.dirPagination',
         'ui.bootstrap',
         'ui.calendar',
         'ngAnimate',
         'ngSanitize',
         'ngRoute'
         //'ui.select']);
        ]).run(function ($rootScope) {
            $rootScope.appTitle = "MedicalManagement-Sys - medical management";
        });

})();


angular.module('App').filter('jsonDate', ['$filter', function ($filter) {
    return function (input, format) {
        return (input) ? $filter('date')(parseInt(input.substr(6)), format) : '';
    };
}]);

