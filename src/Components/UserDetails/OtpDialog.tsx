import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';
import OTPInput from './OtpInput';


type propType={
    otp:string,
    setOtp:React.Dispatch<React.SetStateAction<string>>
    isLoading: boolean
    email:string
    open:boolean,
    handleSubmit:()=>void
    handleClose: ()=>void,
}

export default function OtpDialog(props:propType) {

 

  return (
    <React.Fragment>
      
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle id="alert-dialog-title">
          <Typography variant='h5' sx={{fontSize:'18px'}}>Enter otp recieved in your mail</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" sx={{display:'flex',justifyContent:"center"}}> 
                <OTPInput otp={props.otp} setOtp={props.setOtp}/>
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{display:"flex",justifyContent:"center"}}>
          <Button variant='contained' disabled={props.isLoading} sx={{backgroundColor:"#252525",borderRadius:'10px'}} onClick={props.handleSubmit} autoFocus>
            VERIFY
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
