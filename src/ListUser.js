import User from "./User";


const ListUser = props => {

    let usuarios = props.usuarios.map ( e =>     
        <User key = {Math.random()}
        usuario = {e.usuario}
        edad = {e.edad}
        />
    );

    return( <ul>{usuarios}</ul> );
};

export default ListUser;