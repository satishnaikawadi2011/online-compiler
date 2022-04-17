import { BACKEND_DEV_URL } from './../constants/index';
import { create } from 'apisauce';

const apiClient = create({
	baseURL: BACKEND_DEV_URL
});

export default apiClient;
