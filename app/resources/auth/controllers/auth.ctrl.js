app.controller('loginCtrl', ['$scope', 'Request', 'authenticationService', '$state', function($scope, Request, authenticationService, $state) {
    $scope.data = {
        mobile: '9910252444',
        otp: '9704'
    }
    $scope.sendOtp = function() {
        params = {
            mobile: $scope.data.mobile
        }
        Request.async('POST', 'sendBuinsessOtp', params).then(function(response) {
            Materialize.toast(response.message, 4000);
            if(response.status == '200'){
            	$scope.otpEnabled = true;
            }
        });
    }


    $scope.verifyOtp = function() {
        params = {
            mobile: $scope.data.mobile,
            otp: $scope.data.otp
        }
        Request.async('POST', 'verifyBuinsessOtp', params).then(function(token) {

            authenticationService.Login(token).then(
                function(result) {
                    $state.go('home');

                },
                function(error) {
                    console.log(error);
                }
            );

        });

    }

}]);
