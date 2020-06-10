import React, {useState} from 'react';
import Data from '../data.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody
  } from 'reactstrap';
import ShoppingCart from './ShoppingCart.jsx';



const DisplayAll = (props)=>{

    const onClick = (ind)=>{
        props.onSetProducts(ind);
    }

    return (
        Data.map((db,index)=>{
            return (
                <CardGroup style={{width:"33%", display:"inline-block"}} >
                    <Card>
                        <CardImg style={{margin:"0px"}} top width="100%" height="400rem" src={process.env.PUBLIC_URL + db.img[0]} alt="Card image cap" />
                        <CardBody style={{textAlign:"center"}}>
                        <CardTitle>{db.title}</CardTitle>
                        <CardSubtitle>{db.id}</CardSubtitle>
                        <CardText><p>Price</p>{db.price}</CardText>
                        <button onClick={() => onClick(db)}  className="btn btn-secondary" ><Link  style={{color:"white"}} to="checkout">Buy now!</Link></button>
                        </CardBody>
                    </Card>
      
                </CardGroup>
                
            
            )
        })
    )
    

} 

export default DisplayAll;