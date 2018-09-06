import moment from 'moment';
import store from '../store';
import {
  TIME_ZONE
} from './enums'

const DATE_FMT_DEFAULT = 'YYYY-MM-DD HH:mm:ss';
const DATE_NO_TIME_FMT = 'YYYY-MM-DD';

function dateFmt(date, fmt = DATE_FMT_DEFAULT){
  let innerDate = date;
  if(!innerDate instanceof Date) {
    if(typeof innerDate === 'string') {
      innerDate = innerDate.replace(/\-/g,'/');
    }
    innerDate = new Date(innerDate);
  }

  const timezone = TIME_ZONE[store.userinfo.teacher.timezone];
  if(timezone) {
    return moment(innerDate).tz(timezone).format(fmt);
  }

  return moment(innerDate).format(fmt);
}

function dateFactory() {
  const date = new Date(...arguments);

  function getMonDayThisWeek() {
    return this.getThisWeekDateByDay(1);
  }
  function getDayStart() {
    const monthDay = this.getDate();
    const year = this.getFullYear();
    const month = this.getMonth();
    return dateFactory(year, month, monthDay, 0, 0, 0);
  }
  function getThisWeekDateByDay(day) {
    const dayStart = this.getDayStart();
    const weekDay = this.getDay();
    return dateFactory(dayStart.getTime()-(weekDay-day)*24*60*60*1000);
  }
  function dateFmtInner(){
    return dateFmt(this)
  }
  Object.defineProperties(date, {
    dateFmt: {
        value: dateFmtInner,
        configurable: false,
        writable: false,
        enumerable: false
    },
    getDayStart: {
        value: getDayStart,
        configurable: false,
        writable: false,
        enumerable: false
    },
    getMonDayThisWeek: {
        value: getMonDayThisWeek,
        configurable: false,
        writable: false,
        enumerable: false
    },
    getThisWeekDateByDay: {
        value: getThisWeekDateByDay,
        configurable: false,
        writable: false,
        enumerable: false
    },
  })
  return date;
}

export {
  dateFmt,
  dateFactory,
  DATE_FMT_DEFAULT,
  DATE_NO_TIME_FMT
};
