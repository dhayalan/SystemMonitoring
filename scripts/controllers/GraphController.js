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
        }

        /*Highcharts.chart('container', {
    chart: {
        zoomType: 'x'
    },
    title: {
        text: 'USD to EUR exchange rate over time'
    },
    subtitle: {
        text: document.ontouchstart === undefined ?
            'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
    },
    xAxis: {
        type: 'datetime'
    },
    yAxis: {
        title: {
            text: 'Exchange rate'
        }
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        area: {
            fillColor: {
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                stops: [
                            [0, Highcharts.getOptions().colors[0]],
                            [1, Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(0).get('rgba')]
                        ]
            },
            marker: {
                radius: 2
            },
            lineWidth: 1,
            states: {
                hover: {
                    lineWidth: 1
                }
            },
            threshold: null
        }
    },

    series: [{
        type: 'area',
        name: 'USD to EUR',
        data: gridData[0].graph_data
            }]
});*/
}]);
