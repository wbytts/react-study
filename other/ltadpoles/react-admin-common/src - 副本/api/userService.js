import service from '@/utils/axios-util.js';

export default {
  // 登陆接口
  login: (username, password) => service.post('/api/test/login', { username, password }),
  // 获取用户信息
  getUserInfo: () => service.post('/api/test/userInfo'),
};
