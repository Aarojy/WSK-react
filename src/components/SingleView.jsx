const SingleView = (props) => {
  const {item, setSelectedItem} = props;
  const handleClose = () => {
    setSelectedItem(null);
  };

  return (
    <>
      {item && (
        <dialog open>
          <button onClick={handleClose}>&#10005;</button>
          {item.media_type === 'video/mp4' ? (
            <video src={item.filename} controls />
          ) : (
            <img src={item.filename} alt={item.title} />
          )}
          <h3>Title: {item.title}</h3>
          <p>{item.description}</p>
        </dialog>
      )}
    </>
  );
};
export default SingleView;
