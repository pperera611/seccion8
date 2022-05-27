import React, {useState} from 'react';
import './App.css';
import ListUser from "./ListUser";
import FormUser from './FormUser';
import Modal from './Modal';



function App() {
  
  const [usuarios, setUsuarios] = useState([]);
  const [error, setError] = useState(false);
  const [mensaje,setMensaje] = useState([]);

  const handlerAgregarUsuario = (nuevoUsuario) => {

    if (nuevoUsuario.error){
      setError(true);
      setMensaje(nuevoUsuario.mensaje);
    }
    else{  
      let nu = {usuario: nuevoUsuario.usuario, edad: nuevoUsuario.edad};
      setUsuarios((prevState) => { 
        return [nu,...prevState];
      })
    }

  };

  return (
    <div className="App">
      <header className="App-header">
      <FormUser onAgregarUsuario = {handlerAgregarUsuario}/>
      {error &&<Modal mensaje = {mensaje}/>} 
      <ListUser usuarios = {usuarios}/>
      </header>
    </div>
  );
}

export default App;
