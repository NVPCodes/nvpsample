angular.module("nvpApp",[
    'ngRoute',
   'ngLodash'
]);



angular.module("nvpApp").config(function($routeProvider, $locationProvider) {
    
    $routeProvider

        .when("/", {
            controller : 'homeCtrl',
            templateUrl: '/templates/home.html'
        })
     
        .when("/github" , {
            controller: 'githubCtrl',
            templateUrl : '/templates/gitHubUsers.html'
        })
        .when('/nvp', {
            controller: "nvpCtrl",
            templateUrl: '/templates/nvpUsers.html'
        })
        .otherwise({
            template: "This route isn't valid"
          //  redirectTo: '/'
        });
        
        $locationProvider.html5Mode(true);
});

angular.module("nvpApp").run([
    '$rootScope',
    function($rootScope) {
        // see what's going on when the route tries to change
        $rootScope.$on('$routeChangeStart', function(event, next, current) {
            // next is an object that is the route that we are starting to go to
            // current is an object that is the route where we are currently
            var junk = 1;
            var currentPath = (current && current.$$route ) ? current.$$route.templateUrl : ' currentPath not set';
            var nextPath = (next  && next.$$route ) ? next.$$route.templateUrl : 'nextPath not set';

            console.log('Starting to leave %s to go to %s', currentPath, nextPath);
        });
    }
]);