import React, {Component} from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Header from './Header/Header';
import Navegacion from './Navegacion/Navegacion';
import Nosotros from './Nosotros/Nosotros';
import Contacto from './Contacto/Contacto';
import CreateProduct from './CreateProduct';
import DisplayProduct from './DisplayProduct';
import UpdateProduct from './UpdateProduct';
import Example from './Example';

class Router extends Component {

    render() {

        return (
            <BrowserRouter>
                 <div className="contenedor">
                    <Header />
                    <Navegacion />
                    <Switch>                                          
                        <Route exact path="/" component={Example} /> 
                        <Route exact path="/nosotros" component={Nosotros} /> 
                        <Route exact path="/contacto" component={Contacto} /> 
                        <Route exact path="/add-item" component={CreateProduct} />
                        <Route path="/display-item" component={DisplayProduct} />
                        <Route path="/edit/:id" component={UpdateProduct} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default Router;