import React, { Component } from 'react'
import './Mensaje.css';

export default class Mensaje extends Component {
    render() {
        return (
            <div className="contenedor">
                <div className="menu">
                    <div className="back">
                        <i className="fa fa-chevron-left"></i> 
                        <img src="https://www.flaticon.com/premium-icon/icons/svg/145/145855.svg" draggable="false" alt=""/>
                    </div>
                    <div className="name">NOMBRE USUARIO</div>
                    <div className="last">18:09</div>
                </div>

                <ol className="chat">
                    <li className="other">
                        <div className="avatar">
                            <img src="https://www.flaticon.com/premium-icon/icons/svg/145/145855.svg" draggable="false" alt=""/>
                        </div>
                        <div className="msg">
                            <div>
                                <label className="user-send-name">Usuario Recive</label>
                            </div>
                            <p>Hola!</p>
                            <p>Te vienes a cenar al centro? <emoji className="pizza" /></p>
                            <time>20:17</time>
                        </div>
                    </li>
                    <li className="self">
                        <div className="avatar">
                            <img src="https://www.flaticon.com/premium-icon/icons/svg/145/145857.svg" draggable="false" alt=""/>
                        </div>
                        <div className="msg">
                            <div>
                                <label className="user-send-name">Usuario Envía</label>
                            </div>
                            <p>Puff...</p>
                            <p>Aún estoy haciendo el contexto de Góngora... <emoji className="books" /></p>
                            <p>Mejor otro día</p>
                            <time>20:18</time>
                        </div>
                    </li>
                    {/* Separador de Fecha */}
                    <div className="day">Hoy</div>

                    <li className="self">
                        <div className="avatar">
                            <img src="https://www.flaticon.com/premium-icon/icons/svg/145/145857.svg" draggable="false" alt=""/>
                        </div>
                        <div className="msg">
                            <div>
                                <label className="user-send-name">Usuario Envía</label>
                            </div>
                            <p>Te apetece jugar a Minecraft?</p>
                            <time>18:03</time>
                        </div>
                    </li>
                    <li className="other">
                        {/* Imagen avatar */}
                        <div className="avatar">
                            <img src="https://www.flaticon.com/premium-icon/icons/svg/145/145855.svg" draggable="false" alt=""/>
                        </div>
                        {/* Mensaje */}
                        <div className="msg">
                            <div>
                                <label className="user-send-name">Usuario Recibe</label>
                            </div>
                            <p>Venga va, hace ya mucho que no juego...</p>
                            <time>18:07</time>
                        </div>
                    </li>                    
                </ol>
                <input className="textarea" type="text" placeholder="Escribe Aqui !" />
                <div className="emojis"></div>
            </div>
        )
    }
}
