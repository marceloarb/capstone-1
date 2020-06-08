import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import Data from './data.json';
import Slide from './components/PicturesSlide'
import NavBar from './components/NavBar';

function App() {
  const data = Data;
  return (
    <Container>
      <Col>
      <NavBar></NavBar>
      <Slide/>
      </Col>
    </Container>
  );
}

export default App;
