import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import AnimatedButton from 'react-animated-buttons';

import {
    Card, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody
  } from 'reactstrap';



const DisplayAll = (props)=>{
    
    const onClick = (ind)=>{
        if(ind.inventory <=0){

        }
        else{ind.inventory -=1;
        const purchasedItem = {...ind, inventory:1}
        props.onSetProducts(purchasedItem);}
    }

    return (
            props.items.map((db,index)=>{
                return (
                    <CardGroup hover style={{width:"24.3%", display:"inline-block", margin:"5px"}} >
                        <Card>
                            <CardImg style={{margin:"0px"}} top width="100%" height="400rem" src={process.env.PUBLIC_URL + db.img[0]} alt="Card image cap" />
                            <CardBody style={{textAlign:"center"}}>
                            <CardTitle ><h3>{db.title}</h3></CardTitle>
                            <CardText>${db.price}</CardText>
                            <CardText>Quantity : {db.inventory}</CardText>
                            <AnimatedButton onClick={() => onClick(db)}  className="btn btn-secondary" >Add to cart</AnimatedButton>
                            <CardSubtitle>Serial Number:{db.key}</CardSubtitle>
                            <CardSubtitle>Manufacture:{db.Manufacturer}</CardSubtitle>
                            <CardSubtitle>Category:{db.category}</CardSubtitle>
                            </CardBody>
                        </Card>
        
                    </CardGroup>
                    
                
                )
            })
        
    )
    

} 

export default DisplayAll;