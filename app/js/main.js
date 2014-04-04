var app = angular.module('ughUtc', []);

app.controller("UghUtcController", ['$scope', function($scope){
  $scope.currentUtcTime = new Date()
  var utcInput = Date.parse($scope.utcTime)
}]);
