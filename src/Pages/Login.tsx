import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import PrimaryButton from '../Components/Buttons';
import { RegisterType } from '../Types/authtypes';
import { LoginApi } from '../Api/AuthApi';
// import registerImage from '../assets/SVG/register.svg'
import { Grid, Stack, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
type Props = {}

const Login: React.FC = ({ }: Props) => {
    const [PostData, setPostData] = useState<RegisterType>({ username: '', password: '' })

    const dispatch = useDispatch()

    const handleDataChange = (name: string, value: string) => {
        setPostData({ ...PostData, [name]: value })
    }

    const handleSubmit = () => {
        LoginApi(PostData, dispatch)
    }
    return (
        <Grid container height='100vh' sx={{ overflow: 'hidden' }}>
            <Grid height='100%' item xl={6} lg={6} md={6} sx={{ background: 'linear-gradient(to left,#fff,dodgerblue)' }}>
                <h2>Image</h2>

            </Grid>
            <Grid item xl={6} lg={6} md={6} p={5} height="100%" sx={{ backgroundColor: '#fff' }}>
                <Grid container height="100%">
                    <Stack direction="column" justifyContent="space-between" height="100%">
                        <Grid container>
                            <Grid item xl={6} lg={6}>
                                <Typography variant="h4" sx={{ fontSize: '18px', fontWeight: 550 }}>Login</Typography>
                                <h4 className="text-sm col-span-6 text-base font-sans text-gray-500">Register with your data to proceed</h4>
                            </Grid>

                            <Grid item xl={6} lg={6}>
                                <Stack direction="row" justifyContent="flex-end" alignItems="flex-end" gap={1}>
                                    <Typography variant="h4" sx={{ fontSize: '16px', fontWeight: 500 }}>Didn't have account?</Typography>
                                    <Typography variant="h5" sx={{ fontSize: '16px', fontWeight: 500, color: "#78acfa" }}>Login</Typography>
                                </Stack>
                            </Grid>
                        </Grid>

                        <Grid container justifyContent="flex-start" spacing={3}>
                            <Grid item xl={12} lg={12} md={8} sx={{ backgroundColor: 'whitesmoke', padding: 3, borderRadius: 3 }}>
                                <Grid container spacing={3}>
                                    <Grid item xl={12} lg={12} md={12}>
                                        <Typography variant="h4" sx={{ fontSize: '16px', fontWeight: 540, mb: 1 }}>Username</Typography>
                                        <TextField
                                            id="outlined-basic"
                                            variant="outlined"
                                            size="small"
                                            sx={{
                                                borderRadius: '20px',
                                                '& .MuiOutlinedInput-root': {
                                                    '& input': {
                                                        backgroundColor: '#e4ebf5',
                                                        borderRadius: '8px',
                                                    },
                                                    '& fieldset': {
                                                        border: '1px solid #d9dadb',
                                                        borderRadius: '8px', // Ensures no border when focused
                                                    },
                                                    '&:hover fieldset': {
                                                        border: '1px solid #d9dadb',
                                                        borderRadius: '8px', // Ensures no border on hover
                                                    },
                                                    '&.Mui-focused fieldset': {
                                                        border: '1px solid #d9dadb',
                                                        borderRadius: '8px', // Ensures no border when focused
                                                    },
                                                },
                                            }}
                                            fullWidth
                                            onChange={(e) => handleDataChange("username", e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xl={12} lg={12} md={12}>
                                        <Typography sx={{ fontSize: '16px', fontWeight: 540, mb: 1 }}>Password</Typography>
                                        <TextField
                                            id="outlined-basic"
                                            type="password"
                                            variant="outlined"
                                            size="small"
                                            sx={{
                                                borderRadius: '20px',
                                                '& .MuiOutlinedInput-root': {
                                                    '& input': {
                                                        backgroundColor: '#e4ebf5',
                                                        borderRadius: '8px',
                                                    },
                                                    '& fieldset': {
                                                        border: '1px solid #d9dadb',
                                                        borderRadius: '8px', // Ensures no border when focused
                                                    },
                                                    '&:hover fieldset': {
                                                        border: '1px solid #d9dadb',
                                                        borderRadius: '8px', // Ensures no border on hover
                                                    },
                                                    '&.Mui-focused fieldset': {
                                                        border: '1px solid #d9dadb',
                                                        borderRadius: '8px', // Ensures no border when focused
                                                    },
                                                },
                                            }}
                                            fullWidth
                                            onChange={(e) => handleDataChange("password", e.target.value)}
                                        />
                                    </Grid>
                                        <Grid item xl={12} lg={12} mt={2}>
                                            <PrimaryButton value="SUBMIT" fullWidth={true} clickEvent={handleSubmit} />
                                        </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid container>
                            <Grid item xl={12}>
                                <Stack direction="row" gap={5}>
                                    <Typography variant="body1" sx={{ fontSize: '12px', mb: 1, color: 'grey' }}>Terms and Conditions</Typography>
                                    <Typography variant="body1" sx={{ fontSize: '12px', mb: 1, color: 'grey' }}>Privacy policy</Typography>
                                    <Typography variant="body1" sx={{ fontSize: '12px', mb: 1, color: 'grey' }}>About us</Typography>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Stack>
                </Grid>
            </Grid>

        </Grid>
    )
}


export default Login