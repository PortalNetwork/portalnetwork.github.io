import 'babel-polyfill';
import Vue from 'vue';
import App from 'App';
import './scss/global/global.scss';
new Vue({
  el: '#app',
  render: h => h(App),
});