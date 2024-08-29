// 和用户相关的状态管理

import { request } from '@/utils'
import { createSlice }  from '@reduxjs/toolkit'
import { clearToken,getToken, setToken as _setToken} from '@/utils'
import { getProfileApi, loginApi } from '@/apis/user'


const userStore = createSlice({
  name:'user',
  // 数据状态
  initialState:{
    token: getToken() || '',
    userInfo: {}
  },
  reducers:{
    setToken(state,action){
      state.token = action.payload
      _setToken(action.payload)
    },
    setUserInfo (state, action) {
      state.userInfo = action.payload
    },
    clearUserInfo (state) {
      state.token = ''
      state.userInfo = {}
      clearToken()
    }
  }
})

// 结构actionCreater
const {setToken,setUserInfo,clearUserInfo} = userStore.actions

// 获取reducer函数
const reducer = userStore.reducer

// 异步方法 完成登录获取token
const fetchLogin = (loginForm)=>{
  return async (dispatch)=>{
    // 1、发送异步请求
    const res = await loginApi(loginForm)
    // 2、提交同步action进行token的存入
    dispatch(setToken(res.data.token))
  }
}

// 获取个人用户信息异步方法
const fetchUserInfo = () => {
  return async (dispatch) => {
    const res = await getProfileApi()
    dispatch(setUserInfo(res.data))
  }
}

export { setToken,fetchLogin,fetchUserInfo,clearUserInfo }
export default reducer