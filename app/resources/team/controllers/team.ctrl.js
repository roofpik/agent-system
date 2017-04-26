app.controller('teamCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

    $('.modal').modal();
    $scope.addNewMember = function() {
        $('#addnewmodal').modal('open');
    };

    function generatePassword() {
        var length = 8,
            charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
            retVal = "";
        for (var i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        return retVal;
    }

    $scope.addMember = function() {

        if ($scope.data.mobile && $scope.data.name) {

            data = {};
            udata = {};

            email = $scope.mobile + '@roofpikbusiness.com';
            password = generatePassword();

            firebase.auth().createUserWithEmailAndPassword(email, password).then(function(snapshot) {
                data['uid'] = snapshot.uid;
                data['mobile'] = $scope.data.mobile;
                data['name'] = $scope.data.mobile;

                udata['uid'] = snapshot.uid;
                udata['mobile'] = $scope.data.mobile;
                udata['name'] = $scope.data.mobile;
                udata['agent'] = $rootScope.agentid;
                udata['city'] = '-KYJONgh0P98xoyPPYm9';
                udata['created'] = new Date().getTime();
                udata['type'] = 'other';

                updates = {};
                updates['business/users/uid/' + snapshot.uid] = udata;
                updates['business/users/mobile/' + $scope.mobile] = udata;
                updates['partner/city/-KYJONgh0P98xoyPPYm9/agent/-KfoJaXsWGnSDWkALa-U/users/other/'] = data;
                db.ref().update(updates).then(function(snapshot) {
                    Materialize.toast('User successfully added', 4000);
                });

            }).catch(function(error) {
                // Handle Errors here.
                console.log(error)
                var errorCode = error.code;
                var errorMessage = error.message;
                Materialize.toast(errorMessage, 4000);
                // ...
            });

        } else {
            Materialize.toast('Please fill the details', 4000);

        };

    }

}]);
