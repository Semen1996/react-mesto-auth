import React from 'react';
import { withRouter } from 'react-router-dom';
import {authorize} from '../utils/auth.js';

function Login(props) {
  const [password, setPassword] = React.useState('');


  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    authorize(password, props.email)
      .then((data) => {
        props.handleLogin(props.email);
        props.history.push('/');
      })
      .catch(err => console.log(err));
  } 


  return (
    <form className="sign" name="sign-form" onSubmit={handleSubmit}>
      <h2 className="sign__title">Вход</h2>
      <input className="sign__field sign__field_type_email" name="email" type="email" value={props.email} onChange={props.handleEmail} placeholder="Email" minLength="5" required />
      <input className="sign__field sign__field_type_password" name="password" type="password" value={password} onChange={handlePassword} placeholder="Пароль" minLength="4" required />
      <button className="sign__submitButton" type="submit">Войти</button>
    </form>
  );
}

export default withRouter(Login); 