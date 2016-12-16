'use strict';
angular.module("systemMonitor")
    .directive('headerNav', function () {
        return {
            restrict: 'EA',
            replace: false,
            templateUrl: 'html/templates/headerNav.html',
            link:function($scope, element, attrs, ngModel){

                $scope.tabs = [{
                    title: 'Grid',
                    active: true,
                    state: 'grid',
                    url: 'html/partials/homepage.html'
                }, {
                    title: 'Graph',
                    active: false,
                    state: 'graph',
                    url: 'html/partials/graph.html'
                }];

                $scope.currentTab = 'grid';

                $scope.onClickTab = function (tab) {
                    $scope.currentTab = tab.state;
                }

                $scope.isActiveTab = function(tab) {
                    return $scope.currentTab == tab;
                }

            }
        };


    });
