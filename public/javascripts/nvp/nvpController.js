angular.module("nvpApp")
    .controller("nvpCtrl", function($scope,_,nvpSvc) {
        
    $scope.newUser = '';
    $scope.fname="James";
    $scope.lname="Rawlins";

    // send request to server otherwise server gets route specified in angular
        // /templates/nvp
        nvpSvc.getNvpNames()
            .then( function(_names){
                var tempNames = [];
                for (i=0; i < _names.length;i++) {
                    tempNames.push( _names[i].fname+' '+ _names[i].lname)
                }
                $scope.names = tempNames;
            });


} )