app.factory('mvIdentity', function ($window, mvUser) {
    var currentUser;
    if($window.bsUser_obj){
        currentUser = new mvUser();
        angular.extend(currentUser, $window.bsUser_obj);
    }
   return{
       currentUser: currentUser,
       isAuthenticated: function () {
           return !!this.currentUser;
       },
       isAuthorised: function (role) {
           return this.currentUser && this.currentUser.roles.indexOf(role) > -1;
       }
   }
});