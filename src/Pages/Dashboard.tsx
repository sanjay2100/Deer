import { Grid } from '@mui/material'
import React, { useState } from 'react'
import AppDrawer from '../Components/Drawer'
import { BiSolidAddToQueue } from "react-icons/bi";
import { FaClipboardList } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";

type Props = {}
type menuProp={
  menu: string,
  icon: any,
  access:string[]
}
 const Dashboard=({}: Props)=> {
  let menuItems: menuProp[] = [
    { menu: "Add product", icon: <BiSolidAddToQueue /> ,access:["vendor"]},
    { menu: "My products", icon: <FaClipboardList />,access:["vendor"] },
    { menu: "Orders", icon: <FaCartShopping />,access:["vendor"] },
    { menu: "Orders", icon: <FaCartShopping />,access:["Admin"] }
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