import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import PrimaryButton from '../Components/Buttons';
import { RegisterType } from '../Types/authtypes';
import {  RegisterApi } from '../Api/AuthApi';
// import registerImage from '../assets/SVG/register.svg'
import {  Box, Button, Grid, Stack, Typography } from '@mui/material';
import BackdropLoader from '../Components/Loader';
import AlertSnackBar from '../Components/Alert';
import {useNavigate} from "react-router-dom"
type Props = {}

const Login: React.FC = ({ }: Props) => {
    const [PostData, setPostData] = useState<RegisterType>({ username: '', password: '' })
    const [loading, setLoading] = useState<boolean>(false)
    const [AlertMessage,setAlertMessage] = useState<string|null>(null)
    const [AlertSeverity,setAlertSeverity] = useState<any>("error")
    const [alertOpen,setAlertOpen] = useState<boolean>(false)

    const Nav=useNavigate()

    const buttonStyle: object = {
        background: "linear-gradient(45deg,#553eed,#f75423)",
        borderRadius: 10,
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column',
        gap: 20,
        padding: 10,
    }

    const handleAlertClose = () => {
        setAlertOpen(false)
    }

    const handleAlertOpen = (message: string, severity: any) => {
        setAlertMessage(message)
        setAlertSeverity(severity)
        setAlertOpen(true)
    }

    const handleDataChange = (name: string, value: string) => {
        setPostData({ ...PostData, [name]: value })
    }

    const handleSubmit = () => {
        RegisterApi(PostData,setLoading,handleAlertOpen,Nav)
    }
    return (
        <Grid className="grid-container" container sx={{ height: '100vh' }}>
            <BackdropLoader open={loading}/>
            <AlertSnackBar open={alertOpen} severity={AlertSeverity} message={AlertMessage} handleClose={handleAlertClose}/>
            
           
            <Grid className="grid-item"  item xl={7} lg={7} md={7} sm={0} xs={0} sx={{ height: '100%' }}>
                <Grid container p={8} sx={{ height: '100%' }}>
                    <Grid item xl={12} lg={12} md={12} sx={{ height: '100%' }}>
                        <Box className='left-div' sx={buttonStyle}>
                            <Stack justifyContent="flex-start">
                                
                                <Typography variant='h2' color="#fff" sx={{ fontWeight: 700 }}>
                                    Shop Smart,
                                </Typography>
                                <Typography variant='h1' color="#fff" sx={{ fontWeight: 700 }}>
                                    Shop Secure.
                                </Typography>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            <Grid className="grid-item" item xl={5} lg={5} md={5} sm={12} xs={12} sx={{height:'100%'}}>
                <Grid container sx={{ padding: 10,height:'100%' }}>
                    <Grid item xl={12} lg={12} md={12}>
                        <Stack sx={{height:'100%'}} justifyContent="center">
                            <Stack direction="column" justifyContent="center" alignItems="center" gap={1}>
                                <Typography variant='h1' sx={{ fontSize: '50px', fontWeight: 650 ,color:"#6f46eb"}}>EZCart</Typography>
                                <Typography variant='body1' color="GrayText" fontSize="25px">Please register to continue</Typography>
                            </Stack>
                            <Stack gap={5} mt={3}>
                                <TextField
                                    fullWidth
                                    id="outlined-basic"
                                    label="User Name"
                                    variant="outlined" 
                                    size='medium'
                                    value={PostData.username}
                                    onChange={(e)=>handleDataChange("username",e.target.value)}
                                    sx={{
                                        borderRadius: '20px',
                                        
                                        '& .MuiOutlinedInput-root': {
                                            '& input': {
                                                backgroundColor: 'whitesmoke',
                                                borderRadius: '8px',
                                            },
                                            '& fieldset': {
                                                border: 'none',
                                                borderRadius: '8px', // Ensures no border when focused
                                            },
                                            '&:hover fieldset': {
                                                border: 'none',
                                                borderRadius: '8px', // Ensures no border on hover
                                            },
                                            '&.Mui-focused fieldset': {
                                                border: 'none',
                                                borderRadius: '8px', // Ensures no border when focused
                                            },
                                        },
                                    }}
                                    />
                                    <TextField
                                    fullWidth
                                    id="outlined-basic"
                                    label="Password"
                                    variant="outlined" 
                                    value={PostData.password}
                                    onChange={(e)=>handleDataChange("password",e.target.value)}
                                    sx={{
                                        borderRadius: '20px',
                                        '& .MuiOutlinedInput-root': {
                                            '& input': {
                                                backgroundColor: 'whitesmoke',
                                                borderRadius: '8px',
                                            },
                                            '& fieldset': {
                                                border: 'none',
                                                borderRadius: '8px', // Ensures no border when focused
                                            },
                                            '&:hover fieldset': {
                                                border: 'none',
                                                borderRadius: '8px', // Ensures no border on hover
                                            },
                                            '&.Mui-focused fieldset': {
                                                border: 'none',
                                                borderRadius: '8px', // Ensures no border when focused
                                            },
                                        },
                                    }}
                                    />
                                    
                                    <PrimaryButton value='Register' fullWidth={true} clickEvent={handleSubmit}/>
                            </Stack>
                            <Stack direction="row" alignItems='center' mt={2}>
                                <Typography variant='body1' color="GrayText" fontSize="20px">Already have an account?</Typography>
                                <Button onClick={()=>Nav("/")}>Login</Button>
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}


export default Login