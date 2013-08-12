var app = angular.module("MyApp", ["ngResource"]);

app.factory("Person", function($resource){
  return $resource(
    '/api/people/:id',
    {id: "@id"},
    {
      create:  { method: 'POST' },
      index:   { method: 'GET', isArray: true },
      show:    { method: 'GET', isArray: false },
      update:  { method: 'PUT' },
      destroy: { method: 'DELETE' }
    });
});

app.controller("MyController", function($scope, Person){
  $scope.people = Person.query();
});
