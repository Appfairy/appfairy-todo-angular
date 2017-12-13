import List from '.';

List.component('afTodoListView', {
  template: `
    <span af-plug="add-btn" ng-click="onAddBtnClick()"></span>
    <span af-plug="todo-input" ng-keydown="onTodoInputKeyDown($event)"></span>

    <ul af-plug="todos">
      <li ng-repeat="todo in todos"
          class="todo"
          af-scope="todo"
          data-id="{{ todo.id }}"
          data-value="{{ todo.value }}"></li>
    </ul>
  `,
  controller: function ($scope, $element) {
    const todoInput = $element[0].querySelector('[af-plug="todo-input"]');
    let todoIndex = 0;

    Object.assign($scope, {
      todos: [],

      addTodo(todo) {
        this.todos.push({
          id: todoIndex++,
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
        const value = todoInput.target.value;

        if (!value) return;

        todoInput.target.value = '';
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
  }
});
