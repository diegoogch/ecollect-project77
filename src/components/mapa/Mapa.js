import React, { Component } from 'react'
import {GoogleApiWrapper, Map, Marker} from 'google-maps-react';

export class Mapa extends Component {

    constructor(props){
        super(props)
        this.state = {
            puntoInicial:{
                lat: -16.4296694,
                lng: -71.5162855
                    },
            zoom:17
        }
    }

    envieCoord = ()=>{
        if(this.props.enviarCoord){
            this.props.enviarCoord(this.state.puntoInicial)
        }
        
    }
    
    componentDidMount(){
    navigator.geolocation.getCurrentPosition(
        (position) => {
        this.setState({
                        puntoInicial: {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                            }
                        });
        },
        (error) => {},
        { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
        );
    }
    
    situarMarcador = (mapProps, map, clickEvent)=>{
        this.setState({
            puntoInicial: {
                        lat: clickEvent.latLng.lat(),
                        lng: clickEvent.latLng.lng()
                        }
            });
        this.envieCoord();
    }

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100%', width: '100%' }}>
                <Map google={this.props.google}
                    initialCenter={this.state.puntoInicial}
                    zoom={this.state.zoom}
                    onClick={this.situarMarcador}
                >
                    <Marker
                        title={'Tu te encuentras aquí.'}
                        name={'miUbi'}
                        position={this.state.puntoInicial} />

                </Map>

            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyBcjhtE0FIFEO92Z_7xKQWODx3I_QXq33E')
  })(Mapa)
