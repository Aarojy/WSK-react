import MediaRow from '../components/MediaRow';
import React, {useState} from 'react';
import SingleView from '../components/SingleView';
import apiHooks from '../hooks/apiHooks';

const Home = () => {
  const users = apiHooks.useMedia();
  const [selectedItem, setSelectedItem] = useState(null);

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
