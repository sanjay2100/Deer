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
    sx={{borderRadius:'10px',padding:1.5,fontWeight:650,backgroundColor:"#252525"}} 
    fullWidth={props.fullWidth}
  
    onClick={props.clickEvent}  
    >{props.value}</Button>
  )
}

export default PrimaryButton