import React, { Component, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col,Collapse, Navbar, NavbarBrand,NavbarToggler, Nav, NavItem, NavLink  } from 'reactstrap';
import { Link } from 'react-router-dom';

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
                    <NavLink href="./PicturesSlide">Dresses</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap">Jeans</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap">Tops</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap">Bottoms</NavLink>
                    </NavItem>
                </Nav>
                </Collapse>

                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-dark my-2 my-sm-0 "  type="submit">Search</button>
                </form>
                <Link>
                <svg className="bi bi-cart4" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                </svg></Link>
            </Navbar>
            
    </div>
    );
}

export default NavBar;