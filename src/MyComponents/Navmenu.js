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
import { Opacity } from '@mui/icons-material';

function Navmenu() {
  return (
    <><Navbar bg="black" className='sticky-header' expand="lg" style={{ backgroundColor: 'white', Opacity:'0.5'}}>
      <Container fluid style={{ backgroundColor: "white" }}>
        <Link className="nav-text" to="/">
          <img className="logo" src="images/logo/main-logo.jpg" alt="Logo" style={{ maxHeight: '70px' }} />
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className=" ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link className="nav-text" to="/"><HomeIcon /> </Link>
            <Link className="nav-text" to="/cart">
              <CarouselItem />
              <Badge badgeContent={4} color="primary">
                <AddShoppingCartIcon />
              </Badge>

            </Link>
            <Link className="nav-text" to="login">
              <PersonIcon />
            </Link>
          </Nav>
        
 
  
          <Form className="d-flex ms-">
          <input type="text" class="form-control d-flex ms-" placeholder="Search" aria-label="Recipient's username with two button addons"/>
          <button class="btn btn-sm  btn-outline-secondary" type="button"><SearchIcon></SearchIcon></button>
          
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
  </>
  )
}
export default Navmenu

