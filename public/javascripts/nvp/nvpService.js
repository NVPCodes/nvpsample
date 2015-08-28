angular.module("nvpApp")
    .service('nvpSvc', function($http, $q){

        this.getNvpNames = function() {

            return $http.get("/nvp")
                .then(function (response) {
                    console.log(response.data.names);
                    return response.data.names;

                })

        }

})