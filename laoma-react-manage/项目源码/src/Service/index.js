import axios from 'axios';

axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  // 在此判断当前用户是否拥有请求此地址的权限，如果有那么放行，如果没有那么需要
  // 截断此请求
  // 如何判断当前用户是否拥有此请求权限
  console.log(config.url); // 你要请求的url地址。
  // return Promise.reject({msg: '没有权限'});
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

export default {
  userLogin(data) {
    return axios.post('/api/userlogin', data);
  },
  loadUserList(params) {
    params = {...params, ...{_sort: 'id', _order: 'desc'}}
    return axios.get('/per/user', {params: params});
  },
  addUser(data) {
    return axios.post('/per/user', data);
  },
  deleteUser(ids) {
    return Promise.all(ids.map(id => {
      return axios.delete(`/per/user/${id}`);
    }));
  },
  updateUser(user) {
    return axios.put(`/per/user/${user.id}`, user);
  },
  loadRoleList(params) {
    return axios.get('/per/role', {params});
  },
  deleteRoles(ids) {
    return Promise.all(ids.map(id => axios.delete(`/per/role/${id}`)));
  },
  addRole(role) {
    return axios.post('/per/role', role);
  },
  saveRole(role) {
    return axios.put(`/per/role/${role.id}`, role);
  },
  // 权限相关方法
  loadPerList(params) {
    return axios.get('/per/permission', {params});
  },
  // 添加权限的方法
  addPer(per) {
    return axios.post('/per/permission', per);
  },
  // 修改权限
  editPer(per) {
    return axios.put(`/per/permission/${per.id}`, per);
  },
  // 删除权限
  deletePer(ids) {
    return Promise.all(ids.map(id => {
      return axios.delete(`/per/permission/${id}`);
    }));
  },
  // 加载所有的角色信息
  loadAllRoles() {
    return axios.get('/per/role');
  },
  // 加载用户关联的角色信息
  loadUserRoles(userId) {
    return axios.get('/per/user_role', { params: { userId}});
  },
  // 给用户设置关联的角色信息
  addUserRole(userRole) {
    return axios.post('/per/user_role', userRole);
  },
  // 删除用户和角色的关联
  deleteUserRole(id) {
    return axios.delete(`/per/user_role/${id}`);
  },
  // 加载所有的权限数据
  loadAllPer() {
    return axios.get('/per/permission');
  },
  loadRolePer(roleId) {
    return axios.get('/per/role_permission', {params: {roleId}});
  },
  // 添加角色关联权限
  addRolePer(rolePer) {
    return axios.post('/per/role_permission', rolePer);
  },
  // 去掉角色和权限关联
  deleteRolePer(rolePerId) {
    return axios.delete(`/per/role_permission/${rolePerId}`);
  },
  // 加载用户的所有关联的用户权限
  loadUserPer(userId) {
    return axios.get('/per/user_permission', {params: {userId}});
  },
  // 添加用户关联的权限
  addUserPer(userPer) {
    return axios.post('/per/user_permission', userPer);
  },
  // 删除用户关联权限
  deleteUserPer(id) {
    return axios.delete(`/per/user_permission/${id}`);
  },
  // 加载用户的所有权限
  loadUserAllPer(id) {
    return axios.get(`/per/getUserPer/${id}`);
  }
}