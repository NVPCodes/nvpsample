(function () {


    angular.module("nvpApp")
        .controller("githubController", function($scope, githubSvc) {
         var vm = this;

         githubSvc.getUsers()
            .then(function(users_) {
                vm.users = users_;
            })


    } )

}());