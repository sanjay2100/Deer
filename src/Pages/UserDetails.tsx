import { Box, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Header from '../Components/Header'
import shoppingimage from "../assets/images/shopping.jpg"
import { useSelector } from 'react-redux'
import SelectList from '../Components/SelectList'


type Props = {}

const boxStyle={
    backgroundColor:"#252525",
    backgroundImage:`url(${shoppingimage})`,
    backgroundBlendMode:"multiply",
    height:'40vh',
    backgroundSize: 'cover',
    backgroundPosition:"0% 20%"
}

const formBox={
    borderRadius:'10px',
    backgroundColor:'#fff',
    padding:"20px",
    marginTop:"-20vh",
    boxShadow:'0 0 10px'
}



export  const UserDetails=({}: Props)=> {
    const stateslist:any=useSelector((state)=>state)
    
    const [PostData,setPostData]=useState({
        name:"",
        mobilenumber:"",
        email:"",
        address:"",
        state:"",
        district:"",
        pincode:""
    })

    const handleChange=(name:string,value:any)=>{
        if(value==="select"){
            setPostData({...PostData,[name]:""})
        }
        else{
            setPostData({...PostData,[name]:value})
        }
        
    }

  return (
    <Grid container>
        <Grid item xs={12}>
            <Header/>
        </Grid>
        <Grid item xs={12} sx={{height:'100%'}}>
            <Box sx={boxStyle}>

            </Box>
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="center">
            <Grid item xs={8} height="100%">
                <Box sx={formBox}>
                    <Grid container display="flex" justifyContent="flex-start" spacing={2}>
                    <Grid item lg={6}>
                            <Typography variant='h5' sx={{fontWeight:500,fontSize:'20px'}}>Name</Typography>
                            <TextField
                                id="outlined-multiline-flexible"
                                value={PostData.name}
                                fullWidth
                                onChange={(e)=>handleChange("name",e.target.value)}
                            />
                        </Grid>
                        <Grid item lg={6}>
                            <Typography variant='h5' sx={{fontWeight:500,fontSize:'20px'}}>Mobile No</Typography>
                            <TextField
                                id="outlined-multiline-flexible"
                                value={PostData.mobilenumber} 
                                fullWidth
                                onChange={(e)=>handleChange("mobilenumber",e.target.value)}

                            />
                        </Grid>
                        <Grid item lg={6}>
                            <Typography variant='h5' sx={{fontWeight:500,fontSize:'20px'}}>Email</Typography>
                            <TextField
                                id="outlined-multiline-flexible"
                                value={PostData.email} 
                                fullWidth
                                onChange={(e)=>handleChange("email",e.target.value)}
                            />
                        </Grid>
                        <Grid item lg={12}>
                            <Typography variant='h5' sx={{fontWeight:500,fontSize:'20px'}}>Address</Typography>
                            <TextField
                                id="outlined-multiline-flexible"
                                multiline
                                rows={2}
                                value={PostData.address}
                                maxRows={4}
                                fullWidth
                                onChange={(e)=>handleChange("address",e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={6}>
                        <Typography variant='h5' sx={{fontWeight:500,fontSize:'20px'}}>State</Typography>

                            <SelectList
                            displayName=""
                            list={stateslist.state.states.states}
                            name="state"
                            value={PostData.state}
                            handleChange={handleChange}
                            selectable='state'
                            />
                        </Grid>

                        <Grid item xs={6}>
                        <Typography variant='h5' sx={{fontWeight:500,fontSize:'20px'}}>District</Typography>
                            <SelectList
                            displayName=""
                            list={PostData.state?stateslist.state.states.states.find((state:any)=>state.state===PostData.state).districts:[]}
                            name="district"
                            value={PostData.district}
                            handleChange={handleChange}
                            selectable='own'
                            />
                        </Grid>

                        <Grid item lg={6}>
                            <Typography variant='h5' sx={{fontWeight:500,fontSize:'20px'}}>Pincode</Typography>
                            <TextField
                                id="outlined-multiline-flexible"
                                fullWidth
                                value={PostData.pincode}
                                onChange={(e)=>handleChange("pincode",e.target.value)}

                            />
                        </Grid>

                    </Grid>
                </Box>
            </Grid>
        </Grid>
    </Grid>
  )
}