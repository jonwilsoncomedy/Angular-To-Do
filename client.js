angular.module('funTimeApp', []);

//declare a controller
angular.module('funTimeApp').controller('MainController', function($scope){
  $scope.itemToDo = "Add an Item To Do";
  $scope.toDoList = [];
  $scope.handleClick = function(){
   $scope.toDoList.push($scope.itemToDo);
  }

})
