import React from "react";
import { useForm } from "react-hook-form";
import FormGroup from "../../Components/FormGroup";
import firebase from "../../Config/firebase";
import { useHistory } from 'react-router-dom';
import Button from "react-bootstrap/Button";

function AltaProductos() {
    const { register, handleSubmit, formState:{errors} } = useForm();
    const history = useHistory();
    
    const onSubmit = async (data) => {
        console.log("data", data);
        try {
            const document = await firebase.db.collection("productos")
            .add(data)
            console.log(document)
            history.push("/");
        } catch (error) {
            console.log("Error",error);
        }
    }

    return (
        <div>
            <h1>Registro de Productos</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup label="Nombre" register={{...register("title", {required:true})}} />
                {errors.title && <p>El campo es obligatorio</p>}
                <FormGroup label="Precio" register={{...register("price", {required:true})}} />
                {errors.price && <p>El campo es obligatorio</p>}
                <FormGroup label="Descripción" type="text" register={{...register("description", {required:true})}} />
                {errors.description && <p>El campo es obligatorio</p>}
                <div><Button type="submit">Aceptar</Button></div>
            </form>
        </div>
    );
}

export default AltaProductos;