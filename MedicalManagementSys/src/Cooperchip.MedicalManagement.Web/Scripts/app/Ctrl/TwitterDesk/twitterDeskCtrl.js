

(function () {
    'use strict';

    angular.module('App').controller('twitterDeskCtrl', twitterDeskCtrl);
    twitterDeskCtrl.$inject = ['twitterDeskService'];

    function twitterDeskCtrl(twitterDeskService) {
        var vm = this;

        //vm.divconvenio = false;
        vm.titulo = "Twitter Desk App";
        vm.tweets = [];

        vm.apiKey = "EjUYwhMDau9q1bXQ63HuxVACP";
        vm.apiSecret = "AAZcRT2i5W13A3lnFUOBdAWktYSipn5Vf56yxgHq5cXy5a6dKQ";

        //let encodeData = base64.encode(vm.apiKey + ":" + vm.apiSecret);

        var encodeData = "RWpVWXdoTURhdTlxMWJYUTYzSHV4VkFDUDpBQVpjUlQyaTVXMTNBM2xuRlVPQmRBV2t0WVNpcG41VmY1Nnl4Z0hxNWNYeTVhNmRLUQ==";

        vm.obterAToken = function () {
            let tweetData = twitterDeskService.GetAccessToken(encodeData)
                .then(function (resultado) {
                    vm.tweets = resultado.data;
                }, function () {
                    toastr["error"]("Erro ao obter Access_Token!", "MedicalManagement-Sys");
                });
        };


    }

})();