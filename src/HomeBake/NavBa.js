import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Link from '@mui/material/Link';

export default function ButtonApp() {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" color="success" sx={{color:'pink'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="pink"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/Home">Home     </Link>
          <Link href="/Recipes">   Recipes        </Link>
          <Link href="/Shop now">   ShopNow      </Link>
          <Link href="/ContactUs">   ContactUs   </Link>
          </Typography>
          <IconButton color="pink" aria-label="add to shopping cart">
          <AddShoppingCartIcon/>
          
          <Link href="/login">Login</Link>
          </IconButton>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
