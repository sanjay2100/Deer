import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { useLocation } from 'react-router-dom'
import BackdropLoader from '../Components/Loader'
import AlertSnackBar from '../Components/Alert'
import { getProductById } from '../Api/Products'
import ImageViewer from '../Components/ProductPage/ImageViewer'
import DescriptionSection from '../Components/ProductPage/DescriptionSection'

type Props = {}

 const  ViewProduct=({}: Props)=> {
    const location=useLocation()
    const id=location.state.product_id
    


    const [ProductData,setProductData]=useState<any>(null)
    const [AlertMessage,setAlertMessage]=useState<string>("")
    const [isLoading,setIsLoading]=useState<boolean>(false)
    const [AlertType,setAlertType]=useState<string>("")
    const [AlertOpen,setAlertOpen]=useState<boolean>(false)

    const handleAlerOpen=(type:string,message:string)=>{
        setAlertType(type)
        setAlertMessage(message)
        setAlertOpen(true)
    }
    const handleAlertClose=()=>{
        setAlertOpen(false)
    }


    useEffect(()=>{
        if(id){
            getProductById(id,setProductData,setIsLoading,handleAlerOpen)
        }
    },[id])


  return (
    <Grid container>
        <BackdropLoader open={isLoading}/>
        <AlertSnackBar open={AlertOpen} message={AlertMessage} severity={AlertType} handleClose={handleAlertClose}/>
        <Grid item xs={12}>
          <Header/>
        </Grid>
        <Grid item xl={6} lg={6} md={6} xs={12}>
            <ImageViewer data={ProductData?ProductData.images:null}/>
        </Grid>
        <Grid item xl={6} lg={6} md={6} xs={12}>
            <DescriptionSection data={ProductData?ProductData:null}/>
        </Grid>
      </Grid>
  )
}



export default ViewProduct