import { Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import SimpleSlider from '../Components/Home/Carosel'
import Category from '../Components/Home/Category'
import { CategoryTypes } from '../Types/categoryTypes'
import { GetCategories } from '../Api/Categories'
import BackdropLoader from '../Components/Loader'
import AlertSnackBar from '../Components/Alert'
import { useDispatch } from 'react-redux'
import NewArraivals from '../Components/Home/NewArraivals'
import { getNewArrivals } from '../Api/Products'
import AdBanner from '../Components/Home/AdBanner'

type Props = {}

 const Home=({}: Props)=> {
  const [CategoryData,setCategories]=useState<null|any[]>(null)
  const[Arraivals,setNewArrivals]=useState<null|any[]>(null)
  const [isLoading,setIsLoading]=useState<boolean>(false)
  const [AlertMessgae,setAlertMessgae]=useState<string|null>(null)
  const [OpenAlert,setOpenAlert]=useState<boolean>(false)
  const [AlertType,setAlertType]=useState<string>("")
  const dispatch=useDispatch()

  const handleOpenAlert=(message:string,type:string)=>{
    setAlertType(type)
    setAlertMessgae(message)
    setOpenAlert(true)
    
  }

  const handleCloseAlert=()=>{
      setOpenAlert(false)
  }

  useEffect(()=>{
      GetCategories(setIsLoading,setCategories,handleOpenAlert,dispatch)
      getNewArrivals(setIsLoading,setNewArrivals,handleOpenAlert)
  },[])
  return (
    <Stack>
        <BackdropLoader open={isLoading}/>
        <AlertSnackBar open={OpenAlert} severity={AlertType} message={AlertMessgae} handleClose={handleCloseAlert}/>
        <Header/> 
        <SimpleSlider/>
        <Category menues={CategoryData}/>
        <NewArraivals data={Arraivals}/>
        <AdBanner/>
    </Stack>
  )
}


export default Home