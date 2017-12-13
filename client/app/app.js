import Angular from 'angular';
import 'normalize.css';
import './app.css';
import './components';

const AppModule = Angular.module('app', []);

AppModule.component('app', {
  template: '<af-todo-list></<af-todo-list>'
});

Angular.element(document).ready(() => {
  Angular.bootstrap(document.body, [AppModule.name]);
});
