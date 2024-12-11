import { Navbar, Container, Stack, Button, Nav, NavDropdown, DropdownDivider, Form, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/img/pplogo.png';
import '../../App.css';
import TechnologyPage from '../../pages/technology';
import Layout from './layout';
import {Link, Navigate, Outlet, Route} from 'react-router-dom';
import HomePage from '../../pages/home';


function NavigationBar() {
  const handleSelect = () => console.log({Layout});



  return (
    <Navbar bg="#000" variant="dark" expand="lg">
      <Container>
        <img src={logo} className="App-logo" alt="logo"/>
        <Navbar.Brand className='Navbar-Title' href="/home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className='nav-link'>Home</Link>
            <Link to="/technology" className='nav-link'>Technology</Link>
            <Link to="/sustainability" className='nav-link'>Sustainability</Link>
            <Link to="/movements" className='nav-link'>Movements</Link>
          </Nav>
          <Outlet/>
          <Form  >
        
      </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;