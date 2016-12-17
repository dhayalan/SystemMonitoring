'use strict';

angular.module('systemMonitor')
    .controller('barChartController', ['$scope', 'restfulService', function ($scope, restfulService) {
        restfulService.getBarChartData().then(function (response) {
            $scope.barChartData = response.barChartData;

        });
}]);
