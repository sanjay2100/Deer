import { Button, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

// interface DescriptionData{
//     name:string,
//     price:number,
//     description:string
// }

const DescriptionSection:React.FC<any>=(props)=> {
  return (
    <Grid container p={5} height="90vh" sx={{overflowY:'scroll'}}>
        <Stack justifyContent="stretch" alignItems="flex-start" height="1-0%">
        <Grid item xs={12}>
            <Typography variant='h4'>{props.data?props.data.name:""}</Typography>
        
            <Typography variant='h6' color="green">₹{props.data?props.data.price:""}</Typography>
            <Typography mt={1} variant='subtitle1' color="#575656">{props.data?props.data.description:""}</Typography>

        </Grid>
        <Grid item xs={12}>
        </Grid>
        <Grid item xs={12}>
            <Stack direction="row" gap={2} justifyContent="center" alignItems="center" height="100%">
                <Button variant='contained' sx={{borderRadius:'10px',backgroundColor:"#c9c8c7"}}>Add to cart</Button>
                <Button variant='contained' sx={{borderRadius:'10px',backgroundColor:"#eb4917"}}>Buy Now</Button>
            </Stack>
        </Grid>
        </Stack>
    </Grid>
  )
}

export default DescriptionSection