(function () {

    angular.module("nvpApp")
        .controller("demoController", function($scope,campaignModelService) {
            var vm = this;
            var columnDefs = [
                { headerName: 'Name' , field:'name' },
                { headerName: 'Description', field: 'description' },
                { headerName: 'Manager', field: 'manager' },
                { headerName: 'Inception', field: 'inception'}
            ];

            vm.campaignModel = campaignModelService.getCampaignModel();

            $scope.gridOptions = {
                columnDefs : columnDefs,
                rowData: vm.campaignModel,
                dontUseScrolls: true

            };


        } )
}());