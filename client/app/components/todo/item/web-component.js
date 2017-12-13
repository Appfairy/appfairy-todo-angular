import Angular from 'angular';
import Appfairy from 'appfairy';
import { css, html } from '~/common/todo/item';
import TodoItemModule from '.';

class TodoItemView extends Appfairy.View(HTMLElement) {
  initializeStyle(style) {
    style.innerHTML = css;
  }

  initializeView(view) {
    view.innerHTML = html;
  }
}

Appfairy.View.define('todo-item', TodoItemView);

class TodoItemElement extends Appfairy.Element(HTMLElement) {
  get options() {
    return {
      dependent: true
    };
  }

  render(container, data) {
    if (this.created) return this.setData(data);

    const component = document.createElement('todo-item');
    container.appendChild(component);

    TodoItemModule.run(['$rootScope', ($rootScope) => {
      this.$rootScope = $rootScope;

      this.setData(data);
    }]);

    Angular.bootstrap(container, [TodoItemModule.name]);
  }

  setData(data) {
    Object.assign(this.$rootScope, data);

    if (!this.$rootScope.$$phase) {
      this.$rootScope.$digest();
    }
  }
}

Appfairy.Element.define('todo-item', TodoItemElement);
