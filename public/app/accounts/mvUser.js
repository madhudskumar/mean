app.factory('mvUser',
    function ($resource) {
        var userResource = $resource('/api/users:id', {id:"@id"},{
            update:{method:'PUT', isArray:false}
        });

        userResource.prototype.isAdmin = function () {
            return this.roles && this.roles.indexOf('admin') > -1;
        };

        return userResource;
    }
);