import { Button, Grid, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { CheckUserDetailsStatus } from '../../Api/UserDetailsApi'
import AlertSnackBar from '../Alert'
import BackdropLoader from '../Loader'
import { useNavigate } from 'react-router-dom'

// interface DescriptionData{
//     name:string,
//     price:number,
//     description:string
// }

const DescriptionSection: React.FC<any> = (props) => {
  const [IsLoading, setIsLoading] = useState<boolean>(false)
  const [AlertMessage, setAlertMessage] = useState<string>("")
  const [AlertSeverity, setAlertSeverity] = useState<any>("")
  const [alertOpen, setAlertOpen] = useState<boolean>(false)
  const Nav=useNavigate();

  const handleAlertOpen = (message: string, severity: any) => {
    setAlertMessage(message)
    setAlertSeverity(severity)
    setAlertOpen(true)
  }

  const handleAlertClose = () => {
    setAlertOpen(false)
  }

  const handleUserDetailsStatus = () => {
    CheckUserDetailsStatus(props.id,setIsLoading,handleAlertOpen,Nav)
  }
  return (
    <Grid container p={5} height="90vh" sx={{ overflowY: 'scroll' }}>
      <BackdropLoader open={IsLoading}/>
      <AlertSnackBar open={alertOpen} message={AlertMessage} severity={AlertSeverity} handleClose={handleAlertClose} />
      <Stack justifyContent="stretch" alignItems="flex-start" height="100%">
        <Grid item xs={12}>
          <Typography variant='h4'>{props.data ? props.data.name : ""}</Typography>

          <Typography variant='h6' color="green">₹{props.data ? props.data.price : ""}</Typography>
          <Typography mt={1} variant='subtitle1' color="#575656">{props.data ? props.data.description : ""}</Typography>

        </Grid>
        <Grid item xs={12}>
        </Grid>
        <Grid item xs={12}>
          <Stack direction="row" gap={2} justifyContent="center" alignItems="center" height="100%">
            <Button variant='contained' sx={{ borderRadius: '10px', backgroundColor: "#252525" }}>Add to cart</Button>
            <Button variant='contained' sx={{ borderRadius: '10px', backgroundColor: "#eb4917" }} onClick={handleUserDetailsStatus}>Buy Now</Button>
          </Stack>
        </Grid>
      </Stack>
    </Grid>
  )
}

export default DescriptionSection