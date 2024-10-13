import { AlertProps } from "@mui/material"

export interface RegisterType{
    username:String,
    password:String
}

export interface AlertType{
    open:boolean,
    message:string|null,
    severity:any,
    handleClose:()=>void
}

export interface AlertFuntionType{
    message:string,
    severity:string,
    
}