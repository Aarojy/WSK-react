import React from 'react';
import PropTypes from 'prop-types';
import {useLocation, useNavigate} from 'react-router';

const Single = () => {
  const {state} = useLocation();
  const navigate = useNavigate();
  const item = state.item;

  return (
    <>
      <button onClick={() => navigate(-1)}>Go back</button>
      {item.media_type === 'video/mp4' ? (
        <video src={item.filename} controls />
      ) : (
        <img src={item.filename} alt={item.title} />
      )}
      <h3>Title: {item.title}</h3>
      <p>{item.description}</p>
    </>
  );
};

Single.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Single;
