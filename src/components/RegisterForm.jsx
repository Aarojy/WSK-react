import {useNavigate} from 'react-router';
import apiHooks from '../hooks/apiHooks';
import useForm from '../hooks/formHooks';
import TextInput from './TextInput';

const RegisterForm = () => {
  const {postUser} = apiHooks.useUser();
  const navigate = useNavigate();

  const initValues = {
    username: '',
    email: '',
    password: '',
  };

  const doRegister = async () => {
    await postUser(inputs);

    navigate('/');
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(
    doRegister,
    initValues,
  );

  return (
    <>
      <h1 className="m-2 ml-0 text-2xl">Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="registeruser">Username</label>
          <TextInput
            name="username"
            type="text"
            id="registeruser"
            onChange={handleInputChange}
            autoComplete="username"
          />
        </div>
        <div>
          <label htmlFor="registeremail">Email</label>
          <TextInput
            name="email"
            type="text"
            id="registeremail"
            onChange={handleInputChange}
            autoComplete="email"
          />
        </div>
        <div>
          <label htmlFor="registerpassword">Password</label>'
          <TextInput
            name="password"
            type="password"
            id="registerpassword"
            onChange={handleInputChange}
            autoComplete="current-password"
          />
        </div>
        <button
          className="m-1 bg-purple-900 p-1 hover:bg-purple-200 hover:text-black"
          type="submit"
        >
          Register
        </button>
      </form>
    </>
  );
};

export default RegisterForm;
