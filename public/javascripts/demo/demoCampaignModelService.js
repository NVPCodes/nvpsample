(function () {

    angular.module("nvpApp")
        .service("campaignModelService", function () {
            service = this;

            var campaignModel = [
                {
                    name: 'Alpha Centauri',
                    description: 'Premier campaign targeting collegians',
                    manager: 'Lorraine Hansberry',
                    inception: '1/10/16'

                },
                {
                    name: 'May Day',
                    description: 'Secondary campaign targeting employers',
                    manager: 'Cesar Chavez',
                    inception: '4/1/16'

                },
                {
                    name: 'Freedom Day',
                    description: 'Campaign targeting community affairs',
                    manager: 'Paulo Freire',
                    inception: '4/27/16'

                }


            ];

            var campaignModelTitles = [

                { headerName: 'Name' , field:'name' },
                { headerName: 'Description', field: 'description' },
                { headerName: 'Manager', field: 'manager' },
                { headerName: 'Inception', field: 'inception'}

            ]

            service.getCampaignModel = function () {
                return campaignModel;
            };

            service.getCampaignColumnTitles = function () {
                return campaignModelTitles;
            }
        })

}())