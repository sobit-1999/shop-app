// import React from 'react'

// export default function CurvePlusList(props) {
//   return (
//     <div className='curve-list'>
//       {props.name}
//     </div>
//   )
// }

import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Link } from 'react-router-dom';
import './container.css';

export default function CurvePlusList({name}) {
  console.log(name);
  return (
    <Box sx={{ width: '90%', marginX: '5%', }}>
      <ImageList cols={4} gap={50}>

        {name.map((item, index) => {
       return  <Link to={item.to}>
          <ImageListItem key={index}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.sum}
              loading="lazy"
            />
            <ImageListItemBar position="below" title={item.sum} />
          </ImageListItem>
          </Link>
 } )}
      </ImageList>
    </Box>
  );
}