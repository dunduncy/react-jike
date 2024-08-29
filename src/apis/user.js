// 用户相关的所有请求

const { request } = require("@/utils");

//1、登录请求
export function loginApi(formData){
  return request({
    url:'/authorizations',
    method:'POST',
    data:formData
  })
}

// 1、获取用户信息
export function getProfileApi(){
  return request({
    url:'/user/profile',
    method:'get',
  })
}