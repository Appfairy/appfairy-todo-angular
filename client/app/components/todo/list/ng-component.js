import TodoListModule from '.';

TodoListModule.component('todo-list', {
  template: `
    <af-todo-list-view>
      <span af-plug="add-btn" ng-click="onAddBtnClick($event)" />
      <span af-plug="todo-input" ng-keydown="onTodoInputKeyDown" />

      <!-- TODO: Add transitions -->
      <li ng-repeat="todo in todos"
          af-scope="todo"
          data-id="{{ todo.id }}"
          todo-value="{{ todo.value }}"></li>
    </af-todo-list-view>
  `,
  controller: function ($rootScope, $scope, $element) {
    const todoInput = $element.querySelector('[af-plug="todo-input"]');

    Object.assign($scope, {
      todos: [],

      addTodo(todo) {
        this.todos.push({
          id: globalTodoId++,
          value: todo,
        });
      },

      removeTodo(id) {
        const todo = this.todos.find(todo => todo.id == id);

        if (!todo) return;

        const index = this.todos.indexOf(todo);
        this.todos.splice(index, 1);
      },

      submitTodoInput() {
        const value = todoInput.value;

        if (!value) return;

        todoInput.value = '';
        this.addTodo(value);
      },

      onAddBtnClick() {
        this.submitTodoInput();
      },

      onTodoInputKeyDown(e) {
        if (e.key != 'Enter') {
          return;
        }

        this.submitTodoInput();
      },
    });

    Object.assign($rootScope, {
      removeTodo(id) {
        $scope.removeTodo(id);
      }
    });
  }
});
