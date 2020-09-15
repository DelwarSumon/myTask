import React, { useState } from 'react';
import { Container, NavDropdown, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    const [publicUrl, setPublicUrl] = useState("/delwar/laravel_react/myTask/");
    return (
        <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
            <Container>
                <Link to={`${publicUrl}`}>
                    <Navbar.Brand >Task Management</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to={`${publicUrl}`}>
                            <Nav.Item className="text-white mr-2">Home</Nav.Item>
                        </Link>
                        <Link to={`${publicUrl}projects`}>
                            <Nav.Item className="text-white mr-2">Projects</Nav.Item>
                        </Link>
                        <Link to={`${publicUrl}about`}>
                            <Nav.Item className="text-white mr-2">About</Nav.Item>
                        </Link>
                        <Link to={`${publicUrl}contact`}>
                            <Nav.Item className="text-white mr-2">Contact</Nav.Item>
                        </Link>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    {/* <Form inline>
                    <FormControl type="text" p laceholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;