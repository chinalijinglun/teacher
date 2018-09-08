import {
  DATE_FMT_DEFAULT,
  DATE_NO_TIME_FMT,
  dateFmt,
  dateFactory
} from './date';
import {
  axios,
  baseAxios,
  baseApiUrl
} from './axios';
import {
  MOBILE_REG_EXP,
  EMAIL_REG_EXP,
  MOBILE_REG_EXP_NATIONAL
} from './regExp';

import {
  setLocalStorage,
  getLocalStorage,
  deleteLocalStorage
} from './localStorage';
import {
  setSession,
  getSession,
  deleteSession
} from './session'

import * as enums from './enums';
import {
  json2filter,
  getNopageQueryParams,
  getQueryParams
} from './json2filter';

function deleteEmptyProps(form) {
  const f = {...form};
  for(let key in form){
    if(f[key] === '') {
      f[key] = undefined;
    }
  }
  return f;
}

function getCourseScheduleTime(start, end) {
  if(!start||!end) {
    return ''
  }
  const day = dateFmt(new Date(start), 'YYYY.MM.DD');
  const timeStart = dateFmt(new Date(start), 'HH:mm');
  const timeEnd = dateFmt(new Date(end), 'HH:mm');
  return day+' '+timeStart+'-'+timeEnd;
}

function getCourseTime(start, end) {
  if(!start||!end) {
    return ''
  }
  const daystart = dateFmt(new Date(start), 'YYYY.MM.DD');
  const dayend = dateFmt(new Date(end), 'MM.DD');
  return daystart+'-'+dayend;
}
const install = (Vue) => {
  Vue.prototype.$dateFmt = dateFmt;
  Vue.prototype.$DATE_FMT_DEFAULT = DATE_FMT_DEFAULT;
  Vue.prototype.$DATE_NO_TIME_FMT = DATE_NO_TIME_FMT;
  Vue.prototype.$dateFactory = dateFactory;
  Vue.prototype.$axios = axios;
  Vue.prototype.$baseAxios = baseAxios;
  Vue.prototype.$baseApiUrl = baseApiUrl;
  Vue.prototype.$MOBILE_REG_EXP = MOBILE_REG_EXP;
  Vue.prototype.$EMAIL_REG_EXP = EMAIL_REG_EXP;
  Vue.prototype.$MOBILE_REG_EXP_NATIONAL = MOBILE_REG_EXP_NATIONAL;
  Vue.prototype.$setLocalStorage = setLocalStorage;
  Vue.prototype.$getLocalStorage = getLocalStorage;
  Vue.prototype.$deleteLocalStorage = deleteLocalStorage;
  Vue.prototype.$json2filter = json2filter;
  Vue.prototype.$getQueryParams = getQueryParams;
  Vue.prototype.$getNopageQueryParams = getNopageQueryParams;
  Vue.prototype.$deleteEmptyProps = deleteEmptyProps;
  Vue.prototype.$getCourseTime = getCourseTime;
  Vue.prototype.$getCourseScheduleTime = getCourseScheduleTime;

  Vue.prototype.$setSession = setSession;
  Vue.prototype.$getSession = getSession;
  Vue.prototype.$deleteSession = deleteSession;

  // enum start
  // 有效状态
  for(let key in enums) {
    Vue.prototype[`$${key}`] = enums[key];
  }

  // enum end

  // 默认每页分页条数
  Vue.prototype.$DEFAULT_LIMIT = 10;
  // 默认每页分页条数
  Vue.prototype.$MINI_LIMIT = 5;
  // 不需要分页的时候的最大数据条数
  Vue.prototype.$NO_PAGE_LIMIT = 100;

  Vue.filter('courseTime', (start, end) => {
    if(!start||!end) {
      return '--'
    }
    const daystart = dateFmt(new Date(start), 'YYYY.MM.DD');
    const dayend = dateFmt(new Date(end), 'MM.DD');
    return daystart+'-'+dayend;
  })
  
  Vue.filter('courseScheduleTime', (start, end) => {
    if(!start||!end) {
      return ''
    }
    const day = dateFmt(new Date(start), 'YYYY.MM.DD');
    const timeStart = dateFmt(new Date(start), 'HH:mm');
    const timeEnd = dateFmt(new Date(end), 'HH:mm');
    return day+' '+timeStart+'-'+timeEnd;
  })

  Vue.filter('hasTime', (value) => {
    if(!value) return ''
    return dateFmt(new Date(value), 'YYYY.MM.DD HH:mm')
  })

  Vue.filter('noTime', (value) => {
    if(!value) return ''
    return dateFmt(new Date(value), 'YYYY.MM.DD')
  })

  Vue.filter('monthFmt', (value) => {
    if(!value) return ''
    return dateFmt(new Date(value), 'YYYY.MM')
  })
}

export {
  getCourseScheduleTime,
  getCourseTime
}

export default {
  install,
  DATE_FMT_DEFAULT,
  DATE_NO_TIME_FMT,
  dateFmt,
  dateFactory,
  axios,
  baseAxios,
  baseApiUrl,
  MOBILE_REG_EXP,
  EMAIL_REG_EXP
}
