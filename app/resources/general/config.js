app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.hashPrefix('');


    $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'resources/auth/views/login.html',
        controller: 'loginCtrl'
    });

    // $stateProvider.state('home', {
    //     url: '/',
    //     templateUrl: 'resources/home/views/home.html',
    //     resolve: {
    //         currentAuth: function(authenticationService) {
    //             return authenticationService.checkAuthentication();
    //         }
    //     }
    // });

    // $stateProvider.state('team', {
    //     url: '/team/home',
    //     templateUrl: 'resources/team/views/team.html',
    //     controller: 'teamCtrl',
    //     resolve: {
    //         currentAuth: function(authenticationService) {
    //             return authenticationService.checkAuthentication();
    //         }
    //     }
    // });


    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'resources/home/views/home.html'
    });

    $stateProvider.state('team', {
        url: '/team/home',
        templateUrl: 'resources/team/views/team.html',
        controller: 'teamCtrl'
    });


    $urlRouterProvider.otherwise('/');

}]);
