app.factory('Request', ['$http', 'Config', function($http, Config) {
    var Request = {
        async: function(method, name, params) {
            // $http returns a promise, which has a then function, which also returns a promise
            url = Config.api + name;
            var promise = $http({
                url: url,
                method: method,
                params: params
            }).then(function(response) {
                // The then function here is an opportunity to modify the response
                // The return value gets picked up by the then in the controller.
                return response.data;
            });
            // Return the promise to the controller
            return promise;
        }
    };
    return Request;
}]);
