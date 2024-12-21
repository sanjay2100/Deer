// import React from "react";
// import Slider from "react-slick";
import { Box, Stack, Typography } from "@mui/material";
import image1 from "../../assets/images/listeningmusic.avif"
import image2 from "../../assets/images/fashion.jpg"
import image3 from "../../assets/images/furniture.jpg"
import imageabstract from "../../assets/images/abstractbg3.jpg"




export default function SimpleSlider() {

 
  
  return (
    <Box height="80vh" sx={{overflow:'hidden',
    display:'flex',
    justifyContent:'space-between',
    backgroundImage:`url(${imageabstract})`,
    backgroundColor:"#8f8f8f",
    backgroundBlendMode:'multiply',m:5,borderRadius:'20px',
    mb:5,
    filter:'blur(100%)',
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat',
    transformOrigin: 'center',
    }}>
        <Box paddingInline={5} width="60%">
            <Stack height="100%" justifyContent="center">
            <Typography variant="h1" sx={{fontWeight:500,color:"#fff",fontFamily:"Poppins, sans-serif"}}>Quality at Your Doorstep</Typography>
            <Typography variant="h4" sx={{color:"#fff",fontFamily:"Poppins, sans-serif",padding:'5px',borderRadius:'10px'}}>Shop with Confidence</Typography>
            </Stack>
        </Box>
        <Box padding={5} width="40%" sx={{display:window.innerWidth>800?'flex':'none'}}>
            
        </Box>
    </Box>
  );
}