function TodoCtrl($scope) {
  $scope.todos = [
    { text: "Check Emails", done: false },
    { text: "Go to gym", done: false }
  ];

  $scope.getTotalTodos = function() {
    return $scope.todos.length;
  };

  $scope.addTodo = function() {
    $scope.todos.push({ text: $scope.formTodoText, done: false });
    $scope.formTodoText = "";
  };

  $scope.clearCompleted = function() {
    $scope.todos = _.filter($scope.todos, function(todo) {
      return !todo.done;
    });
  };
}
