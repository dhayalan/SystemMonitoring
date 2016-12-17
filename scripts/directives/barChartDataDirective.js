'use strict';
angular.module("systemMonitor")
    .directive('barChartData', function (restfulService) {
        return {
            restrict: 'E',
            replace: false,
            templateUrl: "html/partials/barChart.html",
            controller: 'barChartController'
        };


    });
