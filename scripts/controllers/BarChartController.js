'use strict';

angular.module('systemMonitor')
    .controller('barChartController', ['$scope', 'restfulService', function ($scope, restfulService) {
        restfulService.getBarChartData().then(function (response) {

            $scope.barChartData = response.data;
            var tempDataArray = [];
            for (var counter = 0; counter < $scope.barChartData.length; counter++) {
                var tempData = {};

                tempData.drilldown = null;
                var upTime = $scope.barChartData[counter].CStatus;

                upTime = upTime.split(" ");

                switch (upTime[2]) {
                    case "Days":
                        upTime = parseInt(upTime[1]) * 24;
                        break;
                    case "Hours":
                        upTime = parseInt(upTime[1]);
                        break;
                    case "Minutes":
                        upTime = parseInt(upTime[1]) / 60;
                        break;
                    case "Seconds":
                        upTime = parseInt(upTime[1]) / (60 * 60);
                        break;
                    default:
                        upTime = parseInt(upTime[1]);
                        break;
                }

                tempData.y = upTime;
                tempData.name = $scope.barChartData[counter].CName;

                $scope.barChartData[counter] = tempData;
            }

            Highcharts.chart('bar-chart-container', {
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Containers Up-time'
                },
                subtitle: {
                    text: ''
                },
                xAxis: {
                    type: 'category'
                },
                yAxis: {
                    title: {
                        text: 'Up-time in hours'
                    }
                },
                legend: {
                    enabled: false
                },
                plotOptions: {
                    series: {
                        borderWidth: 0,
                        dataLabels: {
                            enabled: true,
                            format: '{point.y}'
                        }
                    }
                },

                tooltip: {
                    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b><br/>'
                },

                series: [{
                    name: 'Up for(in hours)',
                    colorByPoint: true,
                    data: $scope.barChartData
                }]
            });

        });
}]);
