function MyController($scope, $http){
  $http.get('json/people.json').
  success(function(data, status, headers, config){
   $scope.people = data;
  }).
  error(function(data, status, headers, config){
    console.error('Could not load people')
  });
};