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

export default useMedia;
