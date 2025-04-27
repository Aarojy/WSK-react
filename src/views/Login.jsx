// imports

import {useState} from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const Login = () => {
  const [formToggle, setFormToggle] = useState(true);

  const clickHandler = () => {
    setFormToggle(!formToggle);
  };

  return (
    <>
      {formToggle ? <LoginForm /> : <RegisterForm />}
      <button
        className="m-1 bg-purple-900 p-1 hover:bg-purple-200 hover:text-black"
        onClick={clickHandler}
      >
        {formToggle ? 'Register?' : 'Login?'}
      </button>
    </>
  );
};

export default Login;
