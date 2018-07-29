import {
    teacherGetBareById
  } from '@/api/teacher'
  
  // 字段约束
  class Teacherinfo {
    constructor({
      id = '',
      username = '',
      avatar = '',
      name = '',
      nickname = ''
    }) {
      this.id = id;
      this.username = username;
      this.avatar = avatar;
      this.name = name;
      this.nickname = nickname;
    }
  }
  
  const state = {
    last_id: '',
    teacher: new Teacherinfo({})
  };
  
  const TEACHER_SET = 'TEACHER_SET';
  
  const mutations = {
    [TEACHER_SET](state, teacher) {
      state.last_id = teacher.id;
      state.teacher = new Teacherinfo(teacher);
    }
  }
  
  const actions = {
    TEACHER_GET_BY_ID({ state, commit }, teacher_id) {
      if(state.last_id === teacher_id) {
        return Promise.resolve(state.teacher)
      }
      return teacherGetBareById(teacher_id).then(res => {
        const teacher = res.data;
        commit(TEACHER_SET, teacher)
        return teacher;
      })
    }
  }
  
  export default {
    state,
    actions,
    mutations
  }
  