'use strict';

angular.module('systemMonitor')
    .controller('graphController', ['$scope', 'graphData', 'restfulService', function ($scope, graphData, restfulService) {
        /*Highcharts.chart('container', {
            chart: {
                type: 'area'
            },
            title: {
                text: 'DateTime vs CPU usage for containers'
            },
            subtitle: {
                text: 'Observed by deamon processes'
            },
            xAxis: {
                type: "datatime"
            },
            yAxis: {
                title: {
                    text: 'CPU usage'
                }
            },
            series: [{
                name: gridData[0].cid,
                data: gridData[0].graph_data

            }]
        });
        */
        $scope.graphData = graphData;

        $scope.getGraphData = function () {
            var series = [];
            for (var counter = 0; counter < $scope.graphData.length; counter++) {
                if ($scope.graphData[counter].graph_data) {
                    series.push({
                        name: $scope.graphData[counter].cid,
                        data: $scope.graphData[counter].graph_data
                    })
                }
            }
            Highcharts.chart('container', {
                chart: {
                    type: 'area',
                    zoomType: 'x'
                },
                title: {
                    text: 'DateTime vs CPU usage for containers'
                },
                subtitle: {
                    text: 'Observed by our deamon processes'
                },
                xAxis: {
                    //type: "datatime"
                    labels: {
                        formatter: function () {
                            var date = new Date(this.value);
                            date = date.toString().split(' ');
                            return date[1] + "'" + date[3].substring(2, 4);
                        }
                    }
                },
                yAxis: {
                    title: {
                        text: 'CPU usage'
                    }
                },
                series: series
            });
        };
}]);
