'use strict';
angular.module("systemMonitor")
    .directive('graphData', function (restfulService) {
        return {
            restrict: 'E',
            replace: false,
            templateUrl: "html/partials/graph.html",
            controller: 'graphController'
        };


    });
