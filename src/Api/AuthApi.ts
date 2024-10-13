import axios from "axios";
import { AlertFuntionType, RegisterType } from "../Types/authtypes";
import { pending,success,failure } from "../Store/Slice";
import React from "react";

const url:String=import.meta.env.VITE_AUTH_URL


export const TestRoute=async():Promise<void>=>{
    try{
        await axios.get(`${url}`)
        .then((res)=>{
            console.log(res.data);
            
        })
    }
    catch(error){
        console.log(error);
        
    }
}


export const RegisterApi=async(postdata:RegisterType,setLoading:React.Dispatch<React.SetStateAction<boolean>>,handleAlertOpen:(message:string,severity:string)=>void)=>{
    try {
        setLoading(true)
        await axios.post(`${url}/auth/register`,postdata)
        .then(res=>{
            setLoading(false)
            handleAlertOpen(res.data.message,"success")
        })
    } catch (error:any) {
        setLoading(false)
        handleAlertOpen(error.response?error.response.data.message:"Something went wrong","error")
        
    }
}


export const LoginApi=async(postdata:RegisterType,dispatch:any)=>{
    dispatch(pending());
    try {
        await axios.post(`${url}/auth/login`,postdata)
       .then(res=>{
            dispatch(success(res.data))
            window.location.href="/home"
        })
    } catch (error) {
        console.log(error);
        dispatch(failure());
        
    }
}