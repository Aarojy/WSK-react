import {useContext, useEffect} from 'react';
import {Link, Outlet} from 'react-router';
import {UserContext} from '../contexts/UserContext';

const Layout = () => {
  const {user, handleAutoLogin} = useContext(UserContext);

  useEffect(() => {
    handleAutoLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {user ? (
            <>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/upload">Upload</Link>
              </li>
              <li>
                <Link to="/logout">Logout</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login/Register</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

Layout.propTypes = {};

export default Layout;
