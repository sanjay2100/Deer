import axios from "axios";
import { SetStateAction } from "react";


const url:string=import.meta.env.VITE_AUTH_URL


export const CheckUserDetailsStatus=async(productId:string,setIsLoading:React.Dispatch<SetStateAction<boolean>>,handleAlertOpen:(message:string,type:string)=>void,Nav:(route:string,state:object)=>void)=>{
    try{
        setIsLoading(true)
        await axios.post(`${url}/auth/check_user_details`,{},{
            headers:{
                Authorization:`Bearer ${sessionStorage.getItem("token")}`
            }
        })
        .then((res)=>{
            setIsLoading(false)
            if(res.data.available==false){
                Nav('/user_details',{
                    state:{
                        productId:[productId]
                    }
                })
            }
            else{
                Nav('/checkout',{
                    state:{
                        productId:[productId]
                    }
                })
            }
        })
    }
    catch(error:any){
        setIsLoading(false)
        handleAlertOpen(error.response&&error.response.data?error.response.data.message:"Something went wrong","error")
    }
}

export const handlePostUserDetails=async(productId:string,data:any,setIsLoading:React.Dispatch<SetStateAction<boolean>>,handleAlertOpen:(message:string,type:string)=>void,Nav:(route:string,state:object)=>void)=>{
    try{
        setIsLoading(true)
        await axios.post(`${url}/auth/post_user_details`,data,{
            headers:{
                Authorization:`Bearer ${sessionStorage.getItem("token")}`
            }
        })
        .then((res)=>{
            setIsLoading(false)

            handleAlertOpen(res.data.message?res.data.message:"Something went wrong","success")
            setTimeout(()=>{
                Nav('/checkout',{
                    state:{
                        productId:productId
                    }
                })
            },1500)
                
            
        })
    }
    catch(error:any){
        setIsLoading(false)
        handleAlertOpen(error.response&&error.response.data?error.response.data.message:"Something went wrong","error")
    }
}

export const VerifyEmail=async(setIsLoading:React.Dispatch<SetStateAction<boolean>>,email:string,handleAlertOpen:(message:string,type:string)=>void,handleDialogOpen:()=>void)=>{
    try{
        setIsLoading(true)
        await axios.post(`${url}/email/verification/verify_email`,{email:email},{
            headers:{
                Authorization:`Bearer ${sessionStorage.getItem("token")}`
            }
        })
        .then((res)=>{
            setIsLoading(false)
            handleAlertOpen(res.data&&res.data.message?res.data.message:"Otp has been sent to your email","success")
            handleDialogOpen()
        })
    }
    catch(error:any){
        setIsLoading(false)
        handleAlertOpen(error.response&&error.response.data.message?error.response.data.message:"Something went wrong","error")
    }
}

export const VerifyEmailOtp=async(setIsLoading:React.Dispatch<SetStateAction<boolean>>,data:object,handleAlertOpen:(message:string,type:string)=>void,handleDialogclose:()=>void,setOtpVerified:React.Dispatch<SetStateAction<boolean>>)=>{
    try{
        setIsLoading(true)
        await axios.post(`${url}/email/verification/verify_email_otp`,data,{
            headers:{
                Authorization:`Bearer ${sessionStorage.getItem("token")}`
            }
        })
        .then((res)=>{
            setIsLoading(false)
            setOtpVerified(true)
            handleAlertOpen(res.data&&res.data.message?res.data.message:"Email verified successfully","success")
            handleDialogclose()
        })
    }
    catch(error:any){
        setIsLoading(false)
        handleAlertOpen(error.response&&error.response.data.message?error.response.data.message:"Something went wrong","error")
    }
}

export const GetUserDetails=async(setData:React.Dispatch<SetStateAction<any>>,setIsLoading:React.Dispatch<SetStateAction<boolean>>,handleAlertOpen:(message:string,type:string)=>void)=>{
    try{
        setIsLoading(true)
        await axios.post(`${url}/auth/get_user_details`,{},{
            headers:{
                Authorization:`Bearer ${sessionStorage.getItem("token")}`
            }
        })
        .then((res)=>{
            setIsLoading(false)
            setData(res.data)
        })
    }
    catch(error:any){
        setIsLoading(false)
        handleAlertOpen(error.response&&error.response.data.message?error.response.data.message:"Something went wrong","error")
    }
}