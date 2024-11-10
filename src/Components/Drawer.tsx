import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Header from './Header';
import { Grid, TextField } from '@mui/material';
import Add_Product from './sub_components/Add_Product';
import All_Products from './sub_components/All_Products';

const drawerWidth = 240;

interface Props {

  window?: () => Window,
  menu: string[],
  selected:string|null,
  setSelected:React.Dispatch<React.SetStateAction<null|string>>
}

export default function AppDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const handleSelect=(menu:string)=>{
    props.setSelected(menu)
  }

  const drawer = (
    <div>
      <Toolbar />

      <Divider />
      <List>
        {props.menu.map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={()=>handleSelect(text)} 
            
              sx={props.selected === text ? { 
                backgroundColor: '#fff', 
                marginInline:"8px",
                borderRadius:"8px",
                color: '#061b47', 
                fontWeight: 800, 
                '&:hover': { 
                    backgroundColor: '#fff' 
                } 
            } : {marginInline:"8px",color:"#252525"}}
                    >
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >

        <Header />
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            backgroundColor:'whitesmoke',
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth ,backgroundColor:'whitesmoke',},
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            backgroundColor:'whitesmoke',
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,backgroundColor:'#dae1ed' },
          }}
         
          open
        >
          {drawer}
        </Drawer>
      </Box>

      {
        props.selected==="Add product"?
        <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        
        <Grid container>
            <Add_Product/>
        </Grid>
      </Box>
      :
      props.selected==="My products"?
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        
        <Grid container>
            <All_Products/>
        </Grid>
      </Box>
      :
      null
      }
      
    </Box>
  );
}
