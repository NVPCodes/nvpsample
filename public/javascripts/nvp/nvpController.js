angular.module("nvpApp")
    .controller("nvpCtrl", function($scope,lodash,nvpSvc) {
        
        
    $scope.fname="Test";
    $scope.lname="Case";
    
    
    // send request to server otherwise server gets route specified in angular
        // /templates/nvp
        nvpSvc.getNvpNames()
            .then( function(names_){
                var tempNames = [];
                lodash.forEach( names_, function(name){
                    tempNames.push( name.fname+' '+ name.lname)
                });

                $scope.names = tempNames;
                /***
                var tempNames = [];
                for (i=0; i < names_.length;i++) {
                    tempNames.push( names_[i].fname+' '+ names_[i].lname)
                }
                $scope.names = tempNames;
                 **/
            });
    
} )