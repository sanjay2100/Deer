// import React from "react";
// import Slider from "react-slick";
import { Box, Stack, Typography } from "@mui/material";
import image1 from "../../assets/images/listeningmusic.avif"
import image2 from "../../assets/images/fashion.jpg"
import image3 from "../../assets/images/furniture.jpg"



export default function SimpleSlider() {

 
  
  return (
    <Box height="80vh" sx={{overflow:'hidden',display:'flex',justifyContent:'space-between',background:"linear-gradient(135deg,#31B7C2,#7BC393)",mb:10}}>
        <Box paddingInline={5} width="60%">
            <Stack height="100%" justifyContent="center">
            <Typography variant="h1" sx={{fontWeight:500,color:"#fff",fontFamily:"Poppins, sans-serif"}}>Quality at Your Doorstep</Typography>
            <Typography variant="h4" sx={{color:"#fff",fontFamily:"Poppins, sans-serif",padding:'5px',borderRadius:'10px'}}>Shop with Confidence</Typography>
            </Stack>
        </Box>
        <Box padding={5} width="40%" sx={{display:window.innerWidth>800?'flex':'none'}}>
            <Stack width="100%" gap={-1}>
              <Stack direction="row" width="100%" justifyContent="flex-start">
                <Box sx={{aspectRatio:1,width:'50%',borderRadius:'50%',border:'10px solid #fff',display:'flex',objectFit:'cover',overflow:'hidden'}}>
                    <img style={{width:'100%'}} src={image1} alt=""/>
                </Box>
              </Stack>
              <Stack direction="row" width="100%" justifyContent="center">
                <Box sx={{aspectRatio:1,width:'40%',borderRadius:'50%',border:'10px solid #fff',display:'flex',objectFit:'cover',overflow:'hidden'}}>
                    <img style={{width:'100%'}} src={image2} alt=""/>
                </Box>
              </Stack>
              <Stack direction="row" width="100%" justifyContent="flex-start">
                <Box sx={{aspectRatio:1,width:'30%',borderRadius:'50%',border:'10px solid #fff',display:'flex',objectFit:'cover',overflow:'hidden'}}>
                    <img style={{width:'100%'}} src={image3} alt=""/>
                </Box>
              </Stack>
            </Stack>
        </Box>
    </Box>
  );
}