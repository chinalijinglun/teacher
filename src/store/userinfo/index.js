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
      nickname = '',
      about_me = '',
      ancestral = '',
      award_url = '',
      birth = '',
      city = '',
      class_token = '',
      contract = '',
      contract_url = '',
      country = '',
      created_at = '',
      cur_country = '',
      cur_grade = '',
      cur_province = '',
      cur_school = '',
      cur_zone = '',
      degree = '',
      education_history = '',
      email = '',
      experience_sharing = '',
      first_name = '',
      graduation_school = '',
      home_address = '',
      level = '',
      middle_name = '',
      mobile = '',
      nation = '',
      password = '',
      province = '',
      race = '',
      resume_url = '',
      seniority_url = '',
      skype_account = '',
      social_token = '',
      state = '',
      street = '',
      teacher_age = '',
      teaching_history = '',
      timezone = '',
      updated_by = '',
      user_tag = '',
      verify_type = '',
      video_url = '',
      zipone = ''
    }) {
      this.id = id;
      this.username = username;
      this.avatar = avatar;
      this.name = name;
      this.nickname = nickname;
      this.about_me = about_me;
      this.ancestral = ancestral;
      this.award_url = award_url;
      this.birth = birth;
      this.city = city;
      this.class_token = class_token;
      this.contract = contract;
      this.contract_url = contract_url;
      this.country = country;
      this.created_at = created_at;
      this.cur_country = cur_country;
      this.cur_grade = cur_grade;
      this.cur_province = cur_province;
      this.cur_school = cur_school;
      this.cur_zone = cur_zone;
      this.degree = degree;
      this.education_history = education_history;
      this.email = email;
      this.experience_sharing = experience_sharing;
      this.first_name = first_name;
      this.graduation_school = graduation_school;
      this.home_address = home_address;
      this.level = level;
      this.middle_name = middle_name;
      this.mobile = mobile;
      this.nation = nation;
      this.password = password;
      this.province = province;
      this.race = race;
      this.resume_url = resume_url;
      this.seniority_url = seniority_url;
      this.skype_account = skype_account;
      this.social_token = social_token;
      this.state = state;
      this.street = street;
      this.teacher_age = teacher_age;
      this.teaching_history = teaching_history;
      this.timezone = timezone;
      this.updated_by = updated_by;
      this.user_tag = user_tag;
      this.verify_type = verify_type;
      this.video_url = video_url;
      this.zipone = zipone;
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
  