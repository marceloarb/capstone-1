import React, { Component, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slide from './PicturesSlide'
import { Container, Row, Col,Collapse, Navbar, NavbarBrand,NavbarToggler, Nav, NavItem, NavLink  } from 'reactstrap';

const NavBar = (props)=>{
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    

    


    return(
        <div>
            <Navbar color="faded" light>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <NavbarBrand href="/" className="mr-auto">Brilho Vital</NavbarBrand>
                
                <Collapse isOpen={!collapsed} navbar>
                <Nav navbar>
                    <NavItem>
                    <NavLink href="./PicturesSlide">Dress</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap">Jeans</NavLink>
                    </NavItem>
                </Nav>
                </Collapse>
                <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-dark my-2 my-sm-0 "  type="submit">Search</button>
                </form>
            </Navbar>
            
    </div>
    );
}

export default NavBar;