import PropTypes from 'prop-types';

const Greeting = (props) => {
  return (
    <>
      <h2>Moi, {props.name}</h2>
      <p>Sup</p>
      <button onClick={() => alert('hei')}>Click</button>
    </>
  );
};

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Greeting;
