import React, { memo } from "react";
import FormSign from "../FormSign/FormSign";

const Register = memo(({ changeCurrUrl, authRegister }) => {
  return (
    <FormSign
      name="signup"
      title="Добро пожаловать!"
      btnName="Зарегистрироваться"
    />
  );
});

export default Register;
