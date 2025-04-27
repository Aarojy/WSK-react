import {useContext} from 'react';
import PropTypes, {object} from 'prop-types';
import {Link} from 'react-router';
import {UserContext} from '../contexts/UserContext';
import {deleteMedia} from '../hooks/apiHooks';
import {useNavigate} from 'react-router';

const MediaRow = (props) => {
  const {user} = useContext(UserContext);
  const {item} = props;
  const navigate = useNavigate();

  return (
    <tr key={item.media_id}>
      <td>
        <img src={item.thumbnail} alt={item.title} />
      </td>
      <td>{item.username}</td>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td>{new Date(item.created_at).toLocaleString('fi-FI')}</td>
      <td>{item.filesize}</td>
      <td>{item.media_type}</td>
      <td>
        <div>
          <Link
            to="/single"
            className="hover:bg-green-400 hover:text-black"
            state={{item}}
          >
            View
          </Link>
        </div>
        {user && (
          <>
            <div>
              <button
                type="button"
                className="hover:bg-sky-400 hover:text-black"
                onClick={() => {
                  console.log('edit button clicked');
                }}
              >
                Edit
              </button>
            </div>
            <div>
              <button
                type="button"
                className="hover:bg-red-500"
                onClick={() => {
                  deleteMedia(
                    item.media_id,
                    localStorage.getItem('access_token'),
                  );
                  navigate(0);
                }}
              >
                Delete
              </button>
            </div>
          </>
        )}
      </td>
    </tr>
  );
};

MediaRow.propTypes = {
  item: object.isRequired,
  setMediaItem: PropTypes.func.isRequired,
};

export default MediaRow;
