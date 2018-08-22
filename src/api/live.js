import { baseAxios } from '@/utils/axios';

export const viewCoureware = form => baseAxios.post('/live/preview_doc', form)
