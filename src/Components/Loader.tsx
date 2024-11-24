import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import gif from "../assets/SVG/EZ.gif"
interface propType{
    open: boolean,
}

 const BackdropLoader:React.FC<propType>=(props:propType)=> {
  
  return (
    <div>
      <Backdrop
      sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
      open={props.open}
    >
      <img
        src={gif}
        alt="loading..."
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          filter: 'brightness(1) invert(0)',
          backgroundBlendMode:'multiply',
        }}
      />
    </Backdrop>
    </div>
  );
}
export default BackdropLoader