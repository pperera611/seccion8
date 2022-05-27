const User = props =>{

    const user = props.usuario +" ("+ props.edad + " years old)";

    return (
        <div>
            <li>{user}</li>
        </div>
    )
};

export default User;