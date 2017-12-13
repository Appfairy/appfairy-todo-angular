import Angular from 'angular';
import Appfairy from 'appfairy';
import { css, html } from '~/common/todo/list';
import List from '.';

class TodoListView extends Appfairy.View(HTMLElement) {
  initializeStyle(style) {
    style.innerHTML = css;
  }

  initializeView(view) {
    view.innerHTML = html;
  }

  findNgScope() {
    return Angular.element(this.shadowRoot).scope();
  }
}

Appfairy.View.define('todo-list', TodoListView);

class TodoListElement extends Appfairy.Element(HTMLElement) {
  get options() {
    return {
      useMountPoint: false
    };
  }

  get childScopes() {
    return {
      todo: {
        removeTodo: (id) => {
          this.$scope.removeTodo(id);
          this.$scope.$digest();
        }
      }
    };
  }

  render(container, data) {
    if (this.created) return this._setData(data);

    const component = document.createElement('af-todo-list-view');

    Angular.bootstrap(component, [List.name]);

    container.appendChild(component);

    this.$scope = this.view.findNgScope();

    this._setData(data);
  }

  _setData(data) {
    Object.assign(this.$scope, data);

    this.$scope.$digest();
  }
}

Appfairy.Element.define('todo-list', TodoListElement);
