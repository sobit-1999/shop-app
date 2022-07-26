// import React, { useEffect, useState } from 'react'
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import { Box } from '@mui/system';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { selectUser } from './features/counter/inputSearchSlice';



export default function SearchList() {
    const dates = useSelector((state) => state.dates.value)
    const user = useSelector(selectUser);

  return (<Box sx={{ width: '90%', marginX: '5%', }}>
  <ImageList cols={4} gap={50}>
{dates.map(itms => { return itms.imgNameSum.map((item, index2) => {return <>
{user === item.name ?<> <Link to={item.to}>
    <ImageListItem key={index2}>
      <img
        src={`${item.avatar}?w=248&fit=crop&auto=format`}
        srcSet={`${item.avatar}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={item.name}
        loading="lazy"
      />
      <ImageListItemBar position="below" title={item.name} />
    </ImageListItem>
    </Link></> : ''}
</>})})}
</ImageList>
</Box>
  )
}
