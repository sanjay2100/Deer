import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {useSelector} from "react-redux"
import {useLocation, useNavigate} from "react-router-dom"



const Header = () => {
    const location=useLocation()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const Nav=useNavigate()

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleLogout = () => {
      sessionStorage.clear();
      Nav('/')
    };

    const state=useSelector((state)=>state)

    console.log("location",location.pathname);


    const headerBox = {
        paddingBlock: "15px",
        paddingInline: "10px",
        background:"#fff",
        borderBottom:'0.8px solid #d9d7d0'
    }
    
    const Icons = {
        fontSize: "22px",
        color:"#252525",
        cursor: 'pointer',
    }
    

    return (
        <Grid container sx={{position:'sticky',top:'0px',left:"0px"}}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Box sx={headerBox}>
                    <Grid container justifyContent='space-between' alignItems='center'>
                        <Grid item xl={2} onClick={()=>Nav("/home")}>
                            <Typography variant="h5" sx={{ color:"#252525", fontWeight: 600 }}>EZCart</Typography>
                        </Grid>
                        <Grid item xl={4}>
                            <TextField
                                size="small"
                                fullWidth
                                placeholder="search"
                                sx={{
                                    input: {
                                        background: "#fff",
                                        borderRadius: '5px'
                                    },
                                    background: "#fff",
                                    borderRadius: '5px'
                                }}
                                InputProps={{
                                    endAdornment: <CiSearch />
                                }}
                            />
                        </Grid>
                        <Grid item xl={2}>
                            <Stack direction="row" gap={5} alignItems="center" justifyContent='flex-end'>
                                <FaShoppingCart style={Icons} />
                                <Button
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                                >
                                    <FaUser
                                    style={Icons} />
                                 </Button>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={()=>Nav("/dashboard")}>Dashboard</MenuItem>
                                    <MenuItem onClick={()=>Nav("/vendor-registration")}>Become seller</MenuItem>
                                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                                </Menu>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Header