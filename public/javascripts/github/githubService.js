(function () {

    angular.module("nvpApp")
        .service('githubSvc', function($http){

            this.getUsers= function() {
                return $http.get('https://api.github.com/users')
                    .then(function(response ) {
                        console.log(response.data);
                        return response.data ;

            })
        }
    })

}());