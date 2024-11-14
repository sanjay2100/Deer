import axios from "axios"

const url:string=import.meta.env.VITE_AUTH_URL

export const GetCategories=async(setIsLoading:React.Dispatch<React.SetStateAction<boolean>>,setData:React.Dispatch<React.SetStateAction<any>>,handleAlertOpen:(message:string,type:string)=>void)=>{
    try{
        setIsLoading(true)
        await axios.get(`${url}/product/categories`,{
            headers:{
                "Authorization":`Bearer ${sessionStorage.getItem("token")}`
            }
        })
        .then((res)=>{
            setData(res.data)
            setIsLoading(false)
        })
    }
    catch(error:any){
        handleAlertOpen(error.response?error.response.data.error:"Something went wrong","error")
        setIsLoading(false)
    }
    
}