import 'normalize.css';
import './app.css';
import './components';

import Angular from 'angular';
import Appfairy from 'appfairy';

Appfairy.config.defaultOptions = {
  useMountPoint: false
};

const AppModule = Angular.module('app', []);

AppModule.component('app', {
  template: '<af-todo-list></<af-todo-list>'
});

Angular.element(document).ready(() => {
  Angular.bootstrap(document.body, [AppModule.name]);
});
