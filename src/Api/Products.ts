

import axios from "axios"
import { SetStateAction } from "react"

const url:string=import.meta.env.VITE_AUTH_URL



export const getProductsByCategory=async(category_id:string,setData:React.Dispatch<SetStateAction<any>>,setIsLoading:React.Dispatch<SetStateAction<boolean>>)=>{
    try {
        setIsLoading(true)
        await axios.get(`${url}/product/get_product_by_category`,{
            params:{
                id:category_id
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