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
        <ul className="flex justify-end overflow-hidden bg-purple-900">
          <li>
            <Link
              className="block p-4 text-center text-purple-50 hover:bg-purple-800"
              to="/"
            >
              Home
            </Link>
          </li>
          {user ? (
            <>
              <li>
                <Link
                  className="block p-4 text-center text-purple-50 hover:bg-purple-800"
                  to="/profile"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  className="block p-4 text-center text-purple-50 hover:bg-purple-800"
                  to="/upload"
                >
                  Upload
                </Link>
              </li>
              <li>
                <Link
                  className="block p-4 text-center text-purple-50 hover:bg-purple-800"
                  to="/logout"
                >
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  className="block p-4 text-center text-purple-50 hover:bg-purple-800"
                  to="/login"
                >
                  Login/Register
                </Link>
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
