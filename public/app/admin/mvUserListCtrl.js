'use strict';

app.controller('mvUserListCtrl',
    function mvUserListCtrl ($scope, mvUser) {
        $scope.users = mvUser.query();
    }
);