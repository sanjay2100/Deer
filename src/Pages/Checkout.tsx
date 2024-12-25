import { Grid } from '@mui/material'
import React, { useState } from 'react'
import Header from '../Components/Header'
import DeliveryDetails from '../Components/Checkout/DeliveryDetails'
import ProductSummary from '../Components/Checkout/ProductSummary'
import { useLocation } from 'react-router-dom'

type Props = {}

const Checkout=({}: Props)=> {
    const location=useLocation()
    const [CheckOutDetails,setCheckOutDetails]=useState<any>({
        mode_of_payment:"METHOD1"
    })

    const handleChangeCheckoutDetails=(field:string,value:string)=>{
        setCheckOutDetails({...CheckOutDetails,[field]:value})
    }

    console.log(location);
    
  return (
    <Grid container>
        <Grid item xs={12}>
            <Header/>
        </Grid>
        <Grid item md={6}>
            <DeliveryDetails mode_of_payment={CheckOutDetails.mode_of_payment} setChechoutDetails={setCheckOutDetails} handleChangeCheckoutDetails={handleChangeCheckoutDetails}/>
        </Grid>
        <Grid item md={6}>
            <ProductSummary productId={location.state.productId}/>
        </Grid>
    </Grid>
  )
}


export default Checkout