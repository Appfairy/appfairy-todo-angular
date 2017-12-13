import Item from '.';

Item.component('afTodoItemView', {
  template: `
    <span af-plug="check-box" ng-click="toggleCheck()">
      <span af-plug="check" ng-if="checked"></span>
    </span>
    <span af-plug="todo" ng-style="todoStyle">{{ value }}</span>
    <span af-plug="rm-btn" ng-click="removeTodo(id)"></span>
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

export default Item;
