import React from 'react';

const LoginForm = () => {
  return (
    <form>
      <label htmlFor="username">Nombre de usuario:</label>
      <input type="text" id="username" />

      <label htmlFor="password">Contraseña:</label>
      <input type="password" id="password" />

      <button type="submit">Iniciar sesión</button>
    </form>
  );
};

export default LoginForm;
