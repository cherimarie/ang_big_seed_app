var app = angular.module("MyApp", []);

app.controller('DashboardCtrl', function($scope){
  $scope.events = [];

  $scope.$on('activity:click', function(event, activity){
    console.log(activity)
    $scope.events.push(activity);
  });
});

app.controller('ActivityCtrl', function($scope){
  $scope.emit_event = function(activity){
    $scope.$emit('activity:click', activity);
  };

  $scope.left = function(){
    $scope.emit_event('left');
  };

  $scope.right = function(){
    $scope.emit_event('right');
  };
});