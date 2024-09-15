import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import PrimaryButton from '../Components/Buttons';
import { RegisterType } from '../Types/authtypes';
import { RegisterApi } from '../Api/AuthApi';
import registerImage from '../assets/SVG/register.svg'
import { Grid, Stack, Typography } from '@mui/material';
type Props = {}

const Register: React.FC = ({ }: Props) => {
    const [PostData, setPostData] = useState<RegisterType>({ username: '', password: '' })

    const handleDataChange = (name: string, value: string) => {
        setPostData({ ...PostData, [name]: value })
    }

    const handleSubmit = () => {
        RegisterApi(PostData)
    }
    return (
        <Grid container height='100vh'>
            <Grid item xl={5} sx={{backgroundColor:'whitesmoke'}}>
                <h2>Image</h2>
                <img src={registerImage} alt='image' />
            </Grid>
            <Grid item xl={7} p={2}  sx={{backgroundColor:'#fff'}}>
                <Stack justifyContent='space-between' alignItems='flex-start' height='100%'>
                    <Grid item  xl={12} >
                        <h3 className='text-2xl font-semibold font-sans'>Register</h3>
                        <h4 className='text-sm col-span-6 text-base font-sans text-gray-500'>Register with your data to proceed</h4>
                    </Grid>

                    <Grid container  justifyContent='center'>
                        <Grid container xl={6} gap={3}>
                        <Grid item xl={12} lg={6}>
                            <Typography>Username</Typography>
                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                sx={{
                                    borderRadius: '20px',
                                    '& .MuiOutlinedInput-root': {
                                      '& input': {
                                        backgroundColor: '#e9f1f7',
                                        borderRadius:'8px'
                                      },
                                      '& fieldset': {
                                        border: 'none', // Removes the border
                                      },
                                      '&:hover fieldset': {
                                        border: 'none', // Ensures no border on hover
                                      },
                                      '&.Mui-focused fieldset': {
                                        border: 'none', // Ensures no border when focused
                                      },
                                    },
                                  }}
                                fullWidth
                                onChange={(e) => handleDataChange("username", e.target.value)}
                            />
                        </Grid>
                        <Grid item xl={12}>
                        <Typography>Password</Typography>
                            <TextField
                                id="outlined-basic"
                                
                                variant="outlined"
                                sx={{
                                    borderRadius: '20px',
                                    '& .MuiOutlinedInput-root': {
                                      '& input': {
                                        backgroundColor: '#e9f1f7',
                                        borderRadius:'8px'
                                      },
                                      '& fieldset': {
                                        border: 'none', // Removes the border
                                      },
                                      '&:hover fieldset': {
                                        border: 'none', // Ensures no border on hover
                                      },
                                      '&.Mui-focused fieldset': {
                                        border: 'none', // Ensures no border when focused
                                      },
                                    },
                                  }}
                                fullWidth
                                onChange={(e) => handleDataChange("password", e.target.value)}
                            />
                        </Grid>
                        <Grid container justifyContent='flex-end'>
                            <Grid item xl={12} lg={12} mt={2}>
                                <PrimaryButton value={"SUBMIT"} fullWidth={true} clickEvent={handleSubmit} />
                            </Grid>
                        </Grid>
                        </Grid>
                    </Grid>
                    <Grid container xl={12}>
                        <Grid item xl={12}>
                            
                        </Grid>
                    </Grid>
                </Stack>
            </Grid>
        </Grid>
    )
}


export default Register