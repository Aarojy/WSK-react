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

export const useFile = () => {
  const postFile = async (file, token) => {
    const formData = new FormData();
    formData.append('file', file);

    const fetchOptions = {
      method: 'POST',
      headers: {
        Authorization: 'Bearer: ' + token,
      },
      mode: 'cors',
      body: formData,
    };

    const uploadResult = await fetchData(
      import.meta.env.VITE_UPLOAD_SERVER + '/upload',
      fetchOptions,
    );

    return {uploadResult};
  };

  const postMedia = async (file, inputs, token) => {
    const data = {...inputs, ...file};
    const fetchOptions = {
      method: 'POST',
      headers: {
        Authorization: 'Bearer: ' + token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    console.log(file);

    const mediaResult = await fetchData(
      import.meta.env.VITE_MEDIA_API + '/media',
      fetchOptions,
    );

    return mediaResult;
  };

  return {postFile, postMedia};
};

export default {useMedia, useAuthentication, useUser, useFile};
