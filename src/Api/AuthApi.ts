import axios from "axios";
import {  RegisterType } from "../Types/authtypes";
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


export const RegisterApi=async(postdata:RegisterType,setLoading:React.Dispatch<React.SetStateAction<boolean>>,handleAlertOpen:(message:string,severity:string)=>void,Nav:(route:string)=>void)=>{
    try {
        setLoading(true)
        await axios.post(`${url}/auth/register`,postdata)
        .then(res=>{
            setLoading(false)
            handleAlertOpen(res.data.message,"success")
            setTimeout(()=>{
                Nav("/")
            },2500)
        })
    } catch (error:any) {
        setLoading(false)
        handleAlertOpen(error.response?error.response.data.message:"Something went wrong","error")
        
    }
}


export const LoginApi=async(postdata:RegisterType,dispatch:any,handleAlertOpen:(message:string,type:string)=>void,setLoading:React.Dispatch<React.SetStateAction<boolean>>,Nav:any)=>{
    dispatch(pending());
    try {
        setLoading(true)
        await axios.post(`${url}/auth/login`,postdata)
       .then(res=>{
            setLoading(false)
            dispatch(success(res.data))
            handleAlertOpen(res.data.message,"success")
            sessionStorage.setItem("token",res.data.token)
            sessionStorage.setItem("role",res.data.role)
            setTimeout(()=>{
                if(res.data.role==="user"){
                    Nav("/home")
                }
                else{
                    Nav("/dashboard")
                }
                
            },1500)
        })
    } catch (error:any) {
        // console.log(error);
        setLoading(false)
        handleAlertOpen(error.response?error.response.data.message:"Something went wrong","error")
        dispatch(failure());
        
    }
}