// imports

import {useState} from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const Login = () => {
  const [buttonRegister, setButtonRegister] = useState(false);

  return (
    <>
      <button onClick={() => setButtonRegister(!buttonRegister)}>Change</button>
      {buttonRegister ? <LoginForm /> : <RegisterForm />}
    </>
  );
};

export default Login;
