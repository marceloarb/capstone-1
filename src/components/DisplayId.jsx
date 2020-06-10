import React, { Component,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from '../data.json';
import {Link} from 'react-router-dom';
import './DisplayId.css';
import { Container,Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody, Row, Col,Collapse, Navbar, NavbarBrand,NavbarToggler, Nav, NavItem, NavLink, Form, FormGroup, Label, Input, FormText  } from 'reactstrap';




const DisplayId = (props) =>{
    const {search}=props;
    const [items, setitems] = useState(Data);
    const product = Data.filter(p => p == search);
    console.log(product);
    return(
        <>
        <h1>{product}</h1>
        </>
    );
}

export default DisplayId;