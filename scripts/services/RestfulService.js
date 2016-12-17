'use strict';
angular.module("systemMonitor")
    .service('restfulService',
        ['Restangular', '$http', function (Restangular, $http) {

        var obj = {};

        obj.getGridData = function() {

        var objData =  $http({method: 'GET',
                url: 'http://10.20.4.182:8000/containers'
//                 headers:
//                 {
// //                          'Access-Control-Allow-Origin': 'http://localhost'
//                 }
            })
                .success(function(data){  console.log(data); return data; })
                .error(function(data){ console.log(data); })
                .catch(function(data){ console.log(data);});

            return objData;
        };
        obj.getGraphData = function () {
            return Restangular.one('SystemMonitoring/json/graphData.json').get();
        };


        obj.processOperation = function (id) {

                return Restangular.one('SystemMonitoring/json/processData'+id+'.json').get();
            // var objData =  $http({method: 'POST',
            //     url: 'http://10.20.4.182:8000/containerkill',
            //     params: {
            //         id: id
            //     }
            // })
            //     .success(function(data){  console.log(data); return data; })
            //     .error(function(data){ console.log(data); })
            //     .catch(function(data){ console.log(data);});
            //
            // return objData;
            };

        return obj;
    }]);
