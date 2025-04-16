import {useContext, useEffect} from 'react';
import {UserContext} from '../contexts/UserContext';

const Logout = () => {
  const {handleLogout} = useContext(UserContext);

  useEffect(() => {
    handleLogout(); // Call handleLogout after the component renders
  }, [handleLogout]);

  return <></>;
};

export default Logout;
