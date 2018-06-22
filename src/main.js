// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import './style/index.css';
import axios from 'axios';
import selfComponents from './components';

import fullCalendar from 'vue-fullcalendar'

// import myVueEditor from 'my-vue-editor'
// Vue.use(myVueEditor, options)

Vue.component('full-calendar', fullCalendar)

Vue.use(ElementUI);
Vue.use(selfComponents);
Vue.config.productionTip = false;

const baseAxios = axios.create({
    baseURL: 'http://39.106.143.18:5000',
    headers: { Accept: 'application/json; charset=utf-8' }
});
Vue.prototype.baseAxios = baseAxios;
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
