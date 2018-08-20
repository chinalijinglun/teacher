import { baseAxios } from '@/utils/axios';
import store from '@/store';

export const authSmsverifyPost = form => baseAxios.post('/auth/smsverify',form);

export const authEmailverifyPost = form => baseAxios.post('/auth/emailverify',form);

export const authLoginPost = (form, keep) => {
  form.usertype = store.state.auth.userType;
  return baseAxios.post('/auth/login',form).then(resp => {
    store.commit('auth/setUserName', {value: ''});
    store.commit('auth/setAuthorization', {value: ''});
    store.commit('auth/setId', {value: ''});
    store.commit('auth/setUserName', {value: form.username, keep});
    store.commit('auth/setAuthorization', {value: resp.data.Authorization, keep});
    store.commit('auth/setId', {value: resp.data.id, keep});
    return resp;
  })
};

export const authRegisterPost = form => {
  form.usertype = store.state.auth.userType;
  return baseAxios.post('/auth/register',form).then(resp => {
    store.commit('auth/setUserName', {value: ''});
    store.commit('auth/setAuthorization', {value: ''});
    store.commit('auth/setId', {value: ''});
    store.commit('auth/setUserName', {value: form.username, keep: true});
    store.commit('auth/setAuthorization', {value: resp.data.Authorization, keep: true});
    store.commit('auth/setId', {value: resp.data.id, keep: true});
    return resp;
  })
};

export const authResetpasswordPost = form => {
  form.usertype = store.state.auth.userType;
  return baseAxios.post('/auth/resetpassword',form).then(resp => {
    store.commit('auth/setUserName', {value: ''});
    store.commit('auth/setAuthorization', {value: ''});
    store.commit('auth/setId', {value: ''});
    return resp;
  });
};
