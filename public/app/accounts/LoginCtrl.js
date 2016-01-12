app.controller(
    'LoginCtrl',
    function LoginCtrl ($scope, $log, $http, mvNotifier, mvIdentity, mvAuth, $location) {
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

        $scope.signOut = function () {
            mvAuth.logOut()
                .then(function () {
                    $scope.username = "";
                    $scope.password = "";
                    mvNotifier.notify('logged out!');
                    $location.path('');
                })

        };

        $scope.identity =  mvIdentity;
    }
);