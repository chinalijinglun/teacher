import { baseAxios } from '@/utils/axios';
import store from '@/store';

export const authSmsverifyPost = form => baseAxios.post('/auth/smsverify',form);

export const authEmailverifyPost = form => baseAxios.post('/auth/emailverify',form);

export const authLoginPost = form => {
  form.usertype = store.state.auth.userType;
  return baseAxios.post('/auth/login',form).then(resp => {
    store.commit('auth/setUserName', form.username);
    store.commit('auth/setAuthorization', resp.data.Authorization);
    store.commit('auth/setId', resp.data.id);
    return resp;
  })
};

export const authRegisterPost = form => {
  form.usertype = store.state.auth.userType;
  return baseAxios.post('/auth/register',form).then(resp => {
    store.commit('auth/setUserName', '');
    store.commit('auth/setAuthorization', '');
    store.commit('auth/setId', '');
    return resp;
  })
};

export const authResetpasswordPost = form => {
  form.usertype = store.state.auth.userType;
  return baseAxios.post('/auth/resetpassword',form).then(resp => {
    store.commit('auth/setUserName', '');
    store.commit('auth/setAuthorization', '');
    store.commit('auth/setId', '');
    return resp;
  });
};
