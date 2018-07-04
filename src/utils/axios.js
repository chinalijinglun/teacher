import axios from 'axios';
import { baseApiUrl } from '@/config/config';
import { Message } from 'element-ui';
import store from '@/store';
import router from '@/router';

const baseAxios = axios.create({
  baseURL: baseApiUrl,
  headers: {
    Accept: 'application/json; charset=utf-8'
  }
});

baseAxios.interceptors.request.use(config => {
  config.headers['authorization'] = store.state.auth.authorization || '';
  // config.headers['lang'] = 1000000;
  return config;
}, error => {
  return Promise.reject(error);
});

baseAxios.interceptors.response.use(resp => {
  return resp;
}, error => {
  if(error.response.status === 401) {
    router.push('/login');
    return Promise.reject(error);
  }
  if(error.response && error.response.data) {
    Message.error(error.response.data.error || error.response.data.message || 'error');
  }
  return Promise.reject(error);
});

export {
  axios,
  baseAxios,
  baseApiUrl
};
