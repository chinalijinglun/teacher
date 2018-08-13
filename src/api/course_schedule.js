import { baseAxios } from '@/utils/axios';
import { DELETE_FLAG } from "../utils/enums";

export const courseSchedulePost = (form) => baseAxios.post('/api/v1/course_schedule', form);

export const courseScheduleDeleteById = (id) => courseSchedulePutById(id, {delete_flag: DELETE_FLAG.DELETED});

export const courseScheduleGetById = (id) => baseAxios.get(`/api/v1/course_schedule/${id}`);

export const courseSchedulePutById = (id, form) => baseAxios.put(`/api/v1/course_schedule/${id}`, form);

export const courseScheduleBareGet = (params, others) => baseAxios.get('/api/v1/_bare/course_schedule', { params: { q: JSON.stringify(params), results_per_page: 10, ...others } });

export const courseScheduleBareGetById = (id) => baseAxios.get(`/api/v1/_bare/course_schedule/${id}`);
