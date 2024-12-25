import { Box, Button, Card, Grid, Stack, TextField, Typography } from '@mui/material'
import React, { SetStateAction, useEffect, useState } from 'react'
import BackdropLoader from '../Loader'
import AlertSnackBar from '../Alert'
import { GetAllProductWithList } from '../../Api/CheckoutApis'

type Props = {
    productId: [string],
    setCheckOutDetails:React.Dispatch<SetStateAction<any>>,
    CheckOutDetails:any
}

const ProductSummary = (props: Props) => {
    const [ProductDetails, setProductDetails] = useState<any>(null)
    const [IsLoading, setIsLoading] = useState<boolean>(false)
    const [AlertMessage, setAlertMessage] = useState<null | string>(null)
    const [AlertType, setAlertType] = useState<null | string>(null)
    const [AlertOpen, setAlertOpen] = useState<boolean>(false)
    const url: string = import.meta.env.VITE_AUTH_URL


    const handleAlertClose = () => {
        setAlertOpen(false)
    }

    const handleAlertOpen = (message: string, type: string) => {
        setAlertMessage(message)
        setAlertType(type)
        setAlertOpen(true)
    }

    useEffect(() => {
        GetAllProductWithList({ product_ids: props.productId }, setIsLoading, handleAlertOpen, setProductDetails)
    }, [])
    
    useEffect(()=>{
        if(ProductDetails && Array.isArray(ProductDetails.products)){
            const newOrders = ProductDetails.products.map((item:any) => ({
                productid: item._id,
                quantity: 1,
                price: item.price
            }));

            console.log(newOrders);
            

            props.setCheckOutDetails((prevState:any) => ({
                ...prevState,
                orders: [...prevState.orders, ...newOrders]
            }));            
        }
    },[ProductDetails])

    console.log("Postdetails",props.CheckOutDetails);

    const handleQuantityChange=(index:number,value:string)=>{
        let modifiedorder=[...props.CheckOutDetails.orders]
        modifiedorder[index].quantity=value
        props.setCheckOutDetails({...props.CheckOutDetails,orders:modifiedorder})
    }

    const GetSubTotal=()=>{
        if(props.CheckOutDetails.orders.length>0){
           return props.CheckOutDetails.orders.reduce((acc:number,item:{quantity:number,price:number})=>acc+(item.quantity  * item.price),0)
        }
    }
    


    return (
        <Grid container padding={10}>
            <BackdropLoader open={IsLoading} />
            <AlertSnackBar open={AlertOpen} message={AlertMessage} severity={AlertType} handleClose={handleAlertClose} />
            <Grid item xs={12}>
                <Stack>
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography variant='h5' sx={{ fontWeight: 500 }}>Review Cart</Typography>
                        </Grid>
                        <Grid item xs={12} height="50vh">
                            <Stack>
                                {
                                    ProductDetails && Array.isArray(ProductDetails.products)
                                    &&
                                    ProductDetails.products.map((item:any, index:number) => (
                                        <Grid container key={index} mt={1} padding={1}>
                                            <Grid item xs={12}>
                                                <Box  sx={{width:'100%'}}>
                                                    <Grid container gap={1}>
                                                        <Grid item xs={2} display="flex" >
                                                            <Box
                                                            sx={{
                                                                borderRadius:'10px',
                                                                border:'1px solid #d9d7d0',
                                                                overflow:'hidden',
                                                                width:'100%',
                                                                objectFit:'cover',
                                                                display:'flex'
                                                            }}
                                                            >
                                                            <img 
                                                                src={`${url}/image/${item.images[0].filename}`}
                                                                alt='img'
                                                                style={{
                                                                    aspectRatio:1,
                                                                    width: '100%',
                                                                    
                                                                    cursor: 'pointer'
                                                                }} />
                                                            </Box>
                                                        </Grid>
                                                        <Grid item xs={9}>
                                                            <Stack>
                                                                <Typography variant='body1'>{item.name}</Typography>
                                                                <Typography color="#eb4917" variant='body2'>₹ {item.price}</Typography>
                                                                <table style={{marginTop:2}}>
                                                                    <tr>
                                                                        <td><Typography  variant='caption'>Qty</Typography></td>
                                                                        <td><TextField 
                                                                        variant='standard' 
                                                                        size='small' 
                                                                        type='number'
                                                                        value={ProductDetails&&props.CheckOutDetails.orders.length>0?props.CheckOutDetails.orders[index].quantity:"1"} 
                                                                        onChange={(e)=>handleQuantityChange(index,e.target.value)} 
                                                                        inputProps={{min:1}}/></td>
                                                                    </tr>
                                                                </table>
                                                            </Stack>
                                                        </Grid>
                                                    </Grid>

                                                </Box>
                                            </Grid>
                                        </Grid>
                                    ))
                                }

                            </Stack>
                        </Grid>
                        <Grid item xs={12} height="100%">
                            <table style={{width:"100%"}}>
                                <tr>
                                    <td style={{width:"50%"}}><Typography color="grey" variant='body1'>Sub Total</Typography></td>
                                    <td style={{width:"50%"}}>₹ {GetSubTotal()}</td>
                                </tr>
                                <tr>
                                    <td><Typography color="grey" variant='body1'>Delivery charges</Typography></td>
                                    <td>₹ 200</td>
                                </tr>
                                <tr>
                                    <td><Typography variant='body1'>Total</Typography></td>
                                    <td style={{color:"#eb4917"}}>₹ {GetSubTotal()+200}</td>
                                </tr>
                            </table>
                            <Button  variant='contained' sx={{borderRadius:'10px',backgroundColor:"#252525",mt:2}} fullWidth>Order Now</Button>
                        </Grid>
                    </Grid>

                </Stack>
            </Grid>
        </Grid>
    )
}


export default ProductSummary