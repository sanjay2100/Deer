import { Grid } from '@mui/material'
import React from 'react'
import image from '../../assets/images/oneplus.webp'
type Props = {}

export default function AdBanner({}: Props) {
  return (
    <Grid container marginBlock={10} >
        <Grid item xs={12} height="60vh" display="flex">
            <img style={{objectFit:'cover',width:'100%'}} src={image} alt='img'/>
        </Grid>
    </Grid>
  )
}