import { Grid, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { getProductsByCategory } from '../Api/Products'
import {  useParams } from 'react-router'
import BackdropLoader from '../Components/Loader'
import ProductCard from '../Components/CategoryProducts/ProductCard'

type Props = {}

interface categoryProduct{
  category_name:string,
  products:object[]
}

 const CategoryProducts=({}: Props)=> {
    const[Data,setData]=useState<null|categoryProduct>(null)
    const [isLoading,setIsLoading]=useState(false)
    const params=useParams()

    console.log("data",Data);
    
    useEffect(()=>{
        getProductsByCategory(params.id as string,setData,setIsLoading)
    },[])
  return (
    <Grid container>
      <BackdropLoader open={isLoading}/>
        <Grid item xs={12}>
            <Header/>
        </Grid>
        <Grid container >
          <Grid item xl={2} lg={2} height='90vh'>
            <Stack sx={{backgroundColor:'whitesmoke',height:'100%'}}>

            </Stack>
          </Grid>
          <Grid item xl={10} lg={10} padding={3}>
          {
          Data &&Array.isArray(Data.products) && 
          Data.products.map((product:any,index:number)=>(
            <Grid key={index} item xl={2} lg={2}>
                <ProductCard name={product.name} price={product.price} images={product.images}/>
            </Grid>
          ))
         .reverse()
        }
          </Grid>
        
       </Grid> 
    </Grid>
  )
}


export default CategoryProducts