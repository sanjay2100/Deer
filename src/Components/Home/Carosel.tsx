// import React from "react";
// import Slider from "react-slick";
import image1 from "../../assets/images/cartimage.jpg"
import { Box, Stack, Typography } from "@mui/material";
export default function SimpleSlider() {
  
  return (
    <Box height="80vh" sx={{overflow:'hidden',display:'flex',justifyContent:'space-between'}}>
        <Box paddingInline={5} width="45%">
            <Stack height="100%" justifyContent="center">
            <Typography variant="h2" sx={{fontWeight:650,color:"#f0610e"}}>Quality at Your Doorstep</Typography>
            <Typography variant="h6" sx={{color:"#093887"}}>Shop with Confidence</Typography>
            </Stack>
        </Box>
        <Box width="65%" p={5}>
          <img src={image1} alt="img" style={{borderRadius:'20px 20px 20px 20px'}}/>
        </Box>
    </Box>
  );
}