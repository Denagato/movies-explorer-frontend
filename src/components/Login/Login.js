import React, { memo } from "react";
import FormSign from "../FormSign/FormSign";

const Login = memo(({ changeCurrUrl, authRegister }) => {
  return <FormSign
          name="signin"
          title="Рады видеть!"
          btnName="Войти"
        />;
});

export default Login;
