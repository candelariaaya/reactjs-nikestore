import React,{useState,useEffect} from 'react';
import {
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';
import RegistroPage from '../Pages/RegistroPage';
import LoginPage from '../Pages/LoginPage';
import Menu from '../Components/Menu';
import Footer from '../Components/Footer';
import DetallePage from '../Pages/DetallePage';
import HomePage from '../Pages/HomePage';
import NotFoundPage from '../Pages/NotFoundPage';

function Admin (){
      
        return(
            <>
               <Menu />
                <Switch>
                <Redirect path="/home" to="/"/>
                <Route path="/" exact>
                    <HomePage />
                </Route>
                <Route path="*">
                    <NotFoundPage />
                </Route>
                </Switch>
                <Footer />
            </>
        )
}

export default Admin;