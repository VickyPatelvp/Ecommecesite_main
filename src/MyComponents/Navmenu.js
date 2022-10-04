import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { CarouselItem } from 'react-bootstrap';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import { Link } from 'react-router-dom';

function Navmenu() {
  return (
    <Navbar bg="black" className='sticky-header' expand="lg" style={{backgroundColor:'white'}}>
    <Container fluid style={{backgroundColor:"white"}}> 
    <Link className="nav-text"  to="/">
    <img className="logo" src="images/logo/main-logo.jpg" alt="Logo"style={{ maxHeight: '70px' }} />
    </Link>
      <Navbar.Toggle aria-controls="navbarScroll"  />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className=" ms-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Link className="nav-text"  to="/"><HomeIcon /> </Link>
          <Link className="nav-text" to="/cart">
          <CarouselItem />
          <Badge badgeContent={4} color="primary">
          <AddShoppingCartIcon/>
</Badge>
          
            </Link> 
          <Link className="nav-text" to="login">
            <PersonIcon />
          </Link>
        </Nav>
        <Form className="d-flex ms-">
          <Form.Control 
            type="search"
            placeholder="Search"
            className="me-2 inputbox1"
            aria-label="Search"
          />
          <Button className='btn-primary text-white btn1 m-0' variant="outline-success" ><SearchIcon></SearchIcon></Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
 
  )
}

export default Navmenu

