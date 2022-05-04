import Service from "../Service";

// 当前登录用户的sessionStorage的key
const APP_LOGIN_USER = 'APP_LOGIN_USER';

/**
 * 校验当前用户是否已经登录
 * @return { Boolean } 如果已经登录： true， 否则返回false
 */
export function AuthLogin() {
  // sessionStorage 存储当前的登录的信息。
  let loginUserStr = sessionStorage.getItem(APP_LOGIN_USER);
  if(loginUserStr) {
    return true
  }
  return false;
}

/**
 * 存储当前用户登录的信息到本地存储
 * @param {Object} user 
 * @return undefined
 */
export function SaveLoginUserInfo(user) {
  sessionStorage.setItem(APP_LOGIN_USER, JSON.stringify(user));
}

/**
 * 获取当前用户登录的信息
 * @return {Object} user
 */
export function GetLoginUserInfo() {
  let userStr = sessionStorage.getItem(APP_LOGIN_USER);
  if(userStr) {
    return JSON.parse(userStr);
  } 
  return null;
}

/**
 * 当前用户登出，处理后续的相关的信息
 * @return {Object} user
 */
export function Logout() {
 sessionStorage.clear(); // 清空所有的用户登录的相关信息
}

/**
 * 保存用户登录后台的tocken信息
 * @param {String} tocken 请求的身份
 */
export function saveLoginTocken(tocken) {
  sessionStorage.setItem('Authorization', tocken);
}

/**
 * 获取用户登录后台的tocken信息
 * @return {String} tocken 请求的身份
 */
export function getLoginTocken(tocken) {
  return sessionStorage.getItem('Authorization');
}

/** 
 * 获取当前登录用户的所有权限
 * @return {Promise} 对象内部返回当前登录用户的所有权限
*/
export function getLoginUserAllPer() {
  // 拿到当前登录用户的id
  let userId = GetLoginUserInfo().id;
  //  先从缓存中获取当前登录用户的所有权限。如果有直接返回
  let loginUserPerStr = sessionStorage.getItem('LOGIN_USER_PER');
  if(loginUserPerStr) {
    return Promise.resolve(JSON.parse(loginUserPerStr));
  }
  // 如果没有 才发送ajax请求获取当前登录用户的所有权限
  return Service.loadUserAllPer(userId)
    .then(res => {
      sessionStorage.setItem('LOGIN_USER_PER', JSON.stringify(res.data));
      return res.data;
    })
}
