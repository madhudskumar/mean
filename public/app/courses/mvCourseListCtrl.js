app.controller('mvCourseListCtrl',
    function mvCourseListCtrl($scope, mvCourse) {
        $scope.courses = mvCourse.query();

        $scope.sortOption = [
            {
                value:"title",
                text:"Sort By Title"
            },
            {
                value:"published",
                text:"Sort By Date"
            }
        ]

        $scope.SortOrder = $scope.sortOption[0].value;
    }
);