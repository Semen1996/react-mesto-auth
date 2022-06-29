import React from 'react';
import { withRouter } from 'react-router-dom'; 
import {register} from '../utils/auth.js';


function Register(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');


  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    register(email,password)
      .then((res) => {
        if(res) {
          props.registrStatus();
          props.registerOpen();
          props.history.push('/sign-in');
        }
      })
      .catch(() => {
        props.registerOpen();
      });
  }
  

  return (
    <form className="sign" name="sign-form" onSubmit={handleSubmit}>
      <h2 className="sign__title">Регистрация</h2>
      <input className="sign__field sign__field_type_email" name="email" type="email" value={email} onChange={handleEmail} placeholder="Email" minLength="5" required />
      <input className="sign__field sign__field_type_password" name="password" type="password" value={password} onChange={handlePassword}  placeholder="Пароль" minLength="4" required />
      <button className="sign__submitButton" type="submit">Зарегистрироваться</button>
      <p className="sign__text">Уже зарегистрированы? Войти</p>
    </form>
  );
}

export default withRouter(Register); 