import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FormGroup from "../Components/FormGroup";
import firebase from "../Config/firebase";
import { useHistory } from 'react-router-dom';
import AlertCustom from '../Components/AlertCustom';
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function RegistroPage() {
    console.log(firebase.db);
    const { register, handleSubmit, formState:{errors} } = useForm();
    const history = useHistory();
    const [alert, setAlert] = useState({variant:"", text:""});

    
    const onSubmit = data => {
        console.log("data", data);
        firebase.auth.createUserWithEmailAndPassword(data.email, data.password)
        .then(responseUser => {
            console.log(responseUser);
            if(responseUser.user.uid){
                firebase.db.collection('usuarios')
                .add({
                    nombre: data.nombre,
                    apellido: data.apellido,
                    email: data.email,
                    userId: responseUser.user.uid
                })
                .then(document => {
                    console.log("document",document);
                    history.push("/");
                })
            };
        })
        .catch((error) => {
            console.log("Error",error.code);
            if(error.code === "auth/email-already-in-use"){
                setAlert({variant:"danger", text:"El email que intenta usar ya está registrado"});
            }
        });
        
    }

    return (
        <div>
            <h1>Registro de usuario</h1>
            <br></br><br></br>
             <form  onSubmit={handleSubmit(onSubmit)}>
                 <Container>
                    <Row>
                        <Col><FormGroup label="Nombre:" register={{...register("nombre")}} /></Col>
                        <Col><FormGroup label="Apellido:" register={{...register("apellido")}} /></Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormGroup label="Email:" type="email" register={{...register("email", {required:true})}} />
                            {errors.email && <p>El campo es obligatorio</p>}
                        </Col>
                        <Col>
                            <FormGroup label="Contraseña:" type="password" register={{...register("password",
                            {required:true,minLength:6})}}/>
                            {errors.password?.type === 'required' && <p>El campo es obligatorio</p>}
                            {errors.password?.type === 'minLength' && <p>Debe contener al menos 4 caracteres</p>}
                        </Col>
                    </Row>
                    
                    <br></br>
                    
                    <div><Button type="submit">Registrar</Button></div>

                    <AlertCustom variant={alert.variant} text={alert.text} />
                </Container>
            </form>
        </div>
    );
}

export default RegistroPage;