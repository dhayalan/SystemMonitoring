'use strict';

angular.module('systemMonitor')
    .controller('graphController', ['$scope', 'restfulService', function ($scope, restfulService) {
        restfulService.getGraphData().then(function (response) {
            $scope.graphData = response.graphData;
            var series = [];

            for (var counter = 0; counter < $scope.graphData.length; counter++) {
                if ($scope.graphData[counter].graph_data) {
                    series.push({
                        name: $scope.graphData[counter].cname,
                        data: $scope.graphData[counter].graph_data,
                        color: Highcharts.getOptions().colors[counter + 2]
                    })
                }
            }
            Highcharts.chart('graph-container', {
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
                    labels: {
                        formatter: function () {
                            var date = new Date(this.value);
                            /*date = date.toString().split(' ');
return date[1] + "'" + date[3].substring(2, 4);*/

                            return date.getHours() + ":" + date.getMinutes();
                        }
                    }
                },
                yAxis: {
                    title: {
                        text: 'CPU usage'
                    }
                },
                plotOptions: {
                    area: {
                        tooltip: {
                            headerFormat: "",
                            pointFormatter: function () {
                                var thisDate = new Date(this.x),
                                    monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                                    header = thisDate.getHours() + ":" + thisDate.getMinutes() + " " + thisDate.getDate() + "-" + monthArray[thisDate.getMonth()] + "-" + thisDate.getFullYear();
                                return header + '<br/><span style="color: ' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + this.y + '</b><br/>'
                            }
                        }
                    }
                },
                series: series
            });
        });
}]);
