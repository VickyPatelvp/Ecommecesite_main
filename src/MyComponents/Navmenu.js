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

function Navmenu() {
  return (
    <Navbar bg="black" className='sticky-header' expand="lg" style={{backgroundColor:'white'}}>
    <Container fluid style={{backgroundColor:"white"}}> 
    <img className="logo" src="images/logo/main-logo.jpg" alt="Logo"style={{ maxHeight: '70px' }} />
      <Navbar.Toggle aria-controls="navbarScroll"  />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className=" ms-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link className="nav-text"  href="#action1"><HomeIcon></HomeIcon> </Nav.Link>
          <Nav.Link className="nav-text" href="#action2">
          <CarouselItem></CarouselItem>
          <Badge badgeContent={4} color="primary">
          <AddShoppingCartIcon/>
</Badge>
          
            </Nav.Link>
          {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown> */}
          <Nav.Link className="nav-text" href="#">
            <PersonIcon></PersonIcon>
          </Nav.Link>
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

