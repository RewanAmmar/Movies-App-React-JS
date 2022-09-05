import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



export default function Header() {

 
  
  return (
    <>
       <Navbar bg="light" expand="lg">
      <Container>       
        <Navbar.Brand href="#home">Movies App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/"className='mx-3'>Movies</Link>
            <Link to="/favorites" className='mx-3'>Favorites</Link>
           
          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}
