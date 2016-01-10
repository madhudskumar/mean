app.controller(
    'LoginCtrl',
    function LoginCtrl ($scope, $log, $http, mvNotifier, mvIdentity, mvAuth) {
        $scope.signIn = function (username, password) {
            mvAuth.authUser(username,password)
                .then(function (success) {
                    if(success){
                        mvNotifier.notifyValid('SIGNED IN!');
                    }else{
                        mvNotifier.notifyInvalid('FAILED!');
                    }
                }
            );
        };

        $scope.identity =  mvIdentity;
    }
);