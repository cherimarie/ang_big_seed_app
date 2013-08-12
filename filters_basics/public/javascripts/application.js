var app = angular.module("MyApp", []);

app.filter('reverse', function() {
  return function(text){
    text = text || "";
    return text.split('').reverse().join('');
  };
});

app.controller('MyController', function($scope){
  $scope.entries = [
    {text: 'One'},
    {text: 'Two'},
    {text: 'Three'},
    {text: 'Four'},
    {text: 'Five'}
  ]
});