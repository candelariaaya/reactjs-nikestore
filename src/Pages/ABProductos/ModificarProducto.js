import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import firebase from '../../Config/firebase';
import Button from 'react-bootstrap/Button';
import FormGroup from '../../Components/FormGroup';
import Loading from '../../Components/Loading';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

function ModificarProducto() {
    const { register, handleSubmit, setValue } = useForm();
    const history = useHistory();
    
    const onSubmit = async (data) => {
        console.log("data", data);
        try {
            const document = await firebase.db.doc("productos/"+id)
            .set(data)
            console.log("modificar",document)
            history.push("/listado");
        } catch (error) {
            console.log("Error",error);
        }
    }
    
    const [producto,setProducto] = useState({});
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

                        setValue("title", response.data().title);
                        setValue("price", response.data().price);
                        setValue("description", response.data().description);
                    }
                } catch (error) {
                    console.log("Error", error);
                }
            }
            request();
        },[id, setValue]
    )

    const handleDelete = async () => {
        try{
            const document = await firebase.db.doc("productos/"+id)
            .delete()
            console.log(document)
            history.push("/");
        } catch (error) {
            console.log("Error", error);
        }
    }

    return(
        <Loading active={loading}>

                <div>
                    <h1>Modificar Producto</h1>
                    <br></br>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormGroup label="Nombre" register={{...register("title", {required:true})}} />
                        <FormGroup label="Precio" register={{...register("price", {required:true})}} />
                        <FormGroup label="Descripción" type="text" register={{...register("description", {required:true})}} />
                        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '50px'}}>
                            <div><Button type="submit" variant="primary">Guardar</Button></div>
                            <div><Button variant="danger" onClick={handleDelete}>Eliminar</Button></div>
                            <div><Button variant="outline-secondary" as={Link} to={'/listado'}>Cancelar</Button></div>
                        </div>
                    </form>
                </div>
    
        </Loading>
    );
}    

export default ModificarProducto;
