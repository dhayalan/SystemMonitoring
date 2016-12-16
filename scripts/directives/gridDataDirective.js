'use strict';
angular.module("systemMonitor")
    .directive('gridData', function (restfulService) {
        return {
            restrict: 'E',
            replace: false,
            controller: 'homepageController',
            templateUrl: "html/partials/homepage.html"
        };


    });
