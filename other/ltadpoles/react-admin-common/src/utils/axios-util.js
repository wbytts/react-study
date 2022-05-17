import axios from 'axios';
import { getToken, setToken, removeToken } from './auth.js';

// 创建通用axios实例
const service = axios.create({
  baseURL: '',
  timeout: 5000, // 毫秒
});

// 请求拦截器
service.interceptors.request.use(
  config => {
    const token = getToken();
    config.headers['token'] = token;
    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  },
);

// 响应拦截器
service.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  },
);

export default service;
