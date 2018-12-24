import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navegacion.css';
const Navegacion = () => {
    return (
        <nav className="navegacion">
            <NavLink to={'/nosotros'} activeClassName="activo">Nosotros</NavLink>
            <NavLink to={'/contacto'} activeClassName="activo">Contacto</NavLink>
            <NavLink to={'/add-item'} activeClassName="activo">Añadir Elemento</NavLink>
            <NavLink to={'/display-item'} activeClassName="activo">Mostrar Elementos</NavLink>
        </nav>
    );
};

export default Navegacion;