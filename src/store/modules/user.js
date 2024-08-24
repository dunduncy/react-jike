// 和用户相关的状态管理

import { request } from '@/utils'
import { createSlice }  from '@reduxjs/toolkit'
import { getToken, setToken as _setToken} from '@/utils'


const userStore = createSlice({
  name:'user',
  // 数据状态
  initialState:{
    token: getToken() || ''
  },
  reducers:{
    setToken(state,action){
      state.token = action.payload
      _setToken(action.payload)
    },
  }
})

// 结构actionCreater
const {setToken} = userStore.actions

// 获取reducer函数
const reducer = userStore.reducer

// 异步方法 完成登录获取token
const fetchLogin = (loginForm)=>{
  return async (dispatch)=>{
    // 1、发送异步请求
    const res = await request.post('/authorizations',loginForm)
    // 2、提交同步action进行token的存入
    dispatch(setToken(res.data.token))
  }
}

export { setToken,fetchLogin }
export default reducer