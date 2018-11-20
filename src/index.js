import 'babel-polyfill';
import 'es6-promise';
import 'es6-object-assign';
import Vue from 'vue'
import VueRouter from 'vue-router';
import route from './route';
import App from 'App';
import AOS from 'aos'
import 'aos/dist/aos.css'

import './scss/global.scss';

const router = new VueRouter(route);
Vue.use(VueRouter);

new Vue({
  el: '#app',
  router,
  created () {
    AOS.init()
  },
  render: h => h(App)
});