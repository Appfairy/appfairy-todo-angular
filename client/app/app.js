import 'normalize.css';
import './app.css';
import './components';

import Angular from 'angular';
import Appfairy from 'appfairy';

Appfairy.config.defaultOptions = {
  useMountPoint: false
};

const AppModule = Angular.module('app', []);

AppModule.filter('hash', () => {
  const accessor = Symbol('hash');

  return (obj, $scope) => {
    const refs = $scope[accessor] = $scope[accessor] || new Map();
    let ref = refs.get(obj);

    if (!ref) {
      ref = new Appfairy.Reference(obj, true);
      refs.set(obj, ref);

      $scope.$on('$destroy', () => {
        ref.dispose();
        refs.delete(obj);
      }, 0, false);
    }

    return ref;
  };
})

AppModule.component('app', {
  template: '<af-todo-list></<af-todo-list>'
});

Angular.element(document).ready(() => {
  Angular.bootstrap(document.body, [AppModule.name]);
});
