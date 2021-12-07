import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Nav, Navbar} from 'react-bootstrap';
import AuthContext from '../Context/AuthContext';
import Alert from 'react-bootstrap/Alert';

function Menu() {
    
    return (
        <>
            <AuthContext.Consumer>
                {
                    context => 
                    <>
                        <Navbar expand="dark" bg="dark" variant="dark">
                        <Navbar.Brand as={Link} to="/" className="">Tienda Nike</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                            {
                                !context.userLogin &&
                                <>
                                    <Nav.Link as={Link} to="/registro">Registro</Nav.Link>
                                    <Nav.Link as={Link} to="/login">Ingresar</Nav.Link>
                                </>
                            }
                            {
                                context.userLogin &&
                                <>
                                    <Nav.Link as={Link} to="/productos/alta">Alta Productos</Nav.Link>
                                    <Nav.Link onClick={context.logoutUser}>Salir</Nav.Link>
                                </>
                            }
                        </Nav>
                        </Navbar.Collapse>
                        </Navbar>
                        {
                            context.userInfo &&
                                <div>
                                    <Alert  className="text-center">
                                        Hola {context.userInfo.nombre}! Bienvenido a tu cuenta Nike.
                                        <br></br>
                                        Ya puedes empezar a comprar tus productos favoritos.
                                    </Alert>
                                </div>
                        }
                        
                    </>
                }
            </AuthContext.Consumer>
        </>
    );
}

export default Menu;