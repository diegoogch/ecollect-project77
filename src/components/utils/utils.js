
export  class utils {

    ValidarUsuario = () => {
        let usuarioLocalstorage = this.ObtenerUsuario()
        if (usuarioLocalstorage != null) {
            usuarioLocalstorage = JSON.parse(usuarioLocalstorage);
            let ahora = Date.now() / 1000;
            // console.log(usuarioLocalstorage);
            if (usuarioLocalstorage.token != null) {
                let userDetails = this.ObtenerDetalleToken(usuarioLocalstorage.token);
                console.log(JSON.parse(userDetails));                
                if (userDetails) {                    
                    if (JSON.parse(userDetails).exp > ahora) {
                        return true;
                    } else {
                        localStorage.removeItem("usuario-ecollect");
                    }
                }
            }else{
                if (usuarioLocalstorage.exp > ahora) {
                    return true;
                } else {
                    localStorage.removeItem("usuario-ecollect");                    
                }
            }
        }
        return false;
    }

    ObtenerUsuario = () => {
        let usuarioLocalstorage = localStorage.getItem('usuario-ecollect')
        if (usuarioLocalstorage) {
            return usuarioLocalstorage
        } else {
            return null
        }
    }
    ObtenerDetalleToken=(token)=> {
        if (token) {
            let centro = token.split(".")[1];
            return window.atob(centro);
        }
        return null;
    }

    
}

