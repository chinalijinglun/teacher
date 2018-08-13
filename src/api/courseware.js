import { baseAxios } from '@/utils/axios';
import { DELETE_FLAG } from "../utils/enums";
import { json2filter } from '../utils/json2filter';

export const coursewareGet = (params, others) => baseAxios.get('/api/v1/courseware', { params: { q: JSON.stringify(params), results_per_page: 10, ...others } });

export const coursewarePost = (form) => baseAxios.post('/api/v1/courseware', form);

export const coursewareDeleteById = (id) => coursewarePutById(id, {delete_flag: DELETE_FLAG.DELETED});

export const coursewareGetById = (id) => baseAxios.get(`/api/v1/courseware/${id}`);

export const coursewarePutById = (id, form) => baseAxios.put(`/api/v1/courseware/${id}`, form);

export const coursewareBareGet = (params, others) => baseAxios.get('/api/v1/_bare/courseware', { params: { q: JSON.stringify(params), results_per_page: 10, ...others } });

export const coursewareBareGetById = (id) => baseAxios.get(`/api/v1/_bare/courseware/${id}`);

export const coursewareCoursePost = (form) => baseAxios.post('/manger/courseware_course', form);

export const uploadCourseware = (form) => baseAxios.post('/teacher/upload_courseware', form);
export const getCourseWareBySchedule = (schedule_id) => {
  const filter = json2filter({
    course_schedule_id: [schedule_id]
  })
  return coursewareBareGet(filter, {
    results_per_page: 10,
    page: 1
  })
}
