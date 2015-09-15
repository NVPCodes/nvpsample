(function () {

    angular.module("nvpApp")
        .controller("demoController", function($scope,campaignModelService) {
            var vm = this;
            vm.columnDefs =  campaignModelService.getCampaignColumnTitles();

            vm.campaignModel = campaignModelService.getCampaignModel();

            $scope.gridOptions = {
                columnDefs : vm.columnDefs,
                rowData: vm.campaignModel,
                enableColResize: true,
                dontUseScrolls: true

            };
            $scope.resize = function() {
                $scope.gridOptions.api.sizeColumnsToFit();
            };



        } )
}());