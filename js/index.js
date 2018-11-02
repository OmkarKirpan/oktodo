function TodoCtrl($scope) {
  $scope.todos = [
    { text: "Check Emails", done: false },
    { text: "Go to gym", done: false }
  ];

  $scope.getTotalTodos = function() {
    return $scope.todos.length;
  };

  $scope.addTodo = function() {
    if ($scope.formTodoText == "") {
      console.log("Please enter something");
    } else {
      $scope.todos.push({ text: $scope.formTodoText, done: false });
      $scope.formTodoText = "";
    }
  };

  $scope.clearCompleted = function() {
    $scope.todos = _.filter($scope.todos, function(todo) {
      return !todo.done;
    });
  };

  $scope.save2file = function() {
    var data = "serial number,status,todos\n";
    $scope.todos.map((item, index) => {
      data += `${index + 1},${item.done ? "x" : "-"},"${item.text}"\n`;
    });
    data += `\n,Total todos,${$scope.todos.length}`;
    var blob = new Blob([data], { type: "application/text" });
    const url = URL.createObjectURL(blob);
    console.log("url", url);
    console.log("blob", blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "todos.csv";
    a.click();
  };
}
