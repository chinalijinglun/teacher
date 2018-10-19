import {
  teacherGetBareById
} from '@/api/teacher'
import {
  interviewGetBare
} from '@/api/interview'
import {
  json2filter
} from '@/utils/json2filter'

const state = {
  last_id: '',
  teacher: {}
};

const TEACHER_SET = 'TEACHER_SET';

const mutations = {
  [TEACHER_SET](state, teacher) {
    state.last_id = teacher.id;
    state.teacher = teacher;
  }
}

const actions = {
  TEACHER_GET_BY_ID({ state, commit }, teacher_id) {
    return teacherGetBareById(teacher_id).then(res => {
      const teacher = res.data;
      return teacher;
    }).then(teacher => {
      const filter = json2filter({teacher_id: [teacher_id]})
      return interviewGetBare(filter).then(resp => {
        teacher.interview = resp.data.objects[0] || {}
        commit(TEACHER_SET, teacher)
        return teacher
      })
    })
  }
}

export default {
  state,
  actions,
  mutations
}
