import React, { memo } from 'react';
import FormSign from '../FormSign/FormSign';

const Login = memo(({ authLogin, textError, clearTextError }) => {
  function handleSubmit(e, { email, password }) {
    e.preventDefault();

    if (!email || !password) {
      return;
    }

    authLogin(email, password).catch((err) => console.log(err));
  }
  return (
    <FormSign
      name="signin"
      title="Рады видеть!"
      btnName="Войти"
      onSubmit={handleSubmit}
      textError={textError}
      clearTextError={clearTextError}
    />
  );
});

export default Login;
