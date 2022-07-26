import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Bolt } from '@mui/icons-material';
import { Box } from '@mui/material';
import AirlineStopsIcon from '@mui/icons-material/AirlineStops';
import SendToMobileIcon from '@mui/icons-material/SendToMobile';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PercentIcon from '@mui/icons-material/Percent';

export default function Icons1() {
  const [value, setValue] = React.useState('recents');

  return (   
       <Box sx={{ width: "100%", height: 100, paddingY: 2}}>
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      className='icons1'
    >
      <BottomNavigationAction label="SHAIN & EARN" icon={<AirlineStopsIcon />} />
      <BottomNavigationAction label="DOWNLOAD APP TO SAVE MORE" icon={<SendToMobileIcon />} />
      <BottomNavigationAction label="FLASH SALE" icon={<Bolt />} />
      <BottomNavigationAction label="E-GIFT CARDS" icon={<TrendingUpIcon />} />
      <BottomNavigationAction label="EXTRA 15% OFF" icon={<PercentIcon />} />
    </BottomNavigation>
  </Box>
  );
}
