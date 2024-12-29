import { Grid, Stack, Typography } from '@mui/material'
import React from 'react'

type Props = {}

export default function Footer({}: Props) {
  return (
    <Grid container mt={10}>
        <Grid sx={{height:"30vh",backgroundColor:"#000"}} item xs={12}  p={5}>
            <Grid container>
                <Grid item lg={4}>
                    <Stack>
                        <Typography variant='h1' color="#fff" sx={{fontSize:'25px',fontWeight:550}}>EZCart</Typography>
                    </Stack>
                </Grid>
                <Grid item lg={4}>
                    <Stack gap={2}>
                        <Typography variant='h2' color="#fff" sx={{fontSize:'20px',fontWeight:500}}>Quick links</Typography>
                        <Typography variant='h2' color="#fff" sx={{fontSize:'18px',fontWeight:300}}>About</Typography>
                        <Typography variant='h2' color="#fff" sx={{fontSize:'18px',fontWeight:300}}>Join us</Typography>
                        <Typography variant='h2' color="#fff" sx={{fontSize:'18px',fontWeight:300}}>What's New</Typography>

                    </Stack>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
  )
}