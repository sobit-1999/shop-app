import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Avatar } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { imgNameWomenCurveMenKids } from '../AvatarName';
import { Link } from 'react-router-dom';

export default function Women() {
  const [open, setOpen] = React.useState(false);
  
  
  const handleClick = () => {
    setOpen(!open);
  };
  
  return (
    <div> 
 { imgNameWomenCurveMenKids[2].imgNameSum.map((item, index) => {
   return <Link to={item.to}> <List
      sx={{ 
        width: '100%',
        maxWidth: 360,
        // bgcolor: 'background.paper'
      }}
      key={index}
      > 
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <Avatar
          src={item.avatar}
          sx={{
            width:50,
            height: 50,
            marginX: "10px"
          }}
          />
        </ListItemIcon>
        <ListItemText primary={item.name}/>
         <ArrowForwardIosIcon 
          sx={{
            fontSize: 13
          }}/> 
      </ListItemButton>

    </List></Link>
})}
 </div>
)}