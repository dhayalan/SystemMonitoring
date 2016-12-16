'use strict';

var app = angular.module("systemMonitor", [
        'restangular',
        'ngRoute',
        'smart-table'
    ]);


app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "html/partials/homepage.html",
            controller: 'homepageController',
            resolve: {
                gridData: function (restfulService) {
                    return restfulService.getGridData().then(function (response) {
                        return response.gridData;
                    });
                }
            }
        })
        .when("/graphs", {
            templateUrl: "html/partials/graph.html",
            controller: 'graphController',
            resolve: {
                graphData: function (restfulService) {
                    return restfulService.getGraphData().then(function (response) {
                        return response.graphData;
                    });
                }
            }
        });

    $routeProvider.otherwise({
        redirectTo: '/'
    });
});
