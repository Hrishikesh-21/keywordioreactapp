import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";

export default function Dashboard() {

  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button onClick={()=>{navigate("/") }} color="inherit">Dashboard</Button>
          <Button  onClick={()=>{navigate("/CreateAds")  }}
          
          color="inherit" >CreateAds</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
