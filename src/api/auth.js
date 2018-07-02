import { baseAxios } from '@/utils/axios';
import store from '@/store';

export const authSmsverifyPost = form => baseAxios.post('/auth/smsverify',form);

export const authEmailverifyPost = form => baseAxios.post('/auth/emailverify',form);

export const authLoginPost = form => {
  form.usertype = store.state.auth.userType;
  return baseAxios.post('/auth/login',form).then(resp => {
    store.commit('auth/setUserName', form.username);
    store.commit('auth/setAuthorization', resp.data.Authorization);
    return resp;
  })
};

export const authRegisterPost = form => baseAxios.post('/auth/register',form).then(resp => {
  store.commit('auth/setUserName', '');
  store.commit('auth/setAuthorization', '');
  return resp;
});

export const authResetpasswordPost = form => baseAxios.post('/auth/resetpassword',form).then(resp => {
  store.commit('auth/setUserName', '');
  store.commit('auth/setAuthorization', '');
  return resp;
});
