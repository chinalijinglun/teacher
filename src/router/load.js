import store from '../store'
function load() {
  const {
    authorization,
    id
  } = store.state.auth
  if(authorization && id) {
    return store.dispatch('TEACHER_GET_BY_ID', id).then( teacher => {
      const {
        state
      } = teacher;
      switch (state) {
        case 1: 
        case 2:
          return '/basic';
        case 3:
        case 5:
          return '/afterSubmit';
        case 4:
          console.log(teacher.interview)
          if(teacher.interview && teacher.interview.state !== 1) {
            return '/reservation';
          }
          return '/afterSubmit';
        case 10:
          return '/reservation1';
        case 11:
          return '/contract';
        case 20:
        default:
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
