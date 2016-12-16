'use strict';

angular.module('systemMonitor')
    .controller('homepageController', ['$scope', 'gridData', 'restfulService', function ($scope, gridData, restfulService) {

        // console.log(gridData);
        $scope.rowCollection = gridData;
        $scope.getHomePageData = function () {
            $scope.rowCollection = gridData;
        }



        $scope.clickHandler = function clickHandler(cid) {
            console.log(cid);
            //click action
            restfulService.processOperation(cid);
        }



}]);
