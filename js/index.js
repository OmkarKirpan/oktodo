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

  $scope.save2file = function() {
    var data =
      "\t\tTodo List\t\t\n-=x=-=x=-=x=-=x=-=x=-=x=-=x=-=x=-=x=-=x=-=x=-=x=-=x=-=x=-=x=-\n";
    data += "   no. \t status \t todo\n";
    // let { text, done } = $scope.todos;
    $scope.todos.map((item, index) => {
      data += `|\t${index + 1}\t|\t${item.done ? "x" : "-"}\t||\t${
        item.text
      }\t\n`;
    });
    data +=
      "-=x=-=x=-=x=-=x=-=x=-=x=-=x=-=x=-=x=-=x=-=x=-=x=-=x=-=x=-=x=-\n\n\n\t\tDev: Omkar Kirpan\t\t";
    var blob = new Blob([data], { type: "application/text" });
    const url = URL.createObjectURL(blob);
    console.log("url", url);
    console.log("blob", blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "todos.txt";
    a.click();
  };
}
