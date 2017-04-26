app.controller('headerCtrl', ['$scope', 'authenticationService', function($scope, authenticationService) {
    $(".button-collapse").sideNav();

    $scope.logout = function() {

        authenticationService.Logout();

    }
}]);
