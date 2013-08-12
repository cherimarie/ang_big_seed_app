var app = angular.module("MyApp", ["ngResource"]);

app.controller("MyController", function($scope, $resource){
  $scope.searchTerm    = 'GOOG'

  $scope.googleFinance = $resource(
    'https://finance.google.com/finance/info',
    {client:'ig', callback:'JSON_CALLBACK'},
    {get: {method:'JSONP', isArray: true}}
  );

  $scope.search = function() {
    $scope.searchResults = $scope.googleFinance.get(
      { q: $scope.searchTerm }
    );
  };
});
