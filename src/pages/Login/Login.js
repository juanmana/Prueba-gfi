import React, { useState } from "react";
import { Title } from "../../components/Login/Title/Title"
import { Input } from "../../components/Login/Input/Input";
 import {Label} from '../../components/Login/Label/Label'
import "./Login.css";

export const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false)
  const [isLogin, setIsLogin] = useState(false)
  const [hasError, setHasError] = useState(false)




  const handleChange=(name, value)=> {
    if (name === "usuario") {
      setUser(value);
    } else {
        if(value.length < 6){

            setPasswordError(true)
    }else{
        setPasswordError(false)

        setPassword(value)
    }

}
  }


  const isMatch=(param)=>{

      if(param.user.length > 0 && param.password > 0){

        if(param.user === "juanmartin" && param.password === '123456'){


            const {user, password} = param
            let ac = {user,password};
            let account = JSON.stringify(ac);
            sessionStorage.setItem('account', account)
            setIsLogin(true)
        }else{
            setIsLogin(false)
            setHasError(true)
        }
      }else{
          setIsLogin(false)
          setHasError(true)

      }
  }

  const handleSubmit=()=> {
    let account = { user, password };
    if (account) {
        
        isMatch(account)

    }
  }

  return (
    <div className="login-container">
      <div className="login-content">
        <Title text="¡Bienvenido!" />
        {hasError && <label className="label-alert">Su contraseña o Usuario son incorrectos</label>
}
        <Label text="Usuario" />
        <Input
          atribute={{
            id: "usuario",
            name: "usuario",
            type: "text",
            placeholder: "Ingrese su usuario",
          }}
          handleChange={handleChange}

        />

        <Label text="Contraseña" />
        <Input
          atribute={{
            id: "contraseña",
            name: "contraseña",
            type: "password",
            placeholder: "Ingrese su contraseña",
          }}
          handleChange={handleChange}

          param = {passwordError}
        />

{passwordError &&
        <label className="label-error">Contraseña invalida</label>

}


        <div className="submit-button-container">
          <button className="submit-button" onClick={handleSubmit}>Ingresar</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
