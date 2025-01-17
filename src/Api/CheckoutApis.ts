import axios from "axios"
import { SetStateAction } from "react"


const url=import.meta.env.VITE_AUTH_URL

type PostData={
    product_ids:string[]
}

type CheckOutPost={
    paymentmethod:string,
    orders:any[],
    total:number
}


export const GetAllProductWithList=async(data:PostData,setIsLoading:React.Dispatch<SetStateAction<boolean>>,handleAlertOpen:(message:string,type:string)=>void,setData:React.Dispatch<SetStateAction<any>>)=>{
    try {
        setIsLoading(true)
        await axios.post(`${url}/product/get_all_products_list`,data,{
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
        handleAlertOpen(error.response&&error.response.data.message?error.response.data.message:"Something went wrong","error")
    }
}

export const PostOrder=async(data:CheckOutPost,setIsLoading:React.Dispatch<SetStateAction<boolean>>,handleAlertOpen:(message:string,type:string)=>void,Nav:(route:string)=>void)=>{
    try{
        setIsLoading(true)
        await axios.post(`${url}/order/placeorder`,data,{
            headers:{
                Authorization:`Bearer ${sessionStorage.getItem("token")}`
            }
        })
        .then((res)=>{
            setIsLoading(false)
            handleAlertOpen(res.data.message,"success")
            setTimeout(()=>{
                Nav("/dashboard")
            },1500)
        })
    }
    catch(error:any){
        setIsLoading(false)
        handleAlertOpen(error.response&&error.response.data.message?error.response.data.message:"Something went wrong","error")
    }
}