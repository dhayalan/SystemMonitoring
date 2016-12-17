'use strict';
angular.module("systemMonitor")
    .service('restfulService',
        ['Restangular', '$http', function (Restangular, $http) {

        var obj = {};

        obj.getGridData = function() {

        //     return Restangular.one('10.20.4.182/containers  ').get();
        //     // var data = [
        //     //     {cname: 'container1', cid: 'c1', cpu_usage: '5%', status: 'stopped', ip: '10.10.0.100',size: '100', operation: 'Start'},
        //     //     {cname: 'container2', cid: 'c2', cpu_usage: '10%', status: 'running', ip: '10.10.0.100',size: '200', operation: 'Stop'},
        //     //     {cname: 'container3', cid: 'c3', cpu_usage: '7%', status: 'running', ip: '10.10.0.100',size: '10', operation: 'Stop'},
        //     //     {cname: 'container4', cid: 'c4', cpu_usage: '16%', status: 'stopped', ip: '10.10.0.100',size: '150', operation: 'Start'},
        //     //     {cname: 'container5', cid: 'c5', cpu_usage: '12%', status: 'running', ip: '10.10.0.100',size: '90', operation: 'Stop'},
        //     //     {cname: 'container6', cid: 'c6', cpu_usage: '8%', status: 'crashed', ip: '10.10.0.100',size: '10', operation: 'Restart'},
        //     //     {cname: 'container7', cid: 'c7', cpu_usage: '25%', status: 'stopped', ip: '10.10.0.100',size: '500', operation: 'Start'},
        //     // ];
        //     // return data;

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

            obj.processOperation = function(cid) {

                // return Restangular.all('SystemMonitoring/json/processData.json').post(cid);
            };

        return obj;
    }]);