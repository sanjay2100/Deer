import { Avatar, Grid, Stack, Typography } from '@mui/material'
import React, { useMemo } from 'react'
import { CategoryTypes } from '../../Types/categoryTypes'
import { GetCategoryImage } from '../../Api/Categories'

interface Props  {
    menues:any[]|null
}

const Category = (props: Props) => {
    const url:string=import.meta.env.VITE_AUTH_URL


    const GetImage=async(url:any)=>{
       const image= await GetCategoryImage(url)
       if(image){
            return URL.createObjectURL(image as Blob)
       }
    }



  return (
    <Grid container paddingInline={2}>
        <Grid item xl={2}>
                {
                   props.menues&& props.menues.map((item,index)=>(
                        <Stack justifyContent="center" alignItems="center" key={index}>
                        <Avatar sx={{ width: 100, height: 100 }} alt={item.name} src={"null"} />
                        <Typography variant="h6">{item.name}</Typography>
                    </Stack>
                    ))
                    
                }
            
        </Grid>
    </Grid>
  )
}


export default Category