app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.hashPrefix('');

    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'resources/home/views/home.html',
        resolve: {
            currentAuth: function(authenticationService) {
                return authenticationService.checkAuthentication();
            }
        }
    });

    $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'resources/auth/views/login.html',
        controller: 'loginCtrl'
    });

    $urlRouterProvider.otherwise('/');

}]);
