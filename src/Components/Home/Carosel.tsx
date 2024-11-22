// import React from "react";
// import Slider from "react-slick";
import image1 from "../../assets/images/cover.jpg"
import { Box, Stack, Typography } from "@mui/material";
export default function SimpleSlider() {
  
  return (
    <Box height="80vh" sx={{overflow:'hidden',display:'flex',justifyContent:'space-between'}}>
        <Box paddingInline={5}>
            <Stack height="100%" justifyContent="center">
            <Typography variant="h2" sx={{fontWeight:650,color:"#f0610e"}}>Quality at Your Doorstep</Typography>
            <Typography variant="h6" sx={{color:"#093887"}}>Shop with Confidence</Typography>
            </Stack>
        </Box>
        <img src={image1} alt="img1"  style={{aspectRatio:1/1,objectFit:'cover',width:"75%"}}/>  
    </Box>
  );
}