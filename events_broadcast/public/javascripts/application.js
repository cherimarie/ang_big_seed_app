var app = angular.module("MyApp", []);

app.controller('NewController', function($scope, $rootScope){
  $scope.item = '';

  $scope.addItem = function(){
    $rootScope.$broadcast('item:add', $scope.item);
    $scope.item = '';
  };
});

app.controller('IndexController', function($scope){
  $scope.items = [];

  $scope.$on('item:add', function(event, item){
    $scope.items.unshift(item);
  });
});