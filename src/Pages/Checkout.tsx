import { Box, Grid, Stack } from '@mui/material'
import React, { useState } from 'react'
import Header from '../Components/Header'
import DeliveryDetails from '../Components/Checkout/DeliveryDetails'
import ProductSummary from '../Components/Checkout/ProductSummary'
import { useLocation } from 'react-router-dom'

type Props = {}

const Checkout=({}: Props)=> {
    const location=useLocation()
    const [CheckOutDetails,setCheckOutDetails]=useState<any>({
        mode_of_payment:"METHOD1",
        orders:[],
        total:0
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
            <Stack>
                <Box sx={{height:'95vh',borderBottom:'1px solid #d9d7d0',overflowY:'scroll'}}>
                    <ProductSummary productId={location.state.productId} CheckOutDetails={CheckOutDetails} setCheckOutDetails={setCheckOutDetails}/>
                </Box>
            </Stack>
        </Grid>
    </Grid>
  )
}


export default Checkout