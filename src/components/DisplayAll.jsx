import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody,Form
  } from 'reactstrap';



const DisplayAll = (props)=>{

    const onClick = (ind)=>{
        ind.inventory -=1;
        const purchasedItem = {...ind, inventory:1}
        props.onSetProducts(purchasedItem);
    }

    return (
        props.items.map((db,index)=>{
            return (
                <CardGroup hover style={{width:"33%", display:"inline-block"}} >
                    <Card>
                        <CardImg style={{margin:"0px"}} top width="100%" height="400rem" src={process.env.PUBLIC_URL + db.img[0]} alt="Card image cap" />
                        <CardBody style={{textAlign:"center"}}>
                        <CardTitle><h3>{db.title}</h3></CardTitle>
                        <CardText>${db.price}</CardText>
                        <CardText>Quantity : {db.inventory}</CardText>
                        <button onClick={() => onClick(db)}  className="btn btn-secondary" ><Link  style={{color:"white"}} to="checkout">Buy now!</Link></button>
                        <p>Serial Number:{db.key},
                        Manufacture:{db.Manufacturer},
                        Category:{db.category}</p>
                        </CardBody>
                    </Card>
      
                </CardGroup>
                
            
            )
        })
    )
    

} 

export default DisplayAll;