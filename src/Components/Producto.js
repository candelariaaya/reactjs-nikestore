import React from "react"
import {Link} from "react-router-dom"
import AuthContext from '../Context/AuthContext';
import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/Button";

function Producto(props) {
    const {datos} = props;

    return (
        
        <AuthContext.Consumer>
            {
                context => 
                <div style={{ width: '100%', textAlign: 'center' }}>
                    <Table border hover>
                            <tbody>
                                <tr>
                                <td>{datos.length}</td>
                                <td>{datos.title}</td>
                                <td>${datos.price}</td>
                                <td className="descrip-prod">{datos.description}</td>
                                <div style={{ display: 'flex', flexDirection: 'column', float:'right' }}>
                                    <div><Button as={Link} to={"/productos/"+datos.id}>Ver Detalle</Button></div>
                                    <br></br>
                                    {
                                        context.userLogin &&
                                        <div><Button as={Link} to={"/productos/modificar/"+datos.id}>Modificar</Button></div>
                                    }
                                </div>
                                </tr>
                            </tbody>
                    </Table>    
                </div>
            }
        </AuthContext.Consumer>
    );
}

export default Producto;