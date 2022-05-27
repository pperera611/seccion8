import { useState } from "react";

const FormUser = props => {

    const [usuario, setUsuario] = useState('');
    const [edad, setEdad] = useState('');
    const [error, setError] = useState(false);
    const [mensaje, setMensaje] = useState('');
     

    const addUserHandler = event => {
        
        event.preventDefault();
        setError(false);
        if (edad.length===0 || usuario.length===0){
            setMensaje("Ingrese ambos valores");
            if (edad < 0){
                setMensaje("Ingrese edad positiva");
            }
            setError(true);
        }         
        
        const us = {
            error: error,
            mensaje: mensaje,
            usuario: usuario,
            edad: edad,
        };
        console.log(us);
        props.onAgregarUsuario(us);
        setUsuario("");
        setEdad("");
    };

    const setHandlerUsuario = (event) => { setUsuario(event.target.value)};
    const setHandlerEdad    = (event) => { setEdad(event.target.value)   };

    return (
        <div>
        <form onSubmit={addUserHandler}>
            <label>Nombre:</label>
            <input type="text" id="nombre" name="nombre" value = {usuario} onChange={setHandlerUsuario}/>
            <label>Edad:</label>
            <input type="text" id="edad" name="edad" value = {edad} onChange={setHandlerEdad}/>
            <button type ="submit">Agregar</button>    
        </form>
        </div>
    );


};

export default FormUser;