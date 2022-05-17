import service from '@/utils/axios-util.js';

export default {
  // 登陆接口
  login: (username, password) => service.post('/api/user/login', { username, password }),
  // 获取用户信息
  getUserInfo: () => service.post('/api/user/userInfo'),
  // 用户注册
  userRegister: params => service.post('/api/user/register', params),
};
