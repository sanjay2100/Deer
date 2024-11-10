import { Box } from '@mui/material'
import React from 'react'


const style={
    borderRadius:"10px",
    padding:"30px",
    margin:"20px",
    background:"#fff",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
    width:"100%"
}

export default function MainCard({children}:{children:React.ReactNode}) {
  return (
    <Box sx={style}>
            {children}
    </Box>
  )
}