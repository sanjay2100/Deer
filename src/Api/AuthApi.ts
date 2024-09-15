import axios from "axios";
import { RegisterType } from "../Types/authtypes";

const url:String=import.meta.env.VITE_AUTH_URL



export const RegisterApi=async(postdata:RegisterType)=>{
    try {
        await axios.post(`${url}/auth/register`,postdata)
        .then(res=>{
            res.data
        })
    } catch (error) {
        console.log(error);
        
    }
}