(function () {


    angular.module("nvpApp")
        .controller("githubCtrl", function($scope, githubSvc) {


         githubSvc.getUsers()
            .then(function(users) {
                $scope.users = users;
            })


    } )

}());