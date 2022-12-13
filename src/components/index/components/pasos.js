import React, { Component } from 'react';

export default class Pasos extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="pasos text-center mt-5">
                    <div class="container pasos4">
                    <h2 class="text-center font-dark font-sub f-weight">Una manera práctica de salvar el planeta <br></br> en 4 sencillos pasos </h2>
                    <div class="row pasosTexto">
                        <div class="col-md-3 ti-pasos">
                            <ion-icon name="book" class="iconos-pilares"></ion-icon>
                            <p>Indicar la fecha</p>
                        </div>
                        <div class="col-md-3 ti-pasos">
                            <ion-icon name="man" class="iconos-pilares"></ion-icon>
                            <p class="ti-pasos">Concreta recojo mediante mensajería</p>
                        </div>
                        <div class="col-md-3 ti-pasos">
                            <ion-icon name="time" class="iconos-pilares"></ion-icon>
                            <p class="ti-pasos">El recolector estará en tu casa a la hora y fecha acordada</p>
                        </div>
                        <div class="col-md-3 ti-pasos">
                            <ion-icon name="home" class="iconos-pilares"></ion-icon>
                            <p class="ti-pasos">Se ha limpiado tu hogar</p>
                        </div>
                    </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
