import React,{useState} from 'react';
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
  const [items, setitems] = useState(products);
  const [search, setSearch] = useState('');
  
  const handleClick = (ind)=>{
    
    setProducts([...products,ind]);
}
console.log(search);
  return (
    <Jumbotron >
        <NavBar setSearch={setSearch} search={search} ></NavBar>
        <Route exact path="/">
          <DisplayAll  items={items} onSetProducts={handleClick.bind()} ></DisplayAll>
        </Route>
        <Route exact path="/product" render={(props)=> <DisplayId setSearch={setSearch}/>} />
        <Route exact path="/checkout"  >
        <ShoppingCart products={products} />
        </Route>
        {/* <Slide key={Data.map((data)=> {return data.id })} onImage={slide.map((img)=>{ return <img src={process.env.PUBLIC_URL + img[0]}/>})}/> */}
      
    </Jumbotron>
  );
}

export default App;
