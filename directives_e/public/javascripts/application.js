var app = angular.module("MyApp", []);

app.directive('crazyPanel', function(){
  return {
    restrict: "E",
    link: function(scope, element, attributes){
      var target = element[0],
          innerHTML = target.innerHTML,
          arr = [],
          colors = ['red', 'green', 'blue', 'black', 'orange'];

      angular.forEach(innerHTML.split(''), function(c, key){
        arr.push("<span style='color: " + colors[key%colors.length] + "'>" + c + "</span>");
      });

      target.innerHTML = arr.join('');
    }
  };
});

app.controller("MyController", function($scope){
});