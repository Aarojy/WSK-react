import {useContext} from 'react';
import {UserContext} from '../contexts/UserContext';

const Logout = () => {
  //TODO: Add logout functionality
  const {handleLogout} = useContext(UserContext);
  handleLogout();
  return (
    <>
      <p>logout page</p>
    </>
  );
};

export default Logout;
