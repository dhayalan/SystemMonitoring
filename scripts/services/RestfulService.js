'use strict';
angular.module("systemMonitor")
    .service('restfulService',
        ['Restangular', function (Restangular) {

        var obj = {};

        obj.getGridData = function() {

            return Restangular.one('SystemMonitoring/json/gridData.json').get();
            // var data = [
            //     {cname: 'container1', cid: 'c1', cpu_usage: '5%', status: 'stopped', ip: '10.10.0.100',size: '100', operation: 'Start'},
            //     {cname: 'container2', cid: 'c2', cpu_usage: '10%', status: 'running', ip: '10.10.0.100',size: '200', operation: 'Stop'},
            //     {cname: 'container3', cid: 'c3', cpu_usage: '7%', status: 'running', ip: '10.10.0.100',size: '10', operation: 'Stop'},
            //     {cname: 'container4', cid: 'c4', cpu_usage: '16%', status: 'stopped', ip: '10.10.0.100',size: '150', operation: 'Start'},
            //     {cname: 'container5', cid: 'c5', cpu_usage: '12%', status: 'running', ip: '10.10.0.100',size: '90', operation: 'Stop'},
            //     {cname: 'container6', cid: 'c6', cpu_usage: '8%', status: 'crashed', ip: '10.10.0.100',size: '10', operation: 'Restart'},
            //     {cname: 'container7', cid: 'c7', cpu_usage: '25%', status: 'stopped', ip: '10.10.0.100',size: '500', operation: 'Start'},
            // ];
            // return data;
        };

            obj.processOperation = function(cid) {

                return Restangular.all('processoperation').post(cid);
            };

        return obj;
    }]);