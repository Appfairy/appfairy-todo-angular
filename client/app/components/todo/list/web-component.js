import Angular from 'angular';
import Appfairy from 'appfairy';
import { css, html } from '~/common/todo/list';
import TodoListModule from '.';

class TodoListView extends Appfairy.View(HTMLElement) {
  initializeStyle(style) {
    style.innerHTML = css;
  }

  initializeView(view) {
    view.innerHTML = html;
  }
}

Appfairy.View.define('todo-list', TodoListView);

class TodoListElement extends Appfairy.Element(HTMLElement) {
  get childScopes() {
    return {
      todo: {
        removeTodo: (id) => {
          this.$rootScope.removeTodo(id);
        }
      }
    };
  }

  render(container, data) {
    if (this.created) return this.setData(data);

    TodoListModule.run(['$rootScope', ($rootScope) => {
      this.$rootScope = $rootScope;

      this.setData(data);
    }]);

    Angular.bootstrap(container, [TodoListModule]);
  }

  setData(data) {
    Object.assign(this.$rootScope, data);

    if (!this.$rootScope.$$phase) {
      this.$rootScope.$digest();
    }
  }
}

Appfairy.Element.define('todo-list', TodoListElement);
