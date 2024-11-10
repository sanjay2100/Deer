import { Button, Grid, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Header from '../Components/Header'
import MainCard from '../Components/MainCard'
import { useSelector } from 'react-redux'
import SelectList from '../Components/SelectList'
import { PostDataType } from '../Types/VendorRegisterTypes'
import BackdropLoader from '../Components/Loader'
import AlertSnackBar from '../Components/Alert'
import { RegisterUserAsVendor } from '../Api/VendorApi'
import { useNavigate } from 'react-router-dom'
import bagimage from '../../src/assets/images/bagimage.jpg'
type Props = {}


export default function VendorRegistration({}: Props) {
    const stateslist:any=useSelector((state)=>state)
    const [isLoading,setIsloading]=useState<boolean>(false)
    const [AlertMessage,setAlertMessage] = useState<string|null>(null)
    const [AlertSeverity,setAlertSeverity] = useState<any>("error")
    const [alertOpen,setAlertOpen] = useState<boolean>(false)
    const Nav=useNavigate()

    const [PostData,setPostData]=useState<PostDataType>({
        name:"",
        mobile:"",
        email:"",
        state:"",
        district:"",
        pincode:"",
        address:"",
        
    })

    const handleChange=(name:string,value:any)=>{
        if(value==="select"){
            setPostData({...PostData,[name]:""})
        }
        else{
            setPostData({...PostData,[name]:value})
        }
        
    }

    const handleAlertClose = () => {
        setAlertOpen(false)
    }

    const handleAlertOpen = (message: string, severity: any) => {
        setAlertMessage(message)
        setAlertSeverity(severity)
        setAlertOpen(true)
    }

    const handleSubmit=()=>{
        RegisterUserAsVendor(PostData,stateslist.user.user_info.token,setIsloading,handleAlertOpen,setPostData,Nav)
    }
    
    const bgstyle = {
        backgroundColor: "#252525",
        height: "100vh",
        backgroundImage: `url(${bagimage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundBlendMode: "multiply"
    };
    
  return (
    <Grid container sx={bgstyle}>
        <BackdropLoader open={isLoading}/>
        <AlertSnackBar open={alertOpen} severity={AlertSeverity} message={AlertMessage} handleClose={handleAlertClose}/>

        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Header/>
        </Grid>
        
        <Grid item xl={12} lg={12} p={5} justifyContent="center" alignItems="center">
            <Grid container justifyContent="center" alignItems="center" >
                <Grid item xl={6} lg={6}  justifyContent="center" alignItems="center">
                    <MainCard >
                    <Typography variant='h4' sx={{fontSize:"20px",fontWeight:650,textAlign:"center",marginBottom:2}}>Seller Registration</Typography>

                        <Grid container spacing={2}>
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                            <TextField
                                fullWidth
                                label="Name"
                                value={PostData.name}
                                onChange={(e)=>handleChange("name",e.target.value)}
                            />
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                            
                        </Grid>
                        <br></br>
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                            <TextField
                                fullWidth
                                label="Mobile Number"
                                value={PostData.mobile}
                                onChange={(e)=>handleChange("mobile",e.target.value)}
                            />
                        </Grid>
                        
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                            <TextField
                                fullWidth
                                label="Email Address"
                                value={PostData.email}
                                onChange={(e)=>handleChange("email",e.target.value)}
                            />
                        </Grid>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} mt={2}>
                            <TextField
                                fullWidth
                                label="Address"
                                multiline
                                rows={2}
                                value={PostData.address}
                                onChange={(e)=>handleChange("address",e.target.value)}
                            />
                        </Grid>
                        <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                            <SelectList
                            displayName="State"
                            list={stateslist.state.states.states}
                            name="state"
                            value={PostData.state}
                            handleChange={handleChange}
                            selectable='state'
                            />
                        </Grid>
                        <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                            <SelectList
                            displayName="District"
                            list={PostData.state?stateslist.state.states.states.find((state:any)=>state.state===PostData.state).districts:[]}
                            name="district"
                            value={PostData.district}
                            handleChange={handleChange}
                            selectable='own'
                            />
                        </Grid>
                        <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                            <TextField
                                fullWidth
                                label="Pincode"
                                value={PostData.pincode}
                                onChange={(e)=>handleChange("pincode",e.target.value)}
                            />
                        </Grid>
                        <Stack direction="row" justifyContent="center" width="100%" mt={1} spacing={1}>
                            <Button  variant="contained" color="primary" onClick={()=>handleSubmit()}>
                                Register
                            </Button>
                           

                        </Stack>
                        </Grid>
                    </MainCard>
                </Grid>
            </Grid>
            
        </Grid>
    </Grid>
  )
}