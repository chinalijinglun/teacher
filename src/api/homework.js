import { baseAxios } from '@/utils/axios';
import { DELETE_FLAG } from "../utils/enums";

export const homeworkGet = (params, options) => baseAxios.get('/api/v1/homework', { params: { q: JSON.stringify(params),results_per_page: 10,...options } });

export const homeworkGetBare = (params, options) => baseAxios.get('/api/v1/_bare/homework', { params: { q: JSON.stringify(params),results_per_page: 10,...options } });

export const homeworkPost = (form) => baseAxios.post('/api/v1/homework', form);

export const homeworkGetByhomeworkid = (homeworkid) => baseAxios.get(`/api/v1/_bare/homework/${homeworkid}`);

export const homeworkPutByhomeworkid = (homeworkid, form) => baseAxios.put(`/api/v1/homework/${homeworkid}`, form);

export const homeworkDeleteByhomeworkid = (homeworkid) => homeworkPutByhomeworkid(homeworkid, {delete_flag: DELETE_FLAG.DELETED});

export const homeworkResult = (form) => baseAxios.post('/manger/homework_result', form);
