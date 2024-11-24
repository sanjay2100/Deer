import { Box, Grid, Select } from '@mui/material'
import React, { useState } from 'react'

type product={
    filename:string,
    path:string,
    mimetype:string,
}

interface ImageType{
    data:product[]
}

const ImageViewer:React.FC<ImageType>=(Props)=> {
    const url:string=import.meta.env.VITE_AUTH_URL

    const[SelectImage,setSeletedImage]=useState<number>(0)

    const smallStyle={
        

    }

  return (
    <Grid container justifyContent="center" alignItems="center" paddingInline={3}>
        <Grid item xs={12} sx={{height:{md:'70vh',xs:'40vh'},overflow:'hidden',display:'flex',flexDirection:'column',justifyContent:'center',objectFit:'cover'}} p={{md:10,xs:3}}>
            
                <img 
                src={Props.data?`${url}/image/${Props.data[SelectImage].filename}`:undefined} 
                alt='img'
                style={{
                    width:'100%', 
                    objectFit:'cover'
                }}
                />
        </Grid>
        <Grid container gap={2} justifyContent="space-between" mt={5}>
            {
                Props.data&&Array.isArray(Props.data)&&Props.data.map((item,index)=>(
                    
                        <Grid item md={1} xs={2} sx={{
                        borderRadius:'10px',
                        overflow:'hidden',
                        cursor:'pointer',border:SelectImage===index?'2px solid #f73f07':'1px solid #b1b1b1',
                        objectFit:'cover',
                        display:'flex'
                        }} onClick={()=>setSeletedImage(index)}>
                            <img 
                            src={`${url}/image/${item.filename}`} 
                            alt='img'
                            style={{
                                width:'100%',
                                objectFit:'cover',
                                cursor:'pointer'
                            }}
                            
                            />
                        </Grid>
                ))
            }
            </Grid>
    </Grid>
  )
}

export default ImageViewer