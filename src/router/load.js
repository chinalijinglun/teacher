import store from '../store'
// import { whiltPath } from '../config/config'

// function getCurPath() {
//   const hash = location.hash;
//   const regExp = /\#([^\#\?]+)\??/;
//   if(hash) {
//     const res = regExp.exec(hash)
//     return res[1]
//   }
//   return ''
// }

function load(needValid) {
  const {
    authorization,
    id
  } = store.state.auth
  if (!needValid) return Promise.resolve(true)
  if(authorization && id) {
    return store.dispatch('TEACHER_GET_BY_ID', id).then( teacher => {
      const {
        state
      } = teacher;

      // const path = getCurPath();
      // if(whiltPath.indexOf(path) !== -1) {
      //   return true;
      // }

      // console.log(teacher)
      
      switch (state) {
        case 1: 
        case 2:
          return '/basic';
        case 3:
        case 5:
          return '/afterSubmit';
        case 4:
          if(teacher.interview && teacher.interview.state !== 1) {
            return '/reservation';
          }
          return '/afterSubmit';
        case 10:
          return '/reservation-result';
        case 11:
          if(teacher.contract_url) {
            return '/contract';
          }
          return '/reservation-result'
        case 20:
        default:
          if(!teacher.skype_account) {
            return '/completeInfo'
          }
          return true;
      }
    }).catch( error => {
      return Promise.resolve('/login')
    })
  } else {
    return Promise.resolve('/login')
  }
}

export default load
