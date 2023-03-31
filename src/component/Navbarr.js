import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Navbarr = () => {
  return (
    <div>
      <Navbar  expand="lg" style={{backgroundColor: '#101222'}}>
      <Container>
        <Navbar.Brand as={Link} to="home" style={{color: 'white', fontWeight: 'bold', fontSize: 22}}>ElevateYourBrand</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="home" style={{color: 'white', fontWeight: 'bold', fontSize: 19}}>Home</Nav.Link>
            <Nav.Link as={Link} to="service" style={{color: 'white', fontWeight: 'bold', fontSize: 19}}>Service</Nav.Link>
            <Nav.Link as={Link} to="product" style={{color: 'white', fontWeight: 'bold', fontSize: 19}}>Product</Nav.Link>
            <Nav.Link as={Link} to="signup" style={{color: 'white', fontWeight: 'bold', fontSize: 19}}><button className='btn btn-primary'>SignUp</button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbarr
