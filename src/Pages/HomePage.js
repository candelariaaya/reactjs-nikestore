import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Nav from 'react-bootstrap/Nav';
import Button from "react-bootstrap/Button";

function HomePage() {

    
    return (
        <div>
            
            <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c4f3.png" alt="Nike logo" className="d-block w-25 mx-auto pt-4"></img><br></br>
            <div>
                <Carousel variant="dark">
                <Carousel.Item>
                    <img 
                    className="d-block w-50 mx-auto"
                    src="https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwf0253b17/products/NI_CJ0630-600/NI_CJ0630-600-1.JPG"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-50 mx-auto"
                    src="https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwe378cd70/products/NI_AO0739-017/NI_AO0739-017-1.JPG"
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-50 mx-auto"
                    src="https://sporting.vteximg.com.br/arquivos/ids/202837-1500-1500/4BA5876-082-00.jpg?v=637190122600300000"
                    alt="Third slide"
                    />
                </Carousel.Item>
                </Carousel>
            </div>
            <br></br>
            <div>
                <Nav className="justify-content-center" variant="pills">
                    <Nav.Item>
                        <Button as={Link} to="/listado">Listado de productos</Button>
                    </Nav.Item>
                </Nav>
            </div>
        </div>
   
    );
}

export default HomePage;