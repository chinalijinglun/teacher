import {
  setLocalStorage,
  getLocalStorage
} from '@/utils/localStorage';
import {
  getSession,
  setSession
} from '@/utils/session'

const state = {
  authorization: getLocalStorage('authorization') || getSession('authorization'),
  userName: getLocalStorage('userName') || getSession('userName'),
  userType: 'Teacher',
  id: getLocalStorage('id') || getSession('id')
};

const mutations = {
  setAuthorization(state, {value, keep=true}) {
    keep ? setLocalStorage('authorization', value) : setSession('authorization', value)
    state.authorization = value;
  },
  setUserName(state, {value, keep=true}) {
    keep ? setLocalStorage('userName', value) : setSession('userName', value)
    state.userName = value;
  },
  setId(state, {value, keep=true}) {
    keep ? setLocalStorage('id', value) : setSession('id', value)
    state.id = value;
  }
}

const actions = {
  loginOut(context) {
    context.commit('setAuthorization', {value: ''})
    context.commit('setUserName', {value: ''})
    context.commit('setId', {value: ''})
  }
}

export default {
  state,
  actions,
  mutations,
  namespaced: true
}
