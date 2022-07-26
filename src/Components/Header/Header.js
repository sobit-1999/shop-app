



import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Saydbar from '../Saydbar/Saydbar';
import { BottomNavigation, Button, ButtonGroup } from '@mui/material';
import { Link } from 'react-router-dom';
import { imgNameWomenCurveMenKids } from '../AvatarName';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
// import { padding } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux'
import { selectUser, setUser } from '../Container/features/counter/inputSearchSlice';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  const [value, setValue] = React.useState('recents');

const dispatch=useDispatch()
const user = useSelector(selectUser);


  const [bar, setBar] = React.useState(false)
  
  const barFunction = (e) => {
    setBar(!bar)
  }

    const handleChange = (e) => {
      dispatch(setUser(e.target.value))
    }
  return (
<>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"
       sx={{  backgroundColor: 'slategray' }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}  onClick = {barFunction} 
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            SHEIN
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              value={user}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Typography 
            variant="h6"
            sx={{ display: { xs: 'none', sm: 'block' }, paddingX: 1, paddingTop: 1 }}>
       <Link to='savatcha'><LocalGroceryStoreIcon/></Link>  
          </Typography>
      <Link to = '/'>  <Typography
            variant="h6"
            noWrap
            component="div"
          >
            LOGIN
          </Typography></Link>
        </Toolbar>
     
      <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      sx={{  backgroundColor: '' }}
    >

     <ButtonGroup variant="text" aria-label="text button group"> {imgNameWomenCurveMenKids.map((item, index) => (
         <Link to={item.to}>    <Button>{ item.name }</Button></Link>
     ))}
     </ButtonGroup>

    </BottomNavigation>
      </AppBar>
    </Box> {bar? <Saydbar/> : ''}
</>
  );
}