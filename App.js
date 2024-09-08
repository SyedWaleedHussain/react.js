import React from 'react';

function Login() {
  return (
    <div className="container">
      <div className="login-form">
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <button>LOGIN</button>
        <p>Not registered? <a href="#">Create an account</a></p>
      </div>
    </div>
  );
}

export default Login;