import React, {useEffect} from 'react';
import apiHooks from '../hooks/apiHooks';

const Profile = () => {
  const [user, setUser] = React.useState(null);

  const {getUserByToken} = apiHooks.useUser();
  const token = localStorage.getItem('access_token');

  useEffect(() => {
    const fetchUser = async () => {
      if (token) {
        const userData = await getUserByToken(token);
        setUser(userData.user);
      }
    };

    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h2>Profile</h2>
      {user && (
        <>
          <p>username: {user.username}</p>
          <p>email: {user.email}</p>
          <p>created: {new Date(user.created_at).toLocaleString('fi-FI')}</p>
        </>
      )}
    </>
  );
};

export default Profile;
