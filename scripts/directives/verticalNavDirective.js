'use strict';
angular.module("systemMonitor")
    .directive('verticalNav', function () {
        return {
            restrict: 'E',
            replace: false,
            scope: {},
            templateUrl: 'html/templates/verticalNav.html'
            // controller: function ($scope, $element, $rootScope) {
            //     //pre-compile functionality
            //
            // },
            //
            // link: function (scope, element, attrs, rootScope) {
            //     //post-compile functionality
            //
            //     scope.admin = function () {
            //         $log.debug("go to admin page");
            //         $state.go('parent.admin');
            //     }
            //
            // }
        };


    });
