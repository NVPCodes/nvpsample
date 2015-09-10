(function () {


    angular.module("nvpApp")
        .controller("nvpController", function($scope,lodash,nvpSvc) {

        var vm = this;

        vm.fname="Test";
        vm.lname="Case";


        // send request to server otherwise server gets route specified in angular
            // /templates/nvp
            nvpSvc.getNvpNames()
                .then( function(names_){
                    var tempNames = [];
                    // example of functional programming using lodash library
                    // see difference from for loop below
                    lodash.forEach( names_, function(name){
                        tempNames.push( name.fname+' '+ name.lname)
                    });

                    vm.names = tempNames;
                    /***
                    var tempNames = [];
                    for (i=0; i < names_.length;i++) {
                        tempNames.push( names_[i].fname+' '+ names_[i].lname)
                    }
                    $scope.names = tempNames;
                     **/
                });

    } )

}());