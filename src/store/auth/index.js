import {
  setLocalStorage,
  getLocalStorage
} from '@/utils/localStorage';

const state = {
  authorization: getLocalStorage('authorization'),
  userName: getLocalStorage('userName'),
  userType: 'Teacher',
  id: getLocalStorage('id')
};

const mutations = {
  setAuthorization(state, v) {
    setLocalStorage('authorization', v);
    state.authorization = v;
  },
  setUserName(state, v) {
    setLocalStorage('userName', v);
    state.userName = v;
  },
  setId(state, v) {
    setLocalStorage('id', v);
    state.id = v;
  }
}

const actions = {
  loginOut(context) {
    context.commit('setAuthorization', '')
    context.commit('setUserName', '')
    context.commit('setId', '')
  }
}

export default {
  state,
  actions,
  mutations,
  namespaced: true
}
