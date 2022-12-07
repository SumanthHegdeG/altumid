import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import logo from '../images/logo.png'
const Header = () => {
  return (
    <Navbar bg='white' expand='lg' className='mx-4'>
      <>
        <LinkContainer to='/'>
          <Navbar.Brand>
            <img src={logo} alt='logo' />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto gap-3'>
            <NavDropdown title='Service' id='basic-nav-dropdown'>
              <LinkContainer to='/service/design'>
                <NavDropdown.Item>Design</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to='/service/development'>
                <NavDropdown.Item>Development</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to='/service/marketing'>
                <NavDropdown.Item>Digital Marketing</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to='/service/consulting'>
                <NavDropdown.Item>Digital Marketing</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <LinkContainer to='/about-us'>
              <Nav.Link>About US</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </>
    </Navbar>
  )
}

export default Header
