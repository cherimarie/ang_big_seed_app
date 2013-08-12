function MyController($scope){
  $scope.items = [
    {text: 'Initialized in the controller'},
    {text: 'Also Initialized in the controller'}
  ];

  $scope.addItem = function(){
    $scope.items.push({text: $scope.itemText});
    $scope.itemText = '';
  };

  $scope.clearItems = function(){
    $scope.itemText = '';
    $scope.items = [];
  }
}