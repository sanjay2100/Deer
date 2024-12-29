import { Grid, Typography } from '@mui/material'
import React from 'react'
import ProductCard from '../CategoryProducts/ProductCard'
import { useNavigate } from 'react-router-dom'
import ProductCardSkeleton from '../CategoryProducts/ProductCardSkeleton'

type Props = {
    data:any[]|null
}

export default function TopSelling(props: Props) {
    const Nav=useNavigate()
  return (
    <Grid container paddingInline={5}>
        <Grid item xs={12}>
            <Typography variant='h5' sx={{fontWeight:500,mb:2}}>Top Selling</Typography>
        </Grid>
        <Grid container justifyContent={Array.isArray(props.data)&&props.data.length>=5?"space-between":"flex-start"} alignItems="center" gap={5}>
            
                {
                    props.data&&Array.isArray(props.data)?
                    props.data.map((item,index)=>(
                        <Grid sx={{cursor:'pointer'}} item xl={1.5} md={2} sm={4} xs={12} onClick={()=>Nav('/product',{
                            state:{
                                product_id: item._id
                            }
                        })}>
                        <ProductCard key={index} name={item.name} price={item.price} images={item.images}/>
                        </Grid>
                    ))        
                    :
                    [...Array(5)].map((item,index)=>(
                        <Grid item key={index} xl={1.5} lg={1.5} md={1.5} xs={12} sx={{ cursor: 'pointer' }} >
      
                            <ProductCardSkeleton/>
                        </Grid>
                      ))
                }
            
        </Grid>
    </Grid>
  )
}