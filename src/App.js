
import { Box } from '@mui/material';
import React, { useEffect }  from 'react';
import Header from './Components/Header/Header';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {  imgNameWomenCurveMenKids } from './Components/AvatarName';
import CurvePlusList from './Components/Container/CurvePlusList';
import Container from './Components/Container/Container';
import ImgSumOneList from './Components/Container/ImgSumOneList';
import Savatcha from './Components/Container/Savatcha';
import { Counter } from './Components/Container/features/counter/Counter';
import Login from './Components/Login';
import SearchList from './Components/Container/SearchList';


function App() {

//   useEffect(() => {
  

//     { imgNameWomenCurveMenKids.map(i => {return i.imgNameSum.map(itms2 => {return itms2.imgSum.map((item, index3) =>
//       { console.log(item)}     
//     )})})} 

// }, [])

  return (
  
    <BrowserRouter>
      <Box sx={{
             marginX: '2%',
           }}>
       
       <Header/>
       <SearchList/>

          <Routes>
  <Route path='/' element={<Login/>} />

            <Route path='/savatcha' element={<Savatcha/>} />
            <Route path='/savatcha-yangilanganda' element={<Savatcha/>} />
            

            {imgNameWomenCurveMenKids.map((item, index1) => {
            return  <Route key={index1} path={ item.to } element={<Container name={item.imgNameSum} />} />
            })}
                 
                                             {/* //bu rasimlar va narhlari */}

            { imgNameWomenCurveMenKids.map(itms => { return itms.imgNameSum.map((item, index2) => {
                   return <Route key={index2} path={item.to} element = {<CurvePlusList name={item.imgSum}/>} />
                  })})}
                                              
                                              {/* bu bittalik rasimlar */}


            { imgNameWomenCurveMenKids.map(i => {return i.imgNameSum.map(itms2 => {return itms2.imgSum.map((item, index3) => 
              {return <Route key={index3} path={item.to} element = {<ImgSumOneList name={item} i={index3}/> } />}
              
            )})})} 
                  
          </Routes>
       </Box>
  </BrowserRouter>

  );
}

export default App;
