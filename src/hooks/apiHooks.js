import {fetchData} from '../utils/fetchData';
import React, {useEffect, useState} from 'react';

const useMedia = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getMedia = async () => {
      try {
        const mediaData = await fetchData(
          import.meta.env.VITE_MEDIA_API + '/media',
        );

        const url = import.meta.env.VITE_AUTH_API;

        const usersData = await Promise.all(
          mediaData.map(async (item) => {
            const data = await fetchData(`${url}/users/${item.user_id}/`);
            return {
              ...item,
              username: data.username,
            };
          }),
        );

        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching media:', error);
      }
    };

    getMedia();
  }, []);

  console.log('Users:', users);
  return users;
};

const useAuthentication = () => {
  const postLogin = async (inputs) => {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    };
    const loginResult = await fetchData(
      import.meta.env.VITE_AUTH_API + '/auth/login',
      fetchOptions,
    );

    window.localStorage.setItem('access_token', loginResult.token);

    console.log('Login Result:', loginResult);
    return loginResult;
  };

  return {
    postLogin,
  };
};

export default {useMedia, useAuthentication};
