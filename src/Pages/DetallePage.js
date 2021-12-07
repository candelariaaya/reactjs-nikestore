import React, { useState,useEffect } from 'react';
import {Link} from 'react-router-dom';
import { useParams } from 'react-router';
import Loading from '../Components/Loading';
import ProductoDetalle from '../Components/ProductoDetalle/index';
import firebase from '../Config/firebase';
import {Card,Button} from 'react-bootstrap';
import AuthContext from '../Context/AuthContext';

function DetallePage() {
    const [producto,setProducto] = useState(false);
    const [loading, setLoading] = useState(true);
    const {id}=useParams()
    console.log(id)
    
    useEffect(
        ()=>{        
            async function request(){
                try{
                    const response = await firebase.db.doc("productos/"+id)
                    .get()
                    if(response){
                        setProducto(response);
                        setLoading(false);
                    }
                } catch (error) {
                    console.log("Error", error);
                }
            }
            request();
        },[id]
    )

    return(
        <>
            <AuthContext.Consumer>
                {
                    context =>
                    <>
                        <Card className="text-center">
                            <Card.Header>¿Te interesa este producto?</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <Loading active={loading}>
                                        <>
                                            {
                                                producto &&
                                                <ProductoDetalle datos={producto.data()} />     
                                            }
                                        </>
                                    </Loading>    
                                </Card.Text>
                                {
                                    !context.userLogin &&
                                    <>
                                        <Button as={Link} to={{pathname:"/login"}} variant="primary">Ingresar</Button>
                                        <br></br><br></br>
                                        <p className="text-muted" style={{ fontSize: '20px'}}>Debes ingresar a tu cuenta para poder realizar la compra</p>
                                    </>
                            }
                            {
                                context.userLogin &&
                                <>
                                    <Link to={{pathname:"/comprar",state:{comprar:producto.title}}}><Button variant="primary">Comprar</Button></Link>
                                </>
                            }
                            </Card.Body>
                            <Card.Footer className="text-muted"><Link to={'/listado'}>Cancelar</Link></Card.Footer>
                        </Card>
                    </>
                }
            </AuthContext.Consumer>
        </>
    );
}    

export default DetallePage;
