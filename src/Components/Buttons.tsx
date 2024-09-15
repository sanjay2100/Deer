import { Button } from '@mui/material'
import React from 'react'

interface ButtonInterface{
  value:string
  fullWidth:boolean
  clickEvent:()=>void
}

const PrimaryButton:React.FC<ButtonInterface>=(props)=> {
  return (
    <Button 
    variant='contained' 
    sx={{borderRadius:'10px',padding:1.2,fontWeight:650,backgroundColor:"#6d28d9"}} 
    fullWidth={props.fullWidth}
    color='secondary'
    onClick={props.clickEvent}  
    >{props.value}</Button>
  )
}

export default PrimaryButton