import { createSlice, configureStore } from '@reduxjs/toolkit'

interface user_info{
    token:string,
    isLoggedIn:boolean,
    username:string,
 
}

interface state_type{user_info:user_info}

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user_info: {
        token:'',
        isLoggedIn:false,
        username:''
    }
  },
  reducers: {
    pending: (state:state_type) => {
     
      state.user_info.isLoggedIn=false
      state.user_info.username=''
      state.user_info.token=''
    },
    success: (state:state_type,payload:any) => {
        console.log("payload",payload);
        
      state.user_info.token=payload.payload.token
      state.user_info.isLoggedIn=true
      
    
    },
    failure:(state:state_type)=>{
        state.user_info.isLoggedIn=false
        state.user_info.username=''
    }
  }
})


export const { pending, success,failure } = userSlice.actions
export default userSlice.reducer 
