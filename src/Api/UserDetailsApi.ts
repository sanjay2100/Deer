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
                        productId:productId
                    }
                })
            }
            else{
                Nav('/checkout',{
                    state:{
                        productId:productId
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