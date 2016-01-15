app.controller('MainCtrl',
    function MainCtrl ($scope, $log, mvCourse) {
        $scope.courses = mvCourse.query();
        $log.info('hello');
    }
);