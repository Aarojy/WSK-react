import {useState} from 'react';
import useForm from '../hooks/formHooks';
import {useFile} from '../hooks/apiHooks';
import {useNavigate} from 'react-router';
import TextInput from '../components/TextInput';

// Upload.jsx
const Upload = () => {
  const [file, setFile] = useState(null);
  const {postFile, postMedia} = useFile();
  const navigate = useNavigate();

  const handleFileChange = (evt) => {
    if (evt.target.files) {
      setFile(evt.target.files[0]);
    }
  };

  const doUpload = async () => {
    try {
      const token = window.localStorage.getItem('access_token');

      const result = await postFile(file, token);
      console.log('result', result.uploadResult.data);

      const mediaResult = await postMedia(
        result.uploadResult.data,
        inputs,
        token,
      );
      console.log('mediaResult', mediaResult);

      navigate('/');
    } catch (e) {
      console.log('Error123', e.message);
    }
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(doUpload);

  return (
    <>
      <h1 className="m-2 ml-0 text-2xl">Upload</h1>
      <form onSubmit={handleSubmit}>
        <TextInput
          label="Title"
          name="title"
          type="title"
          id="title"
          onChange={handleInputChange}
        />
        <div className="flex flex-col">
          <label htmlFor="description">Description</label>
          <textarea
            className="rounded-md border-2 border-gray-300 p-2"
            name="description"
            rows={5}
            id="description"
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="flex flex-col">
          <label htmlFor="file">File</label>
          <input
            className="m-1 ml-0 w-70 bg-purple-900 p-1 hover:bg-purple-200 hover:text-black"
            name="file"
            type="file"
            id="file"
            accept="image/*, video/*"
            onChange={handleFileChange}
          />
        </div>
        <img
          src={
            file
              ? URL.createObjectURL(file)
              : 'https://placecats.com/millie/300/150'
          }
          alt="preview"
          width="200"
        />
        <button
          className="m-1 ml-0 bg-purple-900 p-1 hover:bg-purple-200 hover:text-black"
          type="submit"
          disabled={file && inputs?.title.length > 3 ? false : true}
        >
          Upload
        </button>
      </form>
    </>
  );
};

export default Upload;
