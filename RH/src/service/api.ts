import axios from 'axios';

const api = axios.create({
    baseURL: 'https://backend-facilitarh-production.up.railway.app/'
  });

export default api;
