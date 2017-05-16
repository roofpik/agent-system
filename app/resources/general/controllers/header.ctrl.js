app.controller('headerCtrl', ['$scope', 'authenticationService', function($scope, authenticationService) {
	$('.modal').modal();
    $(".button-collapse").sideNav();

    $scope.logout = function() {

        authenticationService.Logout();

    }
}]);
