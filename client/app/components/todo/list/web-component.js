import '~/common/todo/list';

import List from '.';
import Angular from 'angular';
import Appfairy from 'appfairy';

class TodoListElement extends Appfairy.Element(HTMLElement) {
  render(container, data) {
    if (this.created) return this._setData(data);

    const component = document.createElement('af-todo-list-view');

    Angular.bootstrap(component, [List.name]);

    container.appendChild(component);

    this.$scope = Angular.element(this.view.shadowRoot).scope();

    this._setData(data);
  }

  _setData(data) {
    Object.assign(this.$scope, data);

    this.$scope.$digest();
  }
}

Appfairy.Element.define('todo-list', TodoListElement);
