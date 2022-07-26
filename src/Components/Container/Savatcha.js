import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import PlaylistRemoveIcon from '@mui/icons-material/PlaylistRemove';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'


export default function Savatcha() {
  const dates = useSelector((state) => state.dates.value)

  return (<div> {dates.map(i => {return i.imgNameSum.map(itms2 => {return itms2.imgSum.map((item, index3) =>
        {return JSON.parse(window.localStorage.getItem('ggghhhhhh'+item.id)) === null ? ''
       : <Card sx={{ width: 500, marginX: '10%', display: 'flex',marginTop: 10  }} key={index3}>
      <CardMedia
        component="img"
        width='200px'
        height="340"
        image=  {JSON.parse(window.localStorage.getItem('ggghhhhhh'+item.id)).img1}
        alt="green iguana"
      />
    <Card sx={{ minWidth: 645, paddingX: '10%'}}>
      {/* <Card> */}

       <Link to='/savatcha-yangilanganda' > <PlaylistRemoveIcon  sx={{marginLeft: '23%'}} onClick = {() => localStorage.removeItem('ggghhhhhh'+item.id)} /></Link> <br/>
      {/* </Card> */}
      <input className={localStorage.getItem('color'+item.id)==='black'? 'input-color1': localStorage.getItem('color'+item.id)==='green'?'input-color3': 'input-color2'} type="submit" value='' />
     <h4> Size:  {JSON.parse(window.localStorage.getItem('ggghhhhhh'+item.id)).age1} </h4>
     <h4> Summa: {JSON.parse(window.localStorage.getItem('ggghhhhhh'+item.id)).sum1} $  </h4>
     <h2> Soni: {JSON.parse(window.localStorage.getItem('ggghhhhhh'+item.id)).soni}</h2>
    </Card>

    </Card>
    
    })})})}
</div>
  );
}
