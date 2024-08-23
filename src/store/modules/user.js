// 和用户相关的状态管理

const { createSlice } = require("@reduxjs/toolkit");

const userStore = createSlice({
  name:'user',
  // 数据状态
  initialState:{
    token:''
  },
  reducers:{
    setToken(state,action){
      state.token = action.payload
    },
  }
})

// 结构actionCreater
const {setToken} = userStore.actions

// 获取reducer函数
const reducer = userStore.reducer

export { setToken }
export default reducer