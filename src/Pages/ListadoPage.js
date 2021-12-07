import React, { useState, useEffect } from 'react';
import Producto from '../Components/Producto';
import Loading from '../Components/Loading';
import firebase from '../Config/firebase';
import Table from 'react-bootstrap/Table';

function ListadoPage() {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(
        ()=>{
            async function request(){
                try{
                    const querySnapshot = await firebase.db.collection("productos")
                    .get()
                    if(querySnapshot.docs){
                        setProductos(querySnapshot.docs);
                        setLoading(false);
                    }
                } catch (error) {
                    console.log("Error", error);
                }
            }
            request();
        },[]
    )

    
    return (
        <Loading active={loading}>
            <div>
                <h1>Lista de productos Nike</h1>
                <div style={{ width: '80%', display: 'block', textAlign: 'center', margin: '20px', float: 'left' }}>
                    <Table bordered hover>
                        <thead>
                            <tr>
                            <th style={{width: '32%'}}>Producto</th>
                            <th style={{width: '18%'}}>Precio</th>
                            <th style={{width: '50%'}}>Descripción</th>
                            </tr>
                        </thead>
                    </Table>
                </div>
                <div>                  
                    {productos.map(producto=><Producto key={producto.id} datos={{...producto.data(), id:producto.id}} />)}
                </div>
                
            </div>
        </Loading>
    );
}

export default ListadoPage;