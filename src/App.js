import React, {useState} from 'react';
import './App.css';
import ListUser from "./ListUser";
import FormUser from './FormUser';



function App() {
  
  const [usuarios, setUsuarios] = useState([]);

  const handlerAgregarUsuario = (nuevoUsuario) => {

    setUsuarios((prevState) => { 
      return [nuevoUsuario,...prevState];
  });

  };

  return (
    <div className="App">
      <header className="App-header">
      <FormUser onAgregarUsuario = {handlerAgregarUsuario}/>
      <ListUser usuarios = {usuarios}/>
      </header>
    </div>
  );
}

export default App;
