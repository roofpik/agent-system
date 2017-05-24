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



// new page start
    $stateProvider.state('registration', {
        url: '/registration',
        templateUrl: 'resources/general/views/registration.html'
    });

     $stateProvider.state('home', {
        url: '/',
        templateUrl: 'resources/home/views/home.html'
    });

    $stateProvider.state('owner-details', {
        url: '/owner-details',
        templateUrl: 'resources/home/views/owner-details.html',
        controller: 'ownerdetailsCtrl'
    });
     $stateProvider.state('owner-details-form', {
        url: '/owner-registration',
        templateUrl: 'resources/home/views/owner-details-form.html',
        controller: 'ownerdetailsCtrl'
    });

    $stateProvider.state('customerleads', {
        url: '/customerleads',
        templateUrl: 'resources/home/views/customerleads.html',
        controller: 'ownerdetailsCtrl'
    });

$stateProvider.state('profile-manage', {
        url: '/profile-manage',
        templateUrl: 'resources/home/views/profile-manage.html',
        controller: 'ownerdetailsCtrl'
    });

$stateProvider.state('sub-user', {
        url: '/sub-user',
        templateUrl: 'resources/home/views/sub-user.html',
        controller: 'ownerdetailsCtrl'
    });

    $stateProvider.state('payments', {
        url: '/payments',
        templateUrl: 'resources/home/views/paymentsandaccount.html',
        controller: 'ownerdetailsCtrl'
    });
    $stateProvider.state('invoice-table', {
        url: '/invoice-table',
        templateUrl: 'resources/home/views/invoice-table.html',
        controller: 'ownerdetailsCtrl'
    });

// new page end





    $stateProvider.state('team', {
        url: '/team/home',
        templateUrl: 'resources/team/views/team.html',
        controller: 'teamCtrl'
    });

    $stateProvider.state('leads', {
        url: '/leads/tenants',
        templateUrl: 'resources/team/views/leads.html',
        controller: 'teamCtrl'
    });

    $stateProvider.state('tenants-form', {
        url: '/tenants-form',
        templateUrl: 'resources/team/views/tenants-form.html'
       
    });

    $stateProvider.state('account-form', {
        url: '/leads/account-form',
        templateUrl: 'resources/team/views/account-form.html'
       
    });

    $stateProvider.state('invoice', {
        url: '/invoice',
        templateUrl: 'resources/team/views/invoice.html'
       
    });
    $stateProvider.state('review-details', {
        url: '/review-details',
        templateUrl: 'resources/team/views/review-details.html'
       
    });
     $stateProvider.state('projects', {
        url: '/projects',
        templateUrl: 'resources/team/views/projects.html'
       
    });
     $stateProvider.state('location', {
        url: '/location',
        templateUrl: 'resources/team/views/location.html'
       
    });


    $urlRouterProvider.otherwise('/');

}]);
