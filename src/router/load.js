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
        case 4:
        case 5:
        case 10:
          return '/reservation';
        case 11:
          return '/contract';
        case 20:
          return true;
      }
    }).catch( error => {
      console.log(error)
      return Promise.resolve('/login')
    })
  } else {
    return Promise.resolve('/login')
  }
}

export default load
