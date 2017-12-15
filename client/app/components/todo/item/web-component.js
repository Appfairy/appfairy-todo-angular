import Item from '.';
import Angular from 'angular';
import Appfairy from 'appfairy';
import '~/common/todo/item';

class TodoItemElement extends Appfairy.Element(HTMLElement) {
  get options() {
    return {
      dependent: true,
      useMountPoint: false
    };
  }

  render(container, data) {
    if (this.created) return this._setData(data);

    const component = document.createElement('af-todo-item-view');

    Angular.bootstrap(component, [Item.name]);

    container.appendChild(component);

    this.$scope = Angular.element(this.view.shadowRoot).scope();

    this._setData(data);
  }

  _setData(data) {
    Object.assign(this.$scope, data);

    this.$scope.$digest();
  }
}

Appfairy.Element.define('todo-item', TodoItemElement);
