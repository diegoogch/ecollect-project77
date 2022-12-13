import React, { Component } from 'react';
import AppBar from './components/app-bar';
import Pilares from './components/pilares';
import Carousel from './components/carousel';
import Descripcion from './components/descripcion';
import Pasos from './components/pasos';
import Carousel2 from './components/carousel-2';
import Comentarios from './components/comentarios';
import Salvar from './components/salvar';
import Contacto from './components/contacto';
import Footer from './components/footer';

export default class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <AppBar/>
                <Pilares/>
                <Carousel/>
                <Descripcion/>
                <Pasos/>
                {/* <Carousel2/> */}
                <Comentarios/>
                <Salvar/>
                <Contacto/>
                <Footer/>
            </React.Fragment>
        )
    }
}
