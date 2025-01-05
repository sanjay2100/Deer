// import React from "react";
// import Slider from "react-slick";
import { Box, Stack, Typography } from "@mui/material";

import imageabstract from "../../assets/images/file.png"
import { useEffect, useState } from "react";
import zIndex from "@mui/material/styles/zIndex";




export default function SimpleSlider() {

  const string="Quality At Your Doorstep"

  const[index,setIndex]=useState(0);
  const [zIndex, setZIndex] = useState(0);


  useEffect(()=>{
    setTimeout(()=>{
      if(index<=string.length){
        setIndex((prevState)=>prevState+1)
      }
    },50)
    
  })

 console.log(window.scrollY);

 const updateZIndex = () => {
  setZIndex(window.scrollY > 150 ? -1 : 0);
};

useEffect(() => {
  window.addEventListener('scroll', updateZIndex);
  updateZIndex(); // Initial call

  return () => {
    window.removeEventListener('scroll', updateZIndex);
  };
}, []);
 
  
  return (
    <Box height="85vh" sx={{overflow:'hidden',
    display:'flex',
    justifyContent:'space-between',
    backgroundImage:`url(${imageabstract})`,
    backgroundColor:index<string.length?"whitesmoke":"whitesmoke",
    backgroundBlendMode:"inherit",
    mb:5,
    filter:'blur(100%)',
    backgroundSize:window.innerWidth>600?'cover':'cover',
    backgroundAttachment:"fixed",
    backgroundPosition:window.innerWidth>600?"start":"center",
    backgroundRepeat:'no-repeat',
    transformOrigin: 'center',
    transitionDuration:'1s',
    zIndex:-1
    }}>
        <Box paddingInline={5} width={"100%"}>
            <Stack height="100%" justifyContent="flex-start" alignItems="center" direction="row">
            <Typography variant={"h2"} sx={{textAlign:window.innerWidth<600?"center":"center",fontWeight:500,color:window.innerWidth<600?"#000":"#000",fontFamily:"Poppins, sans-serif",position:'fixed',opacity:zIndex>=0?"100%":"0%",transitionDuration:'200ms',filter:window.innerWidth<600? "drop-shadow(5px 5px 10px #fff)":"drop-shadow(5px 5px 10px #fff)"}}>{string.substring(0,index)}</Typography>
            </Stack>
        </Box>
        
    </Box>
  );
}