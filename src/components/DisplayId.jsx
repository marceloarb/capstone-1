import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from '../data.json'
import './DisplayId.css';
import { Container,Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody, Row, Col,Collapse, Navbar, NavbarBrand,NavbarToggler, Nav, NavItem, NavLink, Form, FormGroup, Label, Input, FormText  } from 'reactstrap';




const DisplayId = (props) =>{
    const id = props.match.params.id;
    const product = Data.filter(item=>{
    return item.id == id;
})

    return(
        <>
            <div>
            <CardImg style={{margin:"0px"}} top width="100%" height="400rem" src={process.env.PUBLIC_URL + product[0].img[0]} alt="Card image cap" />
                        <CardTitle>{product[0].title}</CardTitle>
                        <CardSubtitle>{product[0].id}</CardSubtitle>
                        <CardText><p>Price</p>{product[0].price}</CardText>
                     <img src={process.env.PUBLIC_URL + product[0].img[0]} alt=""/>
                    <h1>{product[0].img[0]}</h1>
            </div>
        </>
    );
}

export default DisplayId;