import axiosConfig from 'axios';
import { loadProgressBar } from 'axios-progress-bar';
import 'axios-progress-bar/dist/nprogress.css';

axiosConfig.defaults.baseURL = '/api'

axiosConfig.interceptors.response.use((response) => {
    if (response.status === 200) {
        return response.data;
    }
}, (error) => {
    return Promise.reject(error)
});
loadProgressBar();
export default axiosConfig;