import { Box, Grid, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";


const headerBox={
    paddingBlock:"15px",
    paddingInline:"10px",
    background:"#061b47"
}

const Icons={
    fontSize:"22px",
    color:"#fff"
}

const Header=()=>{
    return(
        <Grid container>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Box sx={headerBox}>
                    <Grid container justifyContent='space-between' alignItems='center'>
                        <Grid item xl={2}>
                            <Typography variant="h5" sx={{color:"#fff",fontWeight:600}}>EZCart</Typography>
                        </Grid>
                        <Grid item xl={4}>
                            <TextField
                            size="small"
                            fullWidth
                            placeholder="search"
                            sx={{
                                input:{
                                    background:"#fff",
                                    borderRadius:'5px'
                                },
                                background:"#fff",
                                borderRadius:'5px'
                            }}
                                InputProps={{
                                    endAdornment:<CiSearch />
                                }}
                            />
                        </Grid>
                        <Grid item xl={2}>
                            <Stack direction="row" gap={5} justifyContent='flex-end'>
                                <FaShoppingCart style={Icons} />
                                <FaUser style={Icons}/>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Header