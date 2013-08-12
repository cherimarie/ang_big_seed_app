function MyController($scope){
  $scope.important_information = 'Set in MyController';

  $scope.randomizeCase = function(){
    var array = $scope.important_information.split('');

    for(var i=0; i < array.length; i ++){
      array[i] = Math.round(Math.random()) == 1 ? array[i].toUpperCase(): array[i].toLowerCase();
    };

    $scope.important_information = array.join('');
  }

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