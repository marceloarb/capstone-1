import React, { Component, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col,Collapse, Navbar, NavbarBrand,NavbarToggler, Nav, NavItem, NavLink  } from 'reactstrap';

const Slide = (props) =>{
    
    
    return(
        <div>
            {props.onImage}
        </div>
    )
}

export default Slide;