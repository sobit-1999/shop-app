/* eslint-disable no-undef */



import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {  Link, Route, Routes } from 'react-router-dom';
import CurvrPlus from './CurvePlus';
import Kids from './Kids';
import Men from './Men';
import Women from './Women'
import { Box } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';


export default function Saydbar(props) {
  const [alignment, setAlignment] = React.useState('web');
  const [open, setOpen] = React.useState(false);
  
  const handleClick = () => {
    setOpen(!open);
  };

  
  const handleChange = (
    
    newAlignment,
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <Box 
          sx={{
            zIndex: 1,
            position: 'absolute',
            // width: 300
            border: '2px solid black',
            bgcolor: 'background.paper'
            
          }}>
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}

    >
          <Link to = '/' > <ToggleButton value="women">Women</ToggleButton></Link>
          <Link to = '/curvePlus' > <ToggleButton value="CurvePlus">Curve+Plus</ToggleButton></Link>
          <Link to = '/kids' > <ToggleButton value="ios">Kids</ToggleButton></Link>
          <Link to = '/men' > <ToggleButton value="ios">Men</ToggleButton> </Link>
    </ToggleButtonGroup>

    <Routes>
        <Route path="/" element={<Women />} />
        <Route path="/curvePlus" element={<CurvrPlus />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/men" element={<Men />} />
      </Routes>

      <ListItemButton>
  <ListItemIcon  sx={{paddingLeft: 2, paddingRight: "50%"}} >
     <CurrencyExchangeIcon />
  </ListItemIcon>
  <h4>USD</h4>
</ListItemButton> <hr/>

<ListItemButton onClick={handleClick}>

<ListItemText primary={<h4>SHEIN Info</h4>}sx={{paddingLeft: 2}}/>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse 
        in={open} timeout="auto" unmountOnExit
        sx={{
          paddingLeft: "10%"
        }}
        >
            <ListItemText sx={{paddingTop: 1}} primary="Shipping Info" />
            <ListItemText sx={{paddingTop: 3}} primary="Return Policy" />
            <ListItemText sx={{paddingTop: 3}} primary="How to Pay" />
            <ListItemText sx={{paddingTop: 3}} primary="Social Responsibility" />
            <ListItemText sx={{paddingTop: 3}} primary="Reacl Notice" />
            <ListItemText sx={{paddingTop: 3}} primary="Supply Chain" />
            <ListItemText sx={{paddingTop: 3}} primary="Privacy Center" />
            <ListItemText sx={{paddingTop: 3}} primary="Do Not Sell My Personal Information" />
      </Collapse> <hr/>
      <ListItemButton>
  <ListItemIcon  sx={{paddingLeft: 2}} >
     <AddToQueueIcon />
  </ListItemIcon>
  <h4>Add SHEIN To Home Screen</h4>
</ListItemButton>
        </Box>
  );
}


