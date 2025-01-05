import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import BackdropLoader from '../Loader'
import AlertSnackBar from '../Alert'
import { GetVendorOrders } from '../../Api/VendorApi'

type Props = {}

export default function Orders({}: Props) {
    const[Data,setData]=useState<any>(null)
    const[IsLoading,setIsLoading]=useState<boolean>(false)
    const[AlertMessage,setAlertMessage]=useState<string|null>(null)
    const[AlertType,setAlertType]=useState<string>("success")
    const[AlertOpen,setAlertOpen]=useState<boolean>(false)

    const handleAlertOpen=(message:string,type:string)=>{
        setAlertMessage(message)
        setAlertType(type)
        setAlertOpen(true)
    }

    const handleAlertClose=()=>{
        setAlertOpen(false)
    }


    useEffect(()=>{
        GetVendorOrders(setData,setIsLoading,handleAlertOpen)
    },[])


    console.log("Data",Data);
    


  return (
    <Grid container>
        <Grid item xs={12}>
            <BackdropLoader open={IsLoading}/>
            <AlertSnackBar open={AlertOpen} message={AlertMessage} severity={AlertType} handleClose={handleAlertClose}/>
        </Grid>
    </Grid>
  )
}