import { Grid } from '@mui/material'
import React, { useState } from 'react'
import AppDrawer from '../Components/Drawer'

type Props = {}

 const Dashboard=({}: Props)=> {
  let menuItems:string[]=["Add product","My products","Orders"]
  const [selected,setSelected]=useState<null|string>("Add product")
  return (
    <Grid container>
      
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <AppDrawer setSelected={setSelected} selected={selected} menu={menuItems}/>
      </Grid>
    </Grid>
  )
}

export default Dashboard