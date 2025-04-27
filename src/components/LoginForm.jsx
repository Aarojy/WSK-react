import {useContext} from 'react';
import useForm from '../hooks/formHooks';
import {UserContext} from '../contexts/UserContext';
import TextInput from './TextInput';

const LoginForm = () => {
  const {handleLogin} = useContext(UserContext);

  const initValues = {
    username: '',
    password: '',
  };

  const doLogin = async () => {
    try {
      handleLogin(inputs);
    } catch (e) {
      alert(e.message);
    }
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(
    doLogin,
    initValues,
  );

  return (
    <>
      <h1 className="m-2 ml-0 text-2xl">Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="loginuser">Username</label>
          <TextInput
            name="username"
            type="text"
            id="loginuser"
            onChange={handleInputChange}
            autoComplete="username"
          />
        </div>
        <div>
          <label htmlFor="loginpassword">Password</label>
          <TextInput
            name="password"
            type="password"
            id="loginpassword"
            onChange={handleInputChange}
            autoComplete="current-password"
          />
        </div>
        <button
          className="m-1 bg-purple-900 p-1 hover:bg-purple-200 hover:text-black"
          type="submit"
        >
          Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;
