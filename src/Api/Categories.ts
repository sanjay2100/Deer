import axios from "axios"
import { CategoryTypes } from "../Types/categoryTypes"
import { SetStateAction } from "react"
import {pending,success} from '../Store/Category'

const url:string=import.meta.env.VITE_AUTH_URL

export const GetCategories=async(setIsLoading:React.Dispatch<React.SetStateAction<boolean>>,setData:React.Dispatch<React.SetStateAction<any>>,handleAlertOpen:(message:string,type:string)=>void,dispatch:any)=>{
    try{
        setIsLoading(true)
        dispatch(pending())
        await axios.get(`${url}/product/categories`,{
            headers:{
                "Authorization":`Bearer ${sessionStorage.getItem("token")}`
            }
        })
        .then((res)=>{
            setData(res.data)
            dispatch(success(res.data))
            setIsLoading(false)
        })
    }
    catch(error:any){
        handleAlertOpen(error.response?error.response.data.error:"Something went wrong","error")
        setIsLoading(false)
    }
    
}

export const AddCategory=async(data:CategoryTypes,setIsLoading:React.Dispatch<SetStateAction<boolean>>,handleAlertOpen:(message:string,type:string)=>void,reset:()=>void)=>{
    console.log("AddCategory",data);

    const fd=new FormData();

    fd.append("name",data.name)
    fd.append("file",data.file)
    
    try {
        setIsLoading(true)
        await axios.post(`${url}/product/category/create`,fd,{
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

export const GetCategoryImage=async(url:string)=>{
    try{
         await axios.get(url,{responseType:"blob",headers:{"Authorization":`Bearer ${sessionStorage.getItem("token")}`}})
        .then((res)=>{
            return res.data
        })
    }
    catch(error:any){
        console.log("Error in GetImage",error);
        return null
    }
}