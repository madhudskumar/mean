app.controller('MainCtrl',
    function MainCtrl ($scope, $log) {
        $scope.courses = [
            {name: 'c' , featured:true, published:new Date(1,1,1)},
            {name: 'c++' , featured:false, published:new Date(1,1,1)},
            {name: 'jade' , featured:true, published:new Date(1,1,1)},
            {name: 'roc' , featured:false, published:new Date(1,1,1)},
            {name: 'pin' , featured:true, published:new Date(1,1,1)},
            {name: 'asd' , featured:false, published:new Date(1,1,1)}
        ];

        $log.info('hello');
    }
);