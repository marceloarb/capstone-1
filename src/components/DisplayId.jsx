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
            <img src="asdf" alt=""/>
            <form action="">

            </form>
        </>
    );
}

export default DisplayId;