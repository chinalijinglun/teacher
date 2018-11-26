// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import './style/index.css';
import 'vue2-event-calendar/default.css';
import Calendar from 'vue2-event-calendar';
import selfComponents from './components';
import utils from './utils';
import store from './store';
import load from './router/load';
import './style/correct.css';
import locale from 'element-ui/lib/locale/lang/en'
Vue.component('Calendar', Calendar)

Vue.use(ElementUI, { locale })
Vue.use(selfComponents);
Vue.use(utils);

Vue.config.productionTip = false;

Vue.prototype.$loginOut = function() {
  router.push('/login');
  store.dispatch('auth/loginOut')
}
const whiltPage = [
  '/login',
  '/regist',
  '/reset',
  '/en/index',
  '/en/about',
  '/en/course',
  '/'
]
const needSign = [
  '/center',
  '/common/contract'
]

router.beforeEach((to, from, next) => {
  if (whiltPage.indexOf(to.path) !== -1) {
    return next()
  } else if (needSign.indexOf(to.path) !== -1) {
    if(store.state.userinfo.teacher.state >= 20) {
      return next()
    } else {
      return next(false)
    }
  }
  return next()
})

function getCurPath() {
  const hash = location.hash;
  const regExp = /\#([^\#\?]+)\??/;
  if(hash) {
    const res = regExp.exec(hash)
    return res[1]
  }
  return ''
}

load(whiltPage.indexOf(getCurPath()) === -1).then(url => {
  if(url !== true) {
    router.push(url)
  }
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
  });
})
