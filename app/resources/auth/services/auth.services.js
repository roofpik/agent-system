app.factory("authenticationService", ['$state', '$rootScope', '$q', function($state, $rootScope, $q) {
    var service = {};
    service.Logout = logout;
    service.Login = loginToken;
    service.checkAuthentication = checkAuthentication;


    function loginToken(token) {

        var deferred = $q.defer();
        var response = firebase.auth().signInWithCustomToken(token).then(function(user) {
            $rootScope.uid = user.uid;
            deferred.resolve(user);
            return deferred.promise;
        }).catch(function(error) {
            // Handle Errors here.
            deferred.reject(error);
            return deferred.promise;
            // ...
        });

        return response;

    }

    function logout() {
        firebase.auth().signOut()
    }

    function checkAuthentication() {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                $rootScope.uid = user.uid;
            } else {
                $state.go('login');
            }
        });
    }

    return service;
}]);
