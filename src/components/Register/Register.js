import React, { memo } from 'react';
import FormSign from '../FormSign/FormSign';

const Register = memo(({ authRegister, textError, clearTextError }) => {
  function handleSubmit(e, { name, email, password }) {
    e.preventDefault();
    authRegister(name, email, password);
  }

  return (
    <FormSign
      name="signup"
      title="Добро пожаловать!"
      btnName="Зарегистрироваться"
      onSubmit={handleSubmit}
      textError={textError}
      clearTextError={clearTextError}
    />
  );
});

export default Register;
