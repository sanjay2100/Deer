import axios from "axios";
import { RegisterType } from "../Types/authtypes";
import { pending,success,failure } from "../Store/Slice";

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


export const LoginApi=async(postdata:RegisterType,dispatch:any)=>{
    dispatch(pending());
    try {
        await axios.post(`${url}/auth/login`,postdata)
       .then(res=>{
            dispatch(success(res.data))
        })
    } catch (error) {
        console.log(error);
        dispatch(failure());
        
    }
}