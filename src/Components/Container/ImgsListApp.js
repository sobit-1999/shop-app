import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import {  CardMedia, ImageListItemBar } from '@mui/material';

export default function ImageListApp() {
  const [value, setValue] = React.useState(0);

  const handleChange = ( newValue ) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        paddingTop: 1,
        maxWidth: '100%',
        bgcolor: 'background.paper',
        fontSize: 500
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        aria-label="visible arrows tabs example"
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            '&.Mui-disabled': { opacity: 0.1 },
          },
        //   width: '100%',
        height: "500px",

        }}
      >

        <CardMedia
          component="img"
          image="https://assets.pandaily.com/uploads/2022/05/shein-1600x832.jpeg"
          alt="green iguana"
        />
      <CardMedia
        component="img"
        width='1500'
        height="780"
        image="https://img.ltwebstatic.com/images3_ach/2022/04/25/165085534350d94af6faaf0cfc6ddb21e8d5f7356c.jpg"
        alt="green iguana"
      />
      <CardMedia
        component="img"
        image="https://sourcingjournal.com/wp-content/uploads/2021/07/SheinHelloKitty2.png"
        alt="green iguana"
      />
      </Tabs>
      <Box  sx={{ marginTop: -15,  width: '90%', position: 'absolute', marginX: '3%',}}>
      <ImageListItemBar sx={{ height: 200, textAlignLast: 'center'}}
            title='SHEIN'
            subtitle='KAROCHI NIMADIRLARDA IJOD KELGANDA YOZAMIZ'
          />
          </Box>
    </Box>
  );
}
