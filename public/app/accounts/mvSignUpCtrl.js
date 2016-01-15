app.controller('mvSignUpCtrl',
    function mvSignUpCtrl ($scope, mvAuth, mvUser, mvNotifier, $location) {
       $scope.signup = function () {
           var newUserData = {
               userName: $scope.email,
               password: $scope.pwd,
               firstName: $scope.fname,
               lastName: $scope.lname
           };

           mvAuth.createUser(newUserData)
               .then(function () {
                   mvNotifier.notify('User Account Created');
                   $location.path('/');
               }, function (reason) {
                   mvNotifier.notifyInvalid(reason);
               })
       }
    }
);