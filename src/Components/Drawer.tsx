import { Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { SetStateAction } from "react";
import DataTable from "./sub_components/All_Products";
import Add_Product from "./sub_components/Add_Product";


type menuProp={
  menu: string,
  icon: any
}

interface AppProps{
  menu: menuProp[],
  selected:string|null,
  setSelected:React.Dispatch<React.SetStateAction<string|null>>
}

const AppDrawer:React.FC<AppProps>=(Props:AppProps)=>{
  return(
    <Grid container sx={{height:'100vh'}}>
      <Grid item xl={3} lg={2} sx={{backgroundColor:"#fff",height:'100%',borderRight:'0.5px solid #d6d1c5'}}>
          <Stack>
            <Box sx={{padding:'15px',display:'flex',justifyContent:'flex-start',alignItems:'center'}}>
              <Typography sx={{fontWeight:650,fontSize:'21px'}}>EZCart</Typography>
            </Box>
            <Stack sx={{paddingInline:'8px'}}>
              {Props.menu.map((item,index)=>(
                <Box
                  key={index}
                  onClick={()=>Props.setSelected(item.menu)}
                  sx={{padding:'15px',cursor:'pointer',backgroundColor:`${Props.selected===item.menu?"#efe9f7":"#fff"}`,borderRadius:'8px'}}
                >
                  <Stack direction="row" gap={1} alignItems="center">
                  <Box>{item.icon}</Box>
                  <Typography sx={{fontWeight:500,fontSize:'18px'}}>{item.menu}</Typography>
                  </Stack>
                </Box>
              ))}
            </Stack>
          </Stack>
      </Grid>
      <Grid item xl={9} md={9} sx={{padding:'15px',height:'100vh'}}>
        <Stack  justifyContent="center" alignItems="center">
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