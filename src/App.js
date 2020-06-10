import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import Data from './data.json';
import { Router } from '@reach/router';
import {Route} from 'react-router-dom';
import Slide from './components/Slide';
import NavBar from './components/NavBar';
import DisplayId from './components/DisplayId';
import DisplayAll from './components/DisplayAll'

function App() {
  // const slide = Data.map((post)=>{
  //   return ( post.img )
  // });
  
  return (
    <Container >
        <Col>
        <NavBar></NavBar>
        <Route exact path="/">
          <DisplayAll></DisplayAll>
        </Route>
        <Route exact path="/product/:id" component={DisplayId}/>
        
        {/* <Slide key={Data.map((data)=> {return data.id })} onImage={slide.map((img)=>{ return <img src={process.env.PUBLIC_URL + img[0]}/>})}/> */}
        </Col>
      
    </Container>
  );
}

export default App;
