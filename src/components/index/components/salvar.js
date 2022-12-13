import React, { Component } from 'react'

export default class Salvar extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="btn-salvar text-center font-title font-white">
                <div class="planeta">
                    <h2>¿Listo para salvar al planeta?</h2>
                    <div class="botones">
                        <div><button type="button" class="btn btn-success butt btnreciclador">Reciclador</button></div>
                        <div><button type="button" class="btn btn-success butt btnrecolector">Recolector</button></div>
                    </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
