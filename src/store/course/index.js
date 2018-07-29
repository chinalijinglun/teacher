import {
  teacherMyCourse
} from '@/api/teacher'
import {
  COURSE_GET_BY_ID
} from './actionType'
import {
  getCourseTime
} from '@/utils'

// 字段约束
class Course {
  constructor({
    id = '',
    end = '',
    start = '',
    finish = '',
    course_name = '',
    student_name = '',
    classes_number = ''
  }) {
    this.id = id;
    this.end = end;
    this.start = start;
    this.finish = finish;
    this.course_name = course_name;
    this.student_name = student_name;
    this.classes_number = classes_number;
  }
  get course_progress() {
    return `${this.finish}/${this.classes_number}`
  }
  get course_times() {
    return getCourseTime(this.start, this.end);
  }
}

const state = {
  last_id: '',
  course: new Course({})
};

const COURSE_SET = 'COURSE_SET';

const mutations = {
  [COURSE_SET](state, course) {
    state.last_id = course.id;
    state.course = new Course(course);
  }
}

const actions = {
  [COURSE_GET_BY_ID]({ state, commit }, course_id) {
    if(state.last_id === course_id) {
      return Promise.resolve(state.course)
    }
    return teacherMyCourse({
      course_id,
      page_limit: 1,
      page_no: 1
    }).then(res => {
      const course = res.objects[0];
      commit(COURSE_SET, course)
      return course;
    })
  }
}

export default {
  state,
  actions,
  mutations
}
