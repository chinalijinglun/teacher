import { baseAxios } from '@/utils/axios';
import { DELETE_FLAG } from "../utils/enums";

export const teacherGet = (params, options) => baseAxios.get('/api/v1/teacher', { params: { q: JSON.stringify(params),results_per_page: 10,...options } });
export const teacherGetBare = (params, options) => baseAxios.get('/api/v1/_bare/teacher', { params: { q: JSON.stringify(params),results_per_page: 10,...options } });

export const teacherPost = (form) => baseAxios.post('/api/v1/teacher', form);

export const teacherGetByTeacherid = (teacherid) => baseAxios.get(`/api/v1/teacher/${teacherid}`);

export const teacherGetBareById = (teacherid) => baseAxios.get(`/api/v1/_bare/teacher/${teacherid}`);

export const teacherPutByTeacherid = (teacherid, form) => baseAxios.put(`/api/v1/teacher/${teacherid}`, form);

export const teacherDeleteByTeacherid = (teacherid) => teacherPutByTeacherid(teacherid, {delete_flag: DELETE_FLAG.DELETED});

export const teacherMyCourse = (form) => baseAxios.post('/teacher/my_course', form);

export const teacherMyCourseOff = (form) => baseAxios.post('/teacher/my_course_off', form);

export const teacherMyCourseOn = (form) => baseAxios.post('/teacher/my_course_on', form);

export const teacherMyCourseResult = (form) => baseAxios.post('/teacher/my_course_result', form);

export const teacherViewHomework = (form) => baseAxios.post('/teacher/view_homework', form);

export const mySchedule = (form) => baseAxios.post('/teacher/my_schedule', form);

export const createHomework = (form) => baseAxios.post('/teacher/create_homework', form);

export const teacherApplyStudents = (form) => baseAxios.post('/teacher/apply_students', form);

export const teacherAcceptStudents = (form) => baseAxios.post('/teacher/accept_students', form);

export const teacherCourseRoom = (course_schedule_id) => baseAxios.post('/teacher/get_enter_room_url', {course_schedule_id});

export const previewDoc = (course_schedule_id) => baseAxios.post('/teacher/get_preview_doc', {course_schedule_id, page_limit: 10, page_no: 1});

export const checkHomeworkLs = () => baseAxios.post('/teacher/check_homework', {page_limit: 10, page_no: 1})

export const teacherSubject = form => baseAxios.post('/teacher/subject', {page_no: 1, page_limit: 1000, ...form})
