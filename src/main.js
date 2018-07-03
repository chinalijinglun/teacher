// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import './style/index.css';
import fullCalendar from 'vue-fullcalendar'

import selfComponents from './components';
import utils from './utils';
import store from './store';


// import myVueEditor from 'my-vue-editor'
// Vue.use(myVueEditor, options)

Vue.component('full-calendar', fullCalendar)

Vue.use(ElementUI);
Vue.use(selfComponents);
Vue.use(utils);

Vue.config.productionTip = false;

Vue.prototype.$loginOut = function() {
  router.push('/login');
  store.dispatch('auth/loginOut')
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
