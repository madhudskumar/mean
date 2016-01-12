app.factory('mvUser',
    function ($resource) {
        var userResource = $resource('/api/users:id', {id:"@id"});

        userResource.prototype.isAdmin = function () {
            return this.roles && this.roles.indexOf('admin') > -1;
        };

        return userResource;
    }
);