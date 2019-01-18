

(function () {

    'use strict';

    angular.module('App').service("twitterDeskService", ['$http', function ($http) {


        // Ler tweets
        this.GetAccessToken = function (encodeData) {
            //debugger;

            let headers = new Headers();

            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json');
            headers.append('Access-Control-Allow-Origin', 'http://localhost:35600');
            headers.append('Access-Control-Allow-Origin', 'https://api.twitter.com');
            headers.append('Access-Control-Allow-Credentials', 'true');
            headers.append('GET', 'POST', 'OPTIONS');
            //headers.append("Authorization", "Basic " + base64.encode(apiKey + ":" + apiSecret));
            headers.append("Authorization", "Basic " + encodeData);
            
            headers.append('grant_type', 'client_credentials');

            var response = $http({
                method: "POST",
                headers: headers,
                url: "https://api.twitter.com/oauth2/token",
                //data: JSON.stringify(token),
                dataType: "json"
            });
            return response;
        };


        //// Gerar Token
        //this.GetAccessToken = function (token) {
        //    //debugger;
        //    var response = $http({
        //        method: "POST",
        //        url: "https://api.twitter.com/oauth2/token",
        //        data: JSON.stringify(token),
        //        headers: {
        //            'Content-Type': 'application/x-www-form-urlencoded',
        //            'grant_type': 'client_credentials',
        //            'Authorization': 'Bearer ' + token
        //        },
        //        dataType: "json"
        //    });
        //    return response;
        //};

    }]);

})();