// imports

import {useState} from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const Login = () => {
  const [formToggle, setFormToggle] = useState(false);

  const clickHandler = () => {
    setFormToggle(!formToggle);
  };

  return (
    <>
      {formToggle ? <LoginForm /> : <RegisterForm />}
      <button onClick={clickHandler}>
        {formToggle ? 'Register?' : 'Login?'}
      </button>
    </>
  );
};

export default Login;
