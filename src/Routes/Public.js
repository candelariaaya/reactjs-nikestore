import {
  Switch,
  Route,
  BrowserRouter as Router
} from 'react-router-dom';
import RegistroPage from '../Pages/RegistroPage';
import LoginPage from '../Pages/LoginPage';
import ListadoPage from '../Pages/ListadoPage';
import DetallePage from '../Pages/DetallePage';
import ModificarProducto from '../Pages/ABProductos/ModificarProducto';
import Comprar from '../Pages/Comprar';
import HomePage from '../Pages/HomePage';
import NotFoundPage from '../Pages/NotFoundPage';
import Menu from '../Components/Menu';
import Footer from '../Components/Footer';
import AltaProductos from '../Pages/ABProductos/AltaProductos';

function Public() {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route path="/registro">
          <RegistroPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/listado">
          <ListadoPage />
        </Route>
        <Route path="/productos/alta">
          <AltaProductos />
        </Route>
        <Route path="/productos/modificar/:id">
          <ModificarProducto />
        </Route>
        <Route path="/productos/:id">
          <DetallePage />
        </Route>
        <Route path="/comprar">
          <Comprar />
        </Route>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default Public;