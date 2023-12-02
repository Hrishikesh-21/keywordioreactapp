import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";
import { Grid } from '@mui/material';

export default function Dashboard() {

  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Grid container>
          <Grid item xs={2}></Grid>
          <Grid item xs={6}>
        <Box sx={{ fontWeight: 'bold', m: 2 ,fontSize:"1.5rem" }}>APP LOGO</Box>
        </Grid>
        <Grid item xs={4}>
        <Toolbar>
          <Button onClick={()=>{navigate("/") }} color="inherit">Dashboard</Button>
          <Button  onClick={()=>{navigate("/CreateAds")  }}
          
          color="inherit" >Create Ads</Button>
          
        </Toolbar>
        </Grid>
        </Grid>
      </AppBar>
    </Box>
  );
}
