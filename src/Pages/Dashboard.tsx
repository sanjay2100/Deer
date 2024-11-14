import { Grid } from '@mui/material'
import React, { useState } from 'react'
import AppDrawer from '../Components/Drawer'
import { BiSolidAddToQueue } from "react-icons/bi";
import { FaClipboardList } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";

type Props = {}
type menuProp={
  menu: string,
  icon: any
}
 const Dashboard=({}: Props)=> {
  let menuItems: menuProp[] = [
    { menu: "Add product", icon: <BiSolidAddToQueue /> },
    { menu: "My products", icon: <FaClipboardList /> },
    { menu: "Orders", icon: <FaCartShopping /> },
  ];
  const [selected,setSelected]=useState<null|string>("My products")
  return (
    <Grid container>
      
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <AppDrawer setSelected={setSelected} selected={selected} menu={menuItems}/>
      </Grid>
    </Grid>
  )
}

export default Dashboard