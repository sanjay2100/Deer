

import axios from "axios"
import { SetStateAction } from "react"

const url:string=import.meta.env.VITE_AUTH_URL



export const getProductsByCategory=async(category_id:string,setData:React.Dispatch<SetStateAction<any>>,setIsLoading:React.Dispatch<SetStateAction<boolean>>,page:number)=>{
    try {
        setIsLoading(true)
        await axios.get(`${url}/product/get_product_by_category`,{
            params:{
                id:category_id,
                page:page
            },
            headers:{
                Authorization:`Bearer ${sessionStorage.getItem("token")}`
            }
        })
        .then((res)=>{
            setIsLoading(false)
            setData(res.data)
        })
    } catch (error) {
        setIsLoading(false)
        console.log(error);
        
    }
}


export const getProductById=async(id:string,setData:React.Dispatch<SetStateAction<any>>,setIsLoading:React.Dispatch<SetStateAction<boolean>>,handleErrorOpen:(type:string,message:string)=>void)=>{
    try {
        setIsLoading(true)
        await axios.post(`${url}/product/get_product`,{product_id:id},{
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
        handleErrorOpen("error",error.response?error.response.data.message:"Something went wrong")    
    }
}