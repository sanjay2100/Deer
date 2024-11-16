import { Avatar, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { SetStateAction } from "react";
import DataTable from "./sub_components/All_Products";
import Add_Product from "./sub_components/Add_Product";


type menuProp={
  menu: string,
  icon: any,
  access:string[]
}

interface AppProps{
  menu: menuProp[],
  selected:string|null,
  setSelected:React.Dispatch<React.SetStateAction<string|null>>
}

const AppDrawer:React.FC<AppProps>=(Props:AppProps)=>{

  return(
    <Grid container sx={{height:'100vh',backgroundColor:'whitesmoke'}}>
      <Grid item xl={3} lg={2} sx={{backgroundColor:"whitesmoke",height:'100%'}}>
          <Stack>
            <Box sx={{padding:'20px',display:'flex',justifyContent:'flex-start',alignItems:'center'}}>
              <Typography sx={{fontWeight:650,fontSize:'21px'}}>EZCart</Typography>
            </Box>
            <Stack sx={{paddingInline:'8px'}} gap={1}>
              {Props.menu.map((item,index)=>(
                <Box
                  key={index}
                  onClick={()=>Props.setSelected(item.menu)}
                  sx={{padding:'10px',cursor:'pointer',backgroundColor:`${Props.selected===item.menu?"#fff":"whitesmoke"}`,color:Props.selected===item.menu?'#000':"#000",borderRadius:'8px',border:Props.selected===item.menu?'0.5px solid #edebe4':"none"}}
                >
                  <Stack direction="row" gap={1} alignItems="center">
                  <Box>{item.icon}</Box>
                  <Typography sx={{fontWeight:500,fontSize:'14px'}}>{item.menu}</Typography>
                  </Stack>
                </Box>
              ))}
            </Stack>
          </Stack>
      </Grid>
      <Grid item xl={9} md={10} sx={{height:'100vh',backgroundColor:'#fff'}}>
        <Grid container height="10%" sx={{backgroundColor:'whitesmoke'}}>
          <Grid item md={12} xs={12}>
            <Stack sx={{paddingInline:'15px',paddingTop:'15px',paddingBottom:'15px',alignItems:'flex-end'}}>
              <Avatar>N</Avatar>
            </Stack>
          </Grid>
        </Grid>
        <Stack sx={{padding:'15px'}} justifyContent="center" alignItems="center" mt={1}>
              {
                Props.selected==="My products"?
                  <DataTable/>
                :
                Props.selected==="Add product"?
                  <Add_Product/>
                :
                null
              }
          </Stack>
      </Grid>
    </Grid>
  )
}


export default AppDrawer;