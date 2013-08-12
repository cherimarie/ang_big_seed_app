var app = angular.module('MyApp', []);

app.config(function($routeProvider, $locationProvider){
  $locationProvider.html5Mode(true);
  $routeProvider.
    when("/index.html",    {templateUrl: '/templates/index.html', controller: 'IndexController'}).
    when("/show/:id.html", {templateUrl: '/templates/show.html',  controller: 'ShowController'}).
    otherwise({redirectTo: '/index.html'})
});

app.factory("Person", function() {
  var people = [
    { firstName: "Brad",     lastName: 'Pitt',   age: 78,  eyes: 'Green', id: 1 },
    { firstName: "Angelina", lastName: 'Jolie',  age: 104, eyes: 'Blue',  id: 2 },
    { firstName: "Tom",      lastName: 'Cruise', age: 981, eyes: 'Two',   id: 3 }
  ];

  return {
    all: function() {
      return people;
    },

    find: function(id) {
      var result = null;
      angular.forEach(people, function(p) {
        if (p.id == id){
          result = p;
        }
      });
      return result;
    }
  };
});

app.controller("IndexController", function($scope, $location, Person) {
  $scope.people = Person.all();
});

app.controller("ShowController", function($scope, $routeParams, $window, Person) {
  $scope.person = Person.find($routeParams.id);

  $scope.back = function(){
    $window.history.back();
  };
});