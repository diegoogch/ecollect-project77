import React, { Component } from 'react';
import './MiPerfil.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

var sImagen;
var nuevaLat;
var nuevaLng;
export class MiPerfil extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
            informacion: {},
            puntoInicial: {
                lat: -16.4296694,
                lng: -71.5162855
            },
            zoom: 12,
        };
        this.idActual = JSON.parse(localStorage.getItem('usuario-ecollect')).id;
        this.nombre = React.createRef();
        this.email = React.createRef();
        this.telefono = React.createRef();
        this.latitud = React.createRef();
        this.longitud = React.createRef();
        this.usu_avatar = React.createRef();
    }

    componentDidMount() {
        fetch(`https://backend-ecollect.herokuapp.com/api/usuario/${this.idActual}`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState({
                    informacion: data.content[0],
                    puntoInicial: {
                        lat: data.content[0].usu_lat,
                        lng: data.content[0].usu_lng,
                    }
                });
            });
    }

    mostrarTostadaExito = () => {
        toast.success('EXITO AL GUARDAR LOS CAMBIOS!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false
        })
    }

    mostrarTostadaFallida = () => {
        toast.error('ERROR AL GUARDAR LOS CAMBIOS!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false
        })
    }

    handleInputChange(event) {
        var image = event.target.files[0];

        var reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('imgUsuario').setAttribute('src', e.target.result);
            sImagen = e.target.result;
        }
        reader.readAsDataURL(image);
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    guardarInfo = () => {
        let objUpdate = {
            usu_id: this.idActual,
            usu_nombre: this.nombre.current.value,
            usu_email: this.email.current.value,
            usu_telefono: this.telefono.current.value,
            usu_avatar: sImagen,
        }
        console.log(objUpdate);
        let headers = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objUpdate)
        };
        fetch('https://backend-ecollect.herokuapp.com/api/usuario', headers)
            .then(response => {
                return response.json();
            })
            .then(data => {
                if (data.message === "updated") {
                    console.log("usuario actualizado");
                    this.mostrarTostadaExito();
                }
                else {
                    console.log("mal ingresado");
                    this.mostrarTostadaFallida();
                }
            });
    }

    onMapClicked = (t, map, coord) => {
        var { latLng } = coord;
        var lat = latLng.lat();
        var lng = latLng.lng();
        this.latitud.current.value = lat;
        this.longitud.current.value = lng;
        this.setState({
            puntoInicial: {
                lat: lat,
                lng: lng,
            }
        });
        nuevaLat = lat;
        nuevaLng = lng;
    };

    guardarLatLng = () => {
        let objUpdate = {
            usu_id: this.idActual,
            usu_lat: nuevaLat,
            usu_lng: nuevaLng,
        }
        console.log(objUpdate);
        let headers = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objUpdate)
        };
        fetch('https://backend-ecollect.herokuapp.com/api/usuario', headers)
            .then(response => {
                return response.json();
            })
            .then(data => {
                if (data.message === "updated") {
                    console.log("usuario actualizado");
                    this.mostrarTostadaExito();
                }
                else {
                    console.log("mal ingresado");
                    this.mostrarTostadaFallida();
                }
            });
    }

    render() {
        const estilo = {
            img: {
                height: '100%',
                width: '100%',
                //position: 'absolute'

            }

        };
        return (
            <div className="container bootstrap snippets text-dark">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <ToastContainer
                        position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop
                        closeOnClick
                        rtl={false}
                        pauseOnVisibilityChange
                        draggable={false}
                        pauseOnHover={false}
                    />
                    <Row>
                        <Col sm={3}>
                            <div className="panel panel-default mt-5">
                                <div className="panel-body text-center">
                                    <img src={this.state.informacion.usu_avatar} className="profile-avatar" alt="" id="imgUsuario" style={estilo.img} />
                                    <br />
                                    <label htmlFor="Nueva">Haga click para insertar su foto</label>
                                    <input id="Nueva" type="file" accept="image/*" name="image" onChange={this.handleInputChange} />
                                </div>
                            </div>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Editar Informacion</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Cambiar ubicacion</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Cambiar contraseña</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Desactivar Cuenta</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <form className="form-horizontal mt-5">

                                        <div className="panel panel-default">
                                            <div className="panel-heading">
                                                <h2>Informacion de usuario</h2>
                                            </div>
                                            <div className="panel-body">
                                                <div className="form-group">
                                                    <label className="col-sm-3 control-label">Nombre</label>
                                                    <div className="col-sm-9">
                                                        <input type="text" className="form-control" defaultValue={this.state.informacion.usu_nombre} ref={this.nombre} />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-sm-3 control-label">Correo electronico</label>
                                                    <div className="col-sm-9">
                                                        <input type="text" className="form-control" defaultValue={this.state.informacion.usu_email} ref={this.email} />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-sm-3 control-label">Telefono</label>
                                                    <div className="col-sm-9">
                                                        <input type="text" className="form-control" defaultValue={this.state.informacion.usu_telefono} ref={this.telefono} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <br />
                                    <button className="btn btn-primary mb-5" onClick={this.guardarInfo}>Guardar Cambios</button>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <h2 className="mt-5">CAMBIAR UBICACION</h2>
                                    <div style={{ height: '300px', width: '100%', position: 'relative' }}>
                                        <Map google={this.props.google}
                                            initialCenter={this.state.puntoInicial}
                                            zoom={this.state.zoom}
                                            onClick={this.onMapClicked}>
                                            <Marker
                                                title={'Tu te encuentras aquí.'}
                                                name={'miUbi'}
                                                position={{ lat: this.state.puntoInicial.lat, lng: this.state.puntoInicial.lng }}
                                            />
                                        </Map>
                                    </div>
                                    <div className="form-group">
                                        <fieldset>
                                            <label className="control-label" htmlFor="readOnlyInput">Latitud</label>
                                            <input className="form-control" id="readOnly" type="text" defaultValue={this.state.informacion.usu_lat} readOnly ref={this.latitud} />
                                            <label className="control-label" htmlFor="readOnlyInput">Longitud</label>
                                            <input className="form-control" id="readOnlyInput" type="text" defaultValue={this.state.informacion.usu_lng} readOnly ref={this.longitud} />
                                        </fieldset>
                                    </div>
                                    <br />
                                    <button className="btn btn-primary mb-5" onClick={this.guardarLatLng}>Guardar Cambios</button>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <h2 className="mt-5">Cambiar contraseña</h2>
                                    <div className="form-group">
                                        <label className="control-label">Actual contraseña</label>
                                        <div className="col-sm-9">
                                            <input type="password" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label">Nueva contraseña</label>
                                        <div className="col-sm-9">
                                            <input type="password" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label">Confirmar contraseña</label>
                                        <div className="col-sm-9">
                                            <input type="password" className="form-control" />
                                        </div>
                                    </div>
                                    <br />
                                    <button className="btn btn-primary mb-5">Guardar Cambios</button>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <h2 className="mt-5">DESACTIVAR CUENTA</h2>
                                    <br />
                                    <Button variant="primary" onClick={this.handleShow}>
                                        Desactivar cuenta
                                    </Button>

                                    <Modal show={this.state.show} onHide={this.handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Desactivar cuenta</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>Realmente desea desactivar su cuenta?</Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={this.handleClose}>
                                                NO
                                            </Button>
                                            <Button variant="primary" onClick={this.handleClose}>
                                                SI
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyBcjhtE0FIFEO92Z_7xKQWODx3I_QXq33E')
})(MiPerfil)