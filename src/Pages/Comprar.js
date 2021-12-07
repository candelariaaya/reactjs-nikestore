import React from 'react';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import AuthContext from '../Context/AuthContext';

function Comprar() {

    return (
        <div>
            <AuthContext.Consumer>
                {
                    context => 
                    <>
                        <Card className="text-center">
                            <Card.Header>Felicidades {context.userInfo.nombre}</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    Has realizado tu compra con éxito!
                                </Card.Text>
                            <Button as={Link} to={{pathname:"/"}} variant="primary">Volver al inicio</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted"><Link to={'/listado'}>Cancelar</Link></Card.Footer>
                    </Card>
                    </>
                }
            </AuthContext.Consumer>
        </div>
    );
}     

export default Comprar;