import { Avatar, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { SetStateAction } from "react";
import DataTable from "./sub_components/All_Products";
import Add_Product from "./sub_components/Add_Product";
import Add_Category from "./sub_components/Add_category";
import Dashboard from "./sub_components/Dashboard";


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
    <Grid container sx={{height:'100vh',backgroundColor:'#252525'}}>
      <Grid item xl={2} lg={2} md={2}  sx={{backgroundColor:"#252525",height:'100%'}}>
          <Stack>
            <Box sx={{padding:'20px',display:'flex',justifyContent:'flex-start',alignItems:'center'}}>
              <Typography sx={{fontWeight:650,fontSize:'21px',color:"#fff"}}>EZCart</Typography>
            </Box>
            <Stack sx={{paddingInline:'8px',borderRadius:"10px"}} mt={2} gap={1}>
              {Props.menu.map((item,index)=>(
                <Box
                  key={index}
                  onClick={()=>Props.setSelected(item.menu)}
                  sx={{padding:'20px',cursor:'pointer',
                  backgroundColor:`${Props.selected===item.menu?"#fff":"#252525"}`,color:Props.selected===item.menu?'#000':"#fff",borderRadius:'8px',
                  border:Props.selected===item.menu?'0.5px solid #edebe4':"none",
                  display:item.access.includes(sessionStorage.getItem("role") as string)?'flex':'none'
                }}
                >
                  <Stack direction="row" gap={1} alignItems="center">
                  <Box sx={{fontSize:'20px'}}>{item.icon}</Box>
                  <Typography sx={{fontWeight:500,fontSize:'20px'}}>{item.menu}</Typography>
                  </Stack>
                </Box>
              ))}
            </Stack>
          </Stack>
      </Grid>
      <Grid item xl={10} lg={10} md={10} sx={{height:'100vh',backgroundColor:'#252525'}}>
        <Grid container height="8%" justifyContent="center" alignItems="center" sx={{backgroundColor:'#252525'}}>
          <Grid item md={12} xs={12}>
            <Stack justifyContent="center" alignItems="center" sx={{paddingInline:'15px',alignItems:'flex-end'}}>
              <Avatar>N</Avatar>
            </Stack>
          </Grid>
        </Grid>
        <Grid container sx={{borderRadius:"10px",backgroundColor:"#fff",height:'92%'}}>
          <Grid item sx={{borderRadius:"10px"}} xs={12}>
        <Stack sx={{padding:'15px',borderRadius:"10px"}} justifyContent="flex-start" alignItems="flex-start" mt={1}>
              {
                Props.selected==="My products"?
                  <DataTable/>
                :
                Props.selected==="Add product"?
                  <Add_Product/>
                :
                Props.selected==="Add Category"?
                  <Add_Category/>
                :
                Props.selected==="Dashboard"?
                  <Dashboard/>
                :
                null
              }
          </Stack>
          </Grid>
          </Grid>
      </Grid>
    </Grid>
  )
}


export default AppDrawer;