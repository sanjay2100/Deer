import { Button, Grid, Stack, TextField, Typography } from '@mui/material'
import React, { SetStateAction, useEffect, useState } from 'react'
import { GetUserDetails } from '../../Api/UserDetailsApi'
import BackdropLoader from '../Loader'
import AlertSnackBar from '../Alert'

type Props = {
    paymentmethod:string,
    setChechoutDetails:React.Dispatch<SetStateAction<object>>,
    handleChangeCheckoutDetails:(field:string,value:string)=>void
}

const DeliveryDetails=(props: Props)=> {

    const [UserDetails,setUserDetails]=useState<any>(null)
    const [IsLoading,setIsLoading]=useState<boolean>(false)
    const [AlertMessage, setAlertMessage] = useState<null | string>(null)
    const [AlertType, setAlertType] = useState<null | string>(null)
    const [AlertOpen, setAlertOpen] = useState<boolean>(false)

    const handleAlertClose = () => {
        setAlertOpen(false)
    }

    const handleAlertOpen = (message: string, type: string) => {
        setAlertMessage(message)
        setAlertType(type)
        setAlertOpen(true)
    }
    useEffect(()=>{
        if(!UserDetails){
            GetUserDetails(setUserDetails,setIsLoading,handleAlertOpen)
        }
    },[])

  return (
    <Grid container padding={10} sx={{borderRight:'1px solid #d9d7d0',height:'100%'}}>
        <BackdropLoader open={IsLoading}/>
        <AlertSnackBar open={AlertOpen} message={AlertMessage} severity={AlertType} handleClose={handleAlertClose}/>
        <Grid item xs={12}  height="100%">
            <Stack   justifyContent="space-between" height="100%">
                <Grid item xs={12}>
                    <Typography variant='h5' color="#eb4917" sx={{fontWeight:500}}>Checkout</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='body1' sx={{fontWeight:400}}>Payment option</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justifyContent="space-between">
                        <Grid item xs={5.5}>
                            <Button 
                                variant='outlined' 
                                fullWidth
                                sx={{color:props.paymentmethod==='METHOD1'?'#eb4917':"inherit",borderColor:props.paymentmethod==='METHOD1'?'#eb4917':"inherit"}}
                                onClick={()=>props.handleChangeCheckoutDetails("paymentmethod","METHOD1")}
                                >Pay now</Button>
                        </Grid>
                        <Grid item xs={5.5}>
                        <Button 
                            variant='outlined'
                            fullWidth
                            sx={{color:props.paymentmethod==='METHOD2'?'#eb4917':"#252525",borderColor:props.paymentmethod==='METHOD2'?'#eb4917':"inherit"}}
                            onClick={()=>props.handleChangeCheckoutDetails("paymentmethod","METHOD2")}

                            >Cash on Delivery</Button>

                        </Grid>
                    </Grid>
                </Grid>

                <Grid mt={2} item xs={12} >
                    <Typography variant='body1' sx={{fontWeight:400}}>Shipping details</Typography>
                </Grid>

                <Grid mt={2} item xs={12} sx={{display:'flex',flexDirection:'column',gap:1}}>
                    <Typography variant='body2' sx={{fontWeight:400}}>Name</Typography>
                    <TextField
                        size='small'
                        fullWidth
                        value={UserDetails&&UserDetails.name?UserDetails.name:""}
                        sx={{borderColor:"#d9d7d0"}}
                    />
                </Grid>

                <Grid item xs={12} mt={4}  sx={{display:'flex',flexDirection:'column',gap:1}}>
                    <Typography variant='body2' sx={{fontWeight:400}}>Mobile Number</Typography>
                    <TextField
                        size='small'
                        fullWidth
                        value={UserDetails&&UserDetails.mobilenumber?UserDetails.mobilenumber:""}
                        sx={{borderColor:"#d9d7d0"}}
                    />
                </Grid>

                <Grid item xs={12} mt={4}  sx={{display:'flex',flexDirection:'column',gap:1}}>
                    <Typography variant='body2' sx={{fontWeight:400}}>Address</Typography>
                    <TextField
                        multiline
                        maxRows={3}
                        rows={3}
                        size='small'
                        fullWidth
                        value={UserDetails&&UserDetails.address?UserDetails.address:""}
                        sx={{borderColor:"#d9d7d0"}}
                    />
                </Grid>

                <Grid mt={4} container justifyContent="space-between" spacing={1}>

                <Grid item md={6} xs={12}  sx={{display:'flex',flexDirection:'column',gap:1}}>
                    <Typography variant='body2' sx={{fontWeight:400}}>state</Typography>
                    <TextField   
                        size='small'
                        fullWidth
                        value={UserDetails&&UserDetails.state?UserDetails.state:""}
                        sx={{borderColor:"#d9d7d0"}}
                    />
                </Grid>

                <Grid item md={6} xs={12}  sx={{display:'flex',flexDirection:'column',gap:1}}>
                    <Typography variant='body2' sx={{fontWeight:400}}>District</Typography>
                    <TextField
                        value={UserDetails&&UserDetails.district?UserDetails.district:""}
                        size='small'
                        fullWidth
                        sx={{borderColor:"#d9d7d0"}}
                    />
                </Grid>
                </Grid>

                <Grid item mt={4} md={6} xs={12}  sx={{display:'flex',flexDirection:'column',gap:1}}>
                    <Typography variant='body2' sx={{fontWeight:400}}>Pincode</Typography>
                    <TextField
                        size='small'
                        fullWidth
                        value={UserDetails&&UserDetails.pincode?UserDetails.pincode:""}
                        sx={{borderColor:"#d9d7d0"}}
                    />
                </Grid>
            </Stack>

        </Grid>
    </Grid>
  )
}

export default DeliveryDetails