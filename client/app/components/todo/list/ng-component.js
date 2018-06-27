import List from '.';

List.component('afTodoListView', {
  template: `
    <span af-plug="add-btn" ng-click="onAddBtnClick()"></span>
    <span af-plug="todo-input" ng-keydown="onTodoInputKeyDown($event)"></span>

    <ul af-plug="todos">
      <li ng-repeat="todo in todos"
          class="todo"
          data-todo="{{ todo | hash }}"
          data-remove-todo="{{ removeTodo | hash }}"></li>
    </ul>
  `,
  controller: function ($scope, $element) {
    const todoInput = $element[0].querySelector('[af-plug="todo-input"]');
    let todoIndex = 0;

    Object.assign($scope, {
      todos: [],

      addTodo(todo) {
        $scope.todos.push({
          id: todoIndex++,
          value: todo,
        });
      },

      removeTodo(id) {
        const todo = $scope.todos.find(todo => todo.id == id);

        if (!todo) return;

        const index = $scope.todos.indexOf(todo);

        $scope.todos.splice(index, 1);
        $scope.$digest();
      },

      submitTodoInput() {
        const value = todoInput.target.value;

        if (!value) return;

        todoInput.target.value = '';
        $scope.addTodo(value);
      },

      onAddBtnClick() {
        $scope.submitTodoInput();
      },

      onTodoInputKeyDown(e) {
        if (e.key != 'Enter') {
          return;
        }

        $scope.submitTodoInput();
      },
    });
  }
});
