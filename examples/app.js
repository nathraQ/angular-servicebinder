var ExampleApp = angular.module('ExampleApp', ['Sudomake']);

ExampleApp.controller('ExampleMainController',['$scope', 'SudomakeServicebinderService', 'ExampleMainService', function ($scope, SudomakeServicebinderService, ExampleMainService) {
    SudomakeServicebinderService.bindService($scope, ExampleMainService, ['exampleString', 'exampleArray', 'exampleObject']);

    $scope.addExampleStringToExampleArray = function () {
        $scope.exampleArray.push($scope.exampleString);
    };

    $scope.removeFromExampleArray = function () {
        $scope.exampleArray.pop();
    };
}]);

ExampleApp.service('ExampleMainService', [function () {
    var _self = this;

    var _exampleString = 'sandwich';
    var _exampleArray = ['sudo', 'make', 'sandwich'];
    var _exampleObject = {foo: 'bar'};

    _self.setExampleString = function (string) {
        _exampleString = string;
    };

    _self.getExampleString = function () {
        return _exampleString;
    };

    _self.setExampleArray = function (array) {
        console.log('setExampleArray', array);
        _exampleArray = array;
    };

    _self.getExampleArray = function () {
        return _exampleArray;
    };

    _self.setExampleObject = function (setExampleObject) {
        console.log('setExampleObject', array);
        _exampleObject = object;
    };

    _self.getExampleObject = function () {
        return _exampleObject;
    };

}]);