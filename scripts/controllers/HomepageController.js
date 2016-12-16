'use strict';

angular.module('systemMonitor')
    .controller('homepageController', ['$scope', 'restfulService', function ($scope, restfulService) {


        restfulService.getGridData().then(function (response) {
            // console.log(response);
            $scope.rowCollection = response.gridData;
        });
        // $scope.rowCollection = $scope.gridData;
        // $scope.getHomePageData = function () {
        //     $scope.rowCollection = $scope.gridData;
        // }



        $scope.clickHandler = function clickHandler(cid) {
            console.log(cid);
            //click action
            restfulService.processOperation(cid);
        }



}]);
