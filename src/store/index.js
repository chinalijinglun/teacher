import Vue from 'vue';
import Vuex from 'vuex';
import auth from './auth';
import course from './course';
import userinfo from './userinfo';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    auth,
    course,
    userinfo
  },
  strict: process.env.NODE_ENV !== 'production'
});

export default store;
