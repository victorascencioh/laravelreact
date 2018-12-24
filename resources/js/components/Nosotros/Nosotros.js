import React, { Component } from 'react';
import './Nosotros.css';
class Nosotros extends Component {
    render() {
        return (
            <div className="contenedor-nosotros">
                <div className="imagen">
                    <img src="/img/camisa_1.png" alt="imagen nosotros" />
                </div>
                <div className="contenido">
                    <h2>Sobre Nosotros</h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Integer hendrerit et ipsum ac gravida. Morbi ac malesuada purus. 
                    Cras eu laoreet justo. Aenean pulvinar dapibus sem, a accumsan metus 
                    fermentum a. Aenean fermentum porttitor tellus tincidunt sagittis. 
                    Nullam non eros eu odio volutpat semper. Quisque rhoncus vulputate neque 
                    sit amet interdum. Fusce non sem vel metus lacinia aliquet at at dui. 
                    Aliquam vel facilisis nisl, malesuada molestie sapien. In hac habitasse platea 
                    dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id 
                    purus quis nisl vehicula rutrum. Etiam faucibus ipsum sit amet erat imperdiet 
                    fringilla. Praesent ullamcorper posuere vulputate.
                    </p>
                    
                </div>
            </div>
        );
    }
}

export default Nosotros;