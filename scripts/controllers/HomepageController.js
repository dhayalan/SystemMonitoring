'use strict';

angular.module('systemMonitor')
    .controller('homepageController', ['$scope', 'restfulService', function ($scope, restfulService) {

        $scope.rowCollection = restfulService.getGridData().then(function (resp) {
            console.log(resp.data);
            $scope.rowCollection = resp.data;
            $scope.displayCollection = [].concat($scope.rowCollection);

        });
        // $scope.getHomePageData = function () {
        //     $scope.rowCollection = $scope.gridData;
        // }



        $scope.clickHandler = function clickHandler(cid) {
            console.log(cid);
            //click action
            restfulService.processOperation(cid).then(function (response) {
                console.log(response);
                $scope.rowCollection = response.gridData;
            });
        }



}]);
