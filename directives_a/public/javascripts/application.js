var app = angular.module("MyApp", []);

app.directive('uppercase', function(){
  return {
    restrict: "A",
    link: function(scope, element, attributes){
      var target = element[0];
      target.innerHTML = target.innerHTML.toUpperCase();
    }
  };
});

app.directive('wrap', function(){
  return {
    restrict: "A",
    link: function(scope, element, attributes){
      var wrap    = attributes['wrap'],
          opening = '<' + wrap + '>',
          closing = '</' + wrap + '>',
          target  = element[0];

      target.innerHTML = [opening, target.innerHTML, closing].join('');
    }
  };
});

app.controller("MyController", function($scope){
});