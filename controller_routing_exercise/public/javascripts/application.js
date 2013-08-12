var app = angular.module('MyApp', []);

app.config(function($routeProvider, $locationProvider){
  $locationProvider.html5Mode(true);
  $routeProvider.
    when("/index.html",    {templateUrl: '/templates/index.html', controller: 'IndexController'}).
    when("/show/:id.html", {templateUrl: '/templates/show.html',  controller: 'ShowController'}).
    otherwise({redirectTo: '/index.html'})
});

app.factory("Directory", function() {
  var entries = [
    { name: "Barak Obama",    phone: '555 555-5555', address: 'White House', id: 1 },
    { name: "Nelson Mandela", phone: '567 567-5678', address: 'Houghton',    id: 2 },
    { name: "Justin Bieber",  phone: '987 456-9876', address: 'California',  id: 3 }
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
});

app.controller("ShowController", function($scope, $routeParams, $window, Person) {
});