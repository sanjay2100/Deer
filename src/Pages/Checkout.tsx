import { Box, Grid, Stack } from '@mui/material'
import React, { useState } from 'react'
import Header from '../Components/Header'
import DeliveryDetails from '../Components/Checkout/DeliveryDetails'
import ProductSummary from '../Components/Checkout/ProductSummary'
import { useLocation, useNavigate } from 'react-router-dom'
import BackdropLoader from '../Components/Loader'
import AlertSnackBar from '../Components/Alert'
import { PostOrder } from '../Api/CheckoutApis'

type Props = {}

const Checkout=({}: Props)=> {
    const location=useLocation()
    const [CheckOutDetails,setCheckOutDetails]=useState<any>({
        paymentmethod:"METHOD1",
        orders:[],
        total:0
    })
    const [IsLoading, setIsLoading] = useState<boolean>(false)
    const [AlertMessage, setAlertMessage] = useState<null | string>(null)
    const [AlertType, setAlertType] = useState<null | string>(null)
    const [AlertOpen, setAlertOpen] = useState<boolean>(false)
    const Nav=useNavigate()


    const handleAlertClose = () => {
        setAlertOpen(false)
    }

    const handleAlertOpen = (message: string, type: string) => {
        setAlertMessage(message)
        setAlertType(type)
        setAlertOpen(true)
    }

    const handleChangeCheckoutDetails=(field:string,value:string)=>{
        setCheckOutDetails({...CheckOutDetails,[field]:value})
    }

    console.log(location);

    const handleSubmit=()=>{
       let total= CheckOutDetails.orders.length>0? CheckOutDetails.orders.reduce((acc:number,item:{quantity:number,price:number})=>acc+(item.quantity  * item.price),0):0
       let updated={...CheckOutDetails,total:total}
        setCheckOutDetails(updated)
        PostOrder(CheckOutDetails,setIsLoading,handleAlertOpen,Nav)
        
    }
    
  return (
    <Grid container>
        <BackdropLoader open={IsLoading} />
            <AlertSnackBar open={AlertOpen} message={AlertMessage} severity={AlertType} handleClose={handleAlertClose} />
        <Grid item xs={12}>
            <Header/>
        </Grid>
        <Grid item md={6} sx={{height:'95vh'}}>
            <DeliveryDetails paymentmethod={CheckOutDetails.paymentmethod} setChechoutDetails={setCheckOutDetails} handleChangeCheckoutDetails={handleChangeCheckoutDetails}/>
        </Grid>
        <Grid item md={6}>
            <Stack>
                <Box sx={{height:'95vh',overflowY:'scroll'}}>
                    <ProductSummary productId={location.state.productId} CheckOutDetails={CheckOutDetails} setCheckOutDetails={setCheckOutDetails} handleSubmit={handleSubmit}/>
                </Box>
            </Stack>
        </Grid>
    </Grid>
  )
}


export default Checkout