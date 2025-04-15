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

  //console.log('Users:', users);
  return users;
};

export const useAuthentication = () => {
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

    console.log('Login Result:', loginResult);
    return loginResult;
  };

  return {
    postLogin,
  };
};

export const useUser = () => {
  const postUser = async (inputs) => {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    };
    return await fetchData(
      import.meta.env.VITE_AUTH_API + '/users',
      fetchOptions,
    );
  };

  const getUserByToken = async (token) => {
    const fetchOptions = {
      headers: {
        Authorization: 'Bearer: ' + token,
      },
    };

    const userResult = await fetchData(
      import.meta.env.VITE_AUTH_API + '/users/token',
      fetchOptions,
    );

    return userResult;
  };

  return {getUserByToken, postUser};
};

export default {useMedia, useAuthentication, useUser};
