import MediaRow from '../components/MediaRow';
import React, {useEffect, useState} from 'react';
import SingleView from '../components/SingleView';
import {fetchData} from '../utils/fetchData';

const Home = () => {
  const [mediaArray, setMediaArray] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const getMedia = async () => {
      try {
        const mediaData = await fetchData(
          import.meta.env.VITE_MEDIA_API + '/media',
        );
        setMediaArray(mediaData);

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

  return (
    <>
      <h2>My Media</h2>
      <table>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Username</th>
            <th>Title</th>
            <th>Description</th>
            <th>Created</th>
            <th>Size</th>
            <th>Type</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <MediaRow
              key={item.media_id}
              item={item}
              setSelectedItem={setSelectedItem}
            />
          ))}
        </tbody>
      </table>
      <SingleView item={selectedItem} setSelectedItem={setSelectedItem} />
    </>
  );
};

export default Home;
