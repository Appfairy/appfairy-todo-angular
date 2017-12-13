import TodoItemModule from '.';

TodoItemModule.component('todo-list', {
  template: `
    <af-todo-item-view>
      <span af-plug="check-box" ng-click="toggleCheck()">
        <span af-plug="check" ng-show="checked" />
      </span>
      <span af-plug="todo" ng-style="todoStyle">{{ value }}</span>
      <span af-plug="rm-btn" ng-click="removeTodo(id)" />
    </af-todo-item-view>
  `,
  controller: function ($scope) {
    Object.assign($scope, {
      checked: false,
      todoStyle: {},

      toggleCheck() {
        this.checked = !this.checked;

        this.todoStyle = {
          textDecoration: this.checked ? 'line-through' : ''
        };
      }
    });
  }
});

export default TodoItemModule;
