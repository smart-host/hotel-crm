import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  handleFileInput: PropTypes.func.isRequired
};

const FileInput = ({ handleFileInput }) => {
  let fileReader;

  const handleJSONFileRead = (e) => {
    const content = JSON.parse(e.target.result);
    handleFileInput(content);
  }

  const handleFileChosen = (file) => {
    fileReader = new FileReader();
    fileReader.onloadend = handleJSONFileRead;
    fileReader.readAsText(file);
  }

  return (
    <input
      type='file'
      id='file'
      accept='.json'
      onChange={e => handleFileChosen(e.target.files[0])}
    />
  )
}

FileInput.propTypes = propTypes;
FileInput.displayName = 'FileInput';

export default FileInput
