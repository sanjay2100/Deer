import { createSlice } from "@reduxjs/toolkit";





const categorySlice=createSlice({
    name:"category",
    initialState:{
        categories:[]
    },
    reducers:{
        pending:(state)=>{
            state.categories=[]
        },
        success:(state,payload:any)=>{
            state.categories=payload
        }
    }
})


export const {pending,success}=categorySlice.actions
export default categorySlice.reducer