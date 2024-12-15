import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import gif from "../assets/SVG/EZ.svg"
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
          width: '10%',
          height: '10%',
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