import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Avatar } from '@mui/material';
import "./container.css"
import { Link } from 'react-router-dom';

export default function AvatarIcons({imgIcons}) {
  // const [value, setValue] = React.useState(0);

  // const handleChange = ( newValue ) => {
  //   setValue(newValue);
  // };

  console.log(imgIcons);
  console.log('aaaaaaaaaaaaaaaaaaaaa', imgIcons);

  return (
    
    <Box sx={{ maxWidth: { xs: 820, sm: '100%' },
               bgcolor: 'background.paper',
               marginX: '19%',
               marginY: 5,
               }}>
                   <h1 className='icons-name'>SHOP BY CSTEGORY</h1>

                   
      <Tabs
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
        >
          { imgIcons.map((item, index) => {
     return    <Link to={item.to}>   <Box key={index}>
               <Avatar  sx={{
          width: 80,
          height: 80,
          marginX: '3%',
        }}  
        src={item.avatar}
        /> <Tab label={item.name}  />
        </Box> 
      </Link>
                                     
      })}
      </Tabs>
    </Box>
  );
}
