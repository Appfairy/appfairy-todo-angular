import Angular from 'angular';
import 'normalize.css';
import './components';
import './app.css';

const AppModule = Angular.module('app', []);

AppModule.component('app', {
  template: '<af-todo-list></<af-todo-list>'
});

Angular.bootstrap(document, [AppModule]);
