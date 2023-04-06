import axios from 'axios';

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL =
	'https://rickandmortyapi.com/api/';

export default axiosInstance;
