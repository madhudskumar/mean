app.controller('mvProfileCtrl',
    function mvProfileCtrl($scope, mvAuth, mvIdentity, $location, mvNotifier) {
        $scope.email = mvIdentity.currentUser.userName;
        $scope.fname = mvIdentity.currentUser.firstName;
        $scope.lname = mvIdentity.currentUser.firstName;
        
        $scope.update = function () {
            var newUserData = {
                userName: $scope.email,
                firstName: $scope.fname,
                lastName: $scope.lname
            };

            if($scope.password && $scope.password.length > 0){
                newUserData.password = $scope.password;
            }

            mvAuth.updateCurrentUser(newUserData)
                .then(function () {
                    mvNotifier.notify('updated');
                }, function (reason) {
                    mvNotifier.notifyInvalid(reason);
                })
        }
    }
);