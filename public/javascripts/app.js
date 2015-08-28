angular.module("nvpApp",[
    'ngRoute'
]);

angular.module("nvpApp").config(function($routeProvider, $locationProvider) {
    
    $routeProvider
     
        .when("/github" , {
            controller: 'githubCtrl',
            templateUrl : '/templates/gitHubUsers.html'
        })
        .when('/nvp', {
            controller: "nvpCtrl",
            templateUrl: '/templates/npvUsers.html'
        })
        .otherwise({
            template: "This route isn't valid"
        });
        
        $locationProvider.html5Mode(true);
})