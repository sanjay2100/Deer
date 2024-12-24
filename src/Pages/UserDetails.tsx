import { Box, Button, FormControl, FormHelperText, Grid, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Header from '../Components/Header'
import shoppingimage from "../assets/images/shopping.jpg"
import { useSelector } from 'react-redux'
import SelectList from '../Components/SelectList'
import { useForm } from 'react-hook-form'
import { handlePostUserDetails, VerifyEmail, VerifyEmailOtp } from '../Api/UserDetailsApi'
import BackdropLoader from '../Components/Loader'
import AlertSnackBar from '../Components/Alert'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import OtpDialog from '../Components/UserDetails/OtpDialog'


type Props = {}

const boxStyle = {
    backgroundColor: "#252525",
    backgroundImage: `url(${shoppingimage})`,
    backgroundBlendMode: "multiply",
    height: '40vh',
    backgroundSize: 'cover',
    backgroundPosition: "0% 20%"
}

const formBox = {
    borderRadius: '10px',
    backgroundColor: '#fff',
    padding: "20px",
    marginTop: "-30vh",
    boxShadow: '0 0 10px'
}



export const UserDetails = ({ }: Props) => {
    const stateslist: any = useSelector((state) => state)
    const location = useLocation()
    const Nav = useNavigate()

    console.log("location", location.state);


    console.log("state", stateslist);
    const [AlertMessage, setAlertMessage] = useState<null | string>(null)
    const [AlertType, setAlertType] = useState<null | string>(null)
    const [AlertOpen, setAlertOpen] = useState<boolean>(false)
    const [loading, setLoading] = useState(false)
    const [OpenOtpDialog, setOpenOtpDialog] = useState(false)
    const[Otp,setOtp]=useState<string>("")
    const[OtpVerified,setOtpVerified] = useState(false)


    const handleAlertClose = () => {
        setAlertOpen(false)
    }

    const handleAlertOpen = (message: string, type: string) => {
        setAlertMessage(message)
        setAlertType(type)
        setAlertOpen(true)
    }

    const {
        watch,
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<any>()


    const email=watch('email')

    const handleOpenOtpDialog=()=>{
        setOpenOtpDialog(true)
    }

   


    const handleOtpDialogClose=()=>{
        setOpenOtpDialog(false)
    }

    const handleOtpVerify=()=>{
        if(Otp!==""&&Otp.length===6){
            VerifyEmailOtp(setLoading,{email:email,otp:Otp},handleAlertOpen,handleOtpDialogClose,setOtpVerified)
        }
        else{   
            handleAlertOpen("Please enter OTP","error")
        }
    }


    const onSubmit = (data: any) => {
        console.log(data);

        handlePostUserDetails(location.state.productId, data, setLoading, handleAlertOpen, Nav)

    }

    const [PostData, setPostData] = useState({
        name: "",
        mobilenumber: "",
        email: "",
        address: "",
        state: "",
        district: "",
        pincode: ""
    })

    const handleChange = (name: string, value: any) => {
        if (value === "select") {
            setPostData({ ...PostData, [name]: "" })
        }
        else {
            setPostData({ ...PostData, [name]: value })
        }

    }

    const handleEmailVerify=()=>{
        if(!email||errors.email){
            handleAlertOpen("Please enter a valid email address","error")
            return
        }
        else{
            VerifyEmail(setLoading,email,handleAlertOpen,handleOpenOtpDialog)
        }
    }

    return (
        <Grid container>
            <BackdropLoader open={loading} />
            <AlertSnackBar open={AlertOpen} message={AlertMessage} severity={AlertType} handleClose={handleAlertClose} />
            <OtpDialog handleSubmit={handleOtpVerify} otp={Otp} setOtp={setOtp} isLoading={loading} email={email} open={OpenOtpDialog} handleClose={handleOtpDialogClose}/>
            <Grid item xs={12}>
                <Header />
            </Grid>
            <Grid item xs={12} sx={{ height: '100%' }}>
                <Box sx={boxStyle}>

                </Box>
            </Grid>
            <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
                <Grid item md={8} xs={11} height="100%">
                    <Box sx={formBox}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Grid container display="flex" justifyContent="flex-start" alignItems="center" spacing={2}>
                                <Grid item md={6} xs={12}>
                                    <Typography variant='h5' sx={{ fontWeight: 500, fontSize: '20px' }}>Name</Typography>
                                    <TextField
                                        error={errors.name ? true : false}
                                        id="outlined-multiline-flexible"
                                        fullWidth
                                        size='small'
                                        // onChange={(e)=>handleChange("name",e.target.value)}
                                        {...register("name", { required: "Name is required" })}
                                        helperText={errors.name?.message}
                                    />
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <Typography variant='h5' sx={{ fontWeight: 500, fontSize: '20px' }}>Mobile number</Typography>
                                    <TextField
                                        error={errors.mobilenumber ? true : false}
                                        size='small'
                                        id="outlined-multiline-flexible"
                                        fullWidth
                                        helperText={errors.mobilenumber?.message}

                                        // onChange={(e)=>handleChange("mobilenumber",e.target.value)}
                                        {...register("mobilenumber", { required: "Mobile no is required", pattern: { value: /^[0-9]*$/, message: "Mobile number mest be a number" } })}

                                    />
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <Typography variant='h5' sx={{ fontWeight: 500, fontSize: '20px' }}>Email</Typography>
                                    <TextField
                                        id="outlined-multiline-flexible"
                                        fullWidth
                                        size='small'
                                        error={errors.email ? true : false}
                                        helperText={errors.email?.message}

                                        // onChange={(e)=>handleChange("email",e.target.value)}
                                        {...register("email", {
                                            required: "Email is required", pattern: {
                                                value: /\S+@\S+\.\S+/,
                                                message: "Please enter a valid email address",
                                            },
                                        })}

                                    />
                                </Grid>

                                <Grid item md={6} xs={12}>
                                <Typography variant='h5' sx={{ fontWeight: 500, fontSize: '20px' ,visibility:'hidden'}}>s</Typography>
                                    <Button disabled={OtpVerified} onClick={()=>handleEmailVerify()}  variant='contained' sx={{ backgroundColor: "#252525", borderRadius: "10px" }}>Verify</Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant='h5' sx={{ fontWeight: 500, fontSize: '20px' }}>Address</Typography>
                                    <TextField
                                        id="outlined-multiline-flexible"
                                        multiline
                                        rows={2}
                                        maxRows={4}

                                        fullWidth
                                        error={errors.address ? true : false}
                                        helperText={errors.address?.message}

                                        // onChange={(e)=>handleChange("address",e.target.value)}
                                        {...register("address", { required: "Address is required" })}

                                    />
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <Typography variant='h5' sx={{ fontWeight: 500, fontSize: '20px' }}>State</Typography>

                                    <FormControl fullWidth error={errors.state ? true : false} size='small'>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            size='small'
                                            {...register("state", { required: "satet is required" })}
                                            onChange={(e) => handleChange("state", e.target.value)}
                                            sx={{ backgroundColor: '#fff' }}
                                            error={errors.state ? true : false}
                                        // ref={selectref}

                                        >
                                            {
                                                stateslist ?
                                                    stateslist.state.states.states.map((category: any) => (
                                                        <MenuItem key={category.state} value={category.state}>{category.state}</MenuItem>
                                                    ))
                                                    :
                                                    <MenuItem value={"Loading..."}>Loading...</MenuItem>
                                            }

                                        </Select>
                                        <FormHelperText>
                                            {errors.state ? errors.state.message : ""}
                                        </FormHelperText>
                                    </FormControl>
                                </Grid>

                                <Grid item md={6} xs={12}>
                                    <Typography variant='h5' sx={{ fontWeight: 500, fontSize: '20px' }}>District</Typography>

                                    <FormControl fullWidth error={errors.district ? true : false} size='small'>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            {...register("district", { required: "District is required" })}
                                            sx={{ backgroundColor: '#fff' }}
                                        // ref={selectref}

                                        >
                                            {

                                                stateslist && PostData.state ?
                                                    stateslist.state.states.states.find((state: any) => state.state === PostData.state).districts.map((category: any) => (
                                                        <MenuItem key={category} value={category}>{category}</MenuItem>
                                                    ))
                                                    :
                                                    <MenuItem value={"Loading..."}>Loading...</MenuItem>
                                            }

                                        </Select>
                                        <FormHelperText>
                                            {errors.district ? errors.district.message : ""}
                                        </FormHelperText>
                                    </FormControl>
                                </Grid>



                                <Grid item md={6} xs={12}>
                                    <Typography variant='h5' sx={{ fontWeight: 500, fontSize: '20px' }}>Pincode</Typography>
                                    <TextField
                                        id="outlined-multiline-flexible"
                                        fullWidth
                                        size='small'
                                        {...register("pincode", { required: "Category is required" })}
                                        error={errors.pincode ? true : false}
                                        helperText={errors.pincode?.message}

                                    />
                                </Grid>

                                <Grid item xs={12} >
                                    <Grid container display="flex" justifyContent="flex-end">
                                        <Grid item lg={3} xs={12}>
                                            <Button type='submit' variant='contained' fullWidth sx={{ backgroundColor: "#252525", borderRadius: "10px" }}>Submit</Button>
                                        </Grid>
                                    </Grid>
                                </Grid>

                            </Grid>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    )
}