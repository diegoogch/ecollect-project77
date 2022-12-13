import React, { Component } from 'react'
import './../index.css';

export default class Contacto extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="container formulaContacto">
                <form>
                <fieldset class="formularioC">
                <div class="text-center font-dark font-sub f-weight tcontact">
                <span>Contáctanos</span>
                </div>
                <div class="contacto">
                <div class="form-group ">
                <input type="email" class="form-control imputsform" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nombre"/>
                </div>
                <div class="form-group">
                <input type="email" class="form-control imputsform" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Correo electrónico"/>
                </div>
                <div class="form-group">
                <textarea class="form-control imputsform" id="exampleTextarea" rows="3" placeholder="Mensaje"></textarea>
                </div>
                <div class="form-group">
                <button type="submit" class="btn  btnForm">Enviar</button>
                </div>
                </div>
                </fieldset>
              </form>

              </div>

              

            </React.Fragment>
        )
    }
}
