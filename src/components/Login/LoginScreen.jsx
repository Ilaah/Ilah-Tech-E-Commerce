import React, { useEffect, useState } from "react";
import Form from "./Form";
import './style/loginScreen.css'
import UserLogged from "./UserLogged";

const LoginScreen = () => {

  const [token, setToken] = useState('')

  const changedToken = localStorage.getItem('token')

  const logOut = () => {
    const removeToken = localStorage.removeItem('token')
    setToken(removeToken)
  }

  useEffect(() => {

    setToken(changedToken)
  }, [changedToken])

  return (
    <div className="login">
      {
        token ?
          <UserLogged 
          logOut={logOut}
          />
        :
          <Form />
      }
    </div>
  );
};

export default LoginScreen