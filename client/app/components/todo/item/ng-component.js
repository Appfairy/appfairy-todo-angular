import Item from '.';

Item.component('afTodoItemView', {
  template: `
    <span af-plug="check-box" ng-click="toggleCheck()">
      <span af-plug="check" ng-if="checked"></span>
    </span>
    <span af-plug="todo" ng-style="todoStyle">{{ todo.value }}</span>
    <span af-plug="rm-btn" ng-click="removeTodo(todo.id)"></span>
  `,
  controller: function ($scope) {
    Object.assign($scope, {
      checked: false,
      todoStyle: {},

      toggleCheck() {
        $scope.checked = !$scope.checked;

        $scope.todoStyle = {
          textDecoration: $scope.checked ? 'line-through' : ''
        };
      }
    });
  }
});

export default Item;
