import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { AlertType } from '../Types/authtypes';



export default function AlertSnackBar(props:AlertType) {

  

  return (
    <div>
      <Snackbar anchorOrigin={{horizontal:'right',vertical:'top'}} open={props.open} autoHideDuration={6000} onClose={props.handleClose}>
        <Alert
          onClose={props.handleClose}
          severity={props.severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {props.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
