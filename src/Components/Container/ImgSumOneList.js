import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Checkbox, Collapse, FormControl, Input, InputLabel, List, ListItemButton, ListItemText, MenuItem, Select  } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './features/counter/counterSlice';

;
export default function ImgSumOneList({name, i}) {
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  
  const count = useSelector((state) => state.counter.value) //redux
  const dispatch = useDispatch()
  
const imgSumId = name.id

console.log(imgSumId);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleChange = (event) => {
    setAge(event.target.value);
  };

const parse ={
      age1: age,
      sum1: name.sum*count,
      img1: name.img,
      id1: name.id,
      soni: count}

  const SavatchaFunc = () => {
  window.localStorage.setItem('ggghhhhhh'+imgSumId,
   JSON.stringify(parse)
   );
  //  updateUI();

    // localStorage.setItem('size'+i, age)
    // localStorage.setItem('name'+i, name.sum)
    // localStorage.setItem("img"+i, name.img)

    console.log(JSON.parse(window.localStorage.getItem('ggghhhhhh')), 'locolstoreggggggggggggggggg');
  }

  const color1Funck = () => {
    localStorage.setItem('color'+imgSumId, 'black')
  }

  const color2Funck = () => {
    localStorage.setItem('color'+imgSumId, 'white')
  }

  const color3Funck = () => {
    localStorage.setItem('color'+imgSumId, 'green')
  }

  return (<> <Card sx={{ width: 480, marginX: '30%', marginY: 2  }}>
        <CardMedia
          component="img"
          height="440"
          image={name.img}
          alt="green iguana"
        />
          <CardContent>
          <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      >
      <CardContent sx={{display: 'flex', justifyContent: 'space-around', textAlign: 'center'}}> 
          <Typography gutterBottom variant="h5" component="div">
            {name.sum*count} $
          </Typography>
          <Typography >
                  <div>
        <button
          aria-label="Increment value"
          onClick={(e) => dispatch(increment())}
          >
          +
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={(e) => dispatch(decrement())}
          >
          -
        </button>
      </div>
      </Typography> 
     <Link to='/savatcha'><AddShoppingCartIcon onClick={SavatchaFunc} sx={{marginRight: '-220px'}}/> </Link> 
     </CardContent>

      {/* <CardContent sx={{display: 'flex', justifyContent: 'center', textAlign: 'center'}}>  */}
          <FormControl variant="standard" sx={{ m: 1, minWidth: 80, textAlign: 'center' }}>
        <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
          sx={{ border: 'none'}}
        >
          {name.size.map((item, index) => {return  <MenuItem key={index} value={item.s1}>{item.s1}</MenuItem>
        })}
        </Select>
      </FormControl> 
        <input className='input-color1' type="submit" value='' onClick={color1Funck}/>
        <input className='input-color2' type="submit" value='' onClick={color2Funck} />
        <input className='input-color3' type="submit" value='' onClick={color3Funck}/>
          {/* </CardContent> */}

      <ListItemButton onClick={handleClick} sx={{width: '100%', textAlign: 'center'}}>
        <ListItemText primary="Information about clothes" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <ListItemText primary={name.information} />

        </List>
      </Collapse>
    </List>
        </CardContent>
    </Card>    
    </>
  );
}
