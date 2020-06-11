import React,{useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col,Jumbotron } from 'reactstrap';
import Data from './data.json';
import { Router } from '@reach/router';
import {Route} from 'react-router-dom';
import ShoppingCart from './components/ShoppingCart';
import NavBar from './components/NavBar';
import DisplayId from './components/DisplayId';
import DisplayAll from './components/DisplayAll'

function App() {
  const [products, setProducts] = useState([]);
  const [items, setItems] = useState(Data);
  
  const getItemFromChild = (value) => {
    console.log(value)
    const newItem = Data.filter(item=>
      Object.values(item).includes(value)
      )
    setItems(newItem);
    console.log(newItem);
    

  }
  const handleClick = (ind)=>{
    setProducts([...products,ind]);
}

  return (
    <Jumbotron >
        <NavBar getItemFromChild={getItemFromChild} />
        <Route exact path="/">
          <DisplayAll  items={items} onSetProducts={handleClick.bind()} ></DisplayAll>
        </Route>
        <Route exact path="/checkout">
        <ShoppingCart products={products} />
        </Route>
    </Jumbotron>
  );
}

export default App;
