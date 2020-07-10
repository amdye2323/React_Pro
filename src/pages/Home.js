import React from 'react';
import Login from 'components/Login';
import Nav from 'components/MainPage/Nav';
import Foot from 'components/MainPage/Foot';

import {
    Container,
    
  } from 'semantic-ui-react';
import logo from 'image/logo3.png';


const Home = () =>(
    <div>
    <Nav/>  
    <Container text style={{marginTop: '7em',height:'100%'}}>
      <Login/>
    </Container>
    <Foot />
    </div>
);

export default Home;