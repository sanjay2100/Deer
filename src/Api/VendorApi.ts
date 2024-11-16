import axios from 'axios';
import { PostDataType } from '../Types/VendorRegisterTypes';
import React, { Dispatch, SetStateAction } from 'react';
import { postProduct } from '../Types/ProductTypes';

const url:string=import.meta.env.VITE_AUTH_URL



export const RegisterUserAsVendor=(data:PostDataType,token:string,isLoading:(open:boolean)=>void,handleAlertOpen:(message:string,type:string)=>void,setPostData:(date:PostDataType)=>void,Nav:any)=>{
    try{
        isLoading(true)
        axios.post(`${url}/auth/vendor/register`,data,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
       .then((res)=>{
            isLoading(false)
            handleAlertOpen(res.data.message,"success")
            setPostData({
                name:"",
                mobile:"",
                email:"",
                state:"",
                district:"",
                pincode:"",
                address:""
            })
            setTimeout(()=>{
                Nav("/dashboard")
            },1500)
       })
       .catch((error:any)=>{
            isLoading(false)
            handleAlertOpen(error.response?error.response.data.message:"Something went wrong","error")
            
        })
    }
     catch(error:any){
        isLoading(false)
        handleAlertOpen(error.response?error.response.data.message:"Something went wrong","error")
    }
}


export const AddProduct=async(data:postProduct,setIsLoading:React.Dispatch<SetStateAction<boolean>>,handleAlertOpen:(message:string,type:string)=>void,reset:()=>void)=>{
    try {
        setIsLoading(true)
        await axios.post(`${url}/product/create`,data,{
            headers:{
                Authorization:`Bearer ${sessionStorage.getItem("token")}`
            }
        })
        .then((res)=>{
            setIsLoading(false)
            handleAlertOpen(res.data.message,"success")
            reset()
        })
    } catch (error:any) {
        setIsLoading(false)
        handleAlertOpen(error.response?error.response.data.message:"Something went wrong","error")
    }
}

export const GetUserProduct=async(setData:React.Dispatch<SetStateAction<postProduct>>,setIsLoading:React.Dispatch<SetStateAction<boolean>>,handleAlertOpen:(message:string,type:string)=>void)=>{
    try {
        setIsLoading(true)
        await axios.post(`${url}/product/get_all_products`,{},{
            headers:{
                Authorization:`Bearer ${sessionStorage.getItem("token")}`
            }
        })
        .then((res)=>{
            setIsLoading(false)
            setData(res.data)
        })
    } catch (error:any) {
        setIsLoading(false)
        handleAlertOpen(error.response?error.response.data.message:"Something went wrong","error")
    }
}