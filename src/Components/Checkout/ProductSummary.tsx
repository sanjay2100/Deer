import { Box, Card, Grid, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import BackdropLoader from '../Loader'
import AlertSnackBar from '../Alert'
import { GetAllProductWithList } from '../../Api/CheckoutApis'

type Props = {
    productId: [string]
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
                        <Grid item xs={12}>
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
                                                                <Typography variant='body2'>{item.price}</Typography>
                                                                <table style={{marginTop:2}}>
                                                                    <tr>
                                                                        <td><Typography variant='caption'>Qty</Typography></td>
                                                                        <td><TextField variant='standard' size='small' type='number' inputProps={{min:1}}/></td>
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
                    </Grid>

                </Stack>
            </Grid>
        </Grid>
    )
}


export default ProductSummary