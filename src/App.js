import React,{useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Jumbotron } from 'reactstrap';
import Data from './data.json';
import { Router } from '@reach/router';
import {Route} from 'react-router-dom';
import ShoppingCart from './components/ShoppingCart';
import NavBar from './components/NavBar';
import Slide from './components/Slide';
import DisplayAll from './components/DisplayAll'

function App() {
  const [products, setProducts] = useState([]);
  const [items, setItems] = useState(Data);
  
  const getItemFromChild = (value) => {
    const newItem = Data.filter(item=>
      Object.values(item).includes(value)
      );
    setItems(newItem);
  }
  


  const handleClick = (ind)=>{ 

    for(let x = 0; x<products.length; x++){
      if(products[x-1] === products[x]){
        products.splice(x,1);
        return setProducts([...products,ind]);;
      }
    }
    setProducts([...products,ind]);

}

  return (
    <Jumbotron style={{padding:"0px"}} >
        <NavBar products={products} getItemFromChild={getItemFromChild} />
       
        <Route exact path="/">
          <h1 id="logo">Brilho Vital</h1>
          <DisplayAll  items={items} products={products} onSetProducts={handleClick.bind()} ></DisplayAll>
        </Route>
        <Route exact path="/checkout">
        <ShoppingCart  setProducts={setProducts} products={products} />
        </Route>
    </Jumbotron>
  );
}

export default App;
