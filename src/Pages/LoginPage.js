import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import FormGroup from "../Components/FormGroup";
import firebase from "../Config/firebase";
import AuthContext from '../Context/AuthContext';
import { useHistory } from 'react-router-dom';
import Button from "react-bootstrap/Button";

function LoginPage() {
    const { register, handleSubmit, formState:{errors} } = useForm();
    const context = useContext(AuthContext);
    const history = useHistory();
    
    const onSubmit = async (data) => {
        console.log("data", data);
        try{
            const responseUser = await firebase.auth.signInWithEmailAndPassword(data.email, data.password);
            if(responseUser.user.uid){
                const userInfo = await firebase.db.collection('usuarios')
                .where("userId", "==", responseUser.user.uid)
                .get();
                console.log("userInfo", userInfo.docs[0]?.data());
                context.loginUser(userInfo.docs[0]?.data());
                history.push("/");
            }
        } catch (error){
            console.log("Error", error);
        }
    }

    return (
        <div>
            <h1>Iniciar Sesión</h1>
            <br></br><br></br>
            <form onSubmit={handleSubmit(onSubmit)}>                
                <FormGroup label="Email:" type="email" register={{...register("email", {required:true})}} />
                {errors.email && <p>El campo es obligatorio</p>}
                
                <FormGroup label="Contraseña:" type="password" register={{...register("password",
                {required:true,minLength:6})}}/>
                {errors.password?.type === 'required' && <p>El campo es obligatorio</p>}
                {errors.password?.type === 'minLength' && <p>Debe contener al menos 4 caracteres</p>}
                
                <div><Button variant="primary" type="submit">Ingresar</Button></div>
            </form>
        </div>
    );
}

export default LoginPage;