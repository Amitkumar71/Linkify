import React, { useState } from 'react';
import './Body.scss';
import Room from './Room';

const Body = () => {
  const [dragging, setDragging] = useState(false);
  const [droppedFile, setDroppedFile] = useState(null);
  const [showRoom, setShowRoom] = useState(false);
  const [isCreateMode, setIsCreateMode] = useState(true); // State to track whether we are in Create or Delete mode

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);

    // Handle the dropped file here
    const file = e.dataTransfer.files[0];
    setDroppedFile(file);
  };

  const handleFileInputClick = () => {
    document.getElementById('fileInput').click();
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setDroppedFile(file);
  };

  const isImageType = (file) => {
    return file && file.type.startsWith('image/');
  };

  const handleClear = () => {
    setDroppedFile(null);
  };

  const handleToggleMode = () => {
    if (isCreateMode) {
      setShowRoom(true);
    } else {
      setShowRoom(false);
      setDroppedFile(null); // Clear the dropped file when deleting the room
    }
    setIsCreateMode(!isCreateMode);
  };

  return (
    <div className="body-container">
      <h2>Drop your content here</h2>
      <div
        className={`drop-zone ${dragging ? 'dragging' : ''}`}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleFileInputClick}
      >
        {droppedFile ? (
          <div>
            {isImageType(droppedFile) ? (
              <>
                <img
                  src={URL.createObjectURL(droppedFile)}
                  alt="Dropped file"
                  style={{ maxWidth: '200px', maxHeight: '100px' }}
                />
                <p>File Name: {droppedFile.name}</p>
                <p>File Type: {droppedFile.type}</p>
                <p>File Size: {droppedFile.size} bytes</p>
              </>
            ) : (
              <>
                <p>File Name: {droppedFile.name}</p>
                <p>File Type: {droppedFile.type}</p>
                <p>File Size: {droppedFile.size} bytes</p>
              </>
            )}
          </div>
        ) : dragging ? (
          <p>Drop here (or click to choose)</p>
        ) : (
          <p>Drag and drop a file (or click to choose)</p>
        )}
        <input
          type="file"
          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.gif,.mp4,.mov"
          onChange={handleFileInputChange}
          style={{ display: 'none' }}
          id="fileInput"
        />
      </div>
      <button className="clear" onClick={handleClear}>Clear</button>
      <button className="create-room-btn" onClick={handleToggleMode}>
        {isCreateMode ? 'Create Room' : 'Delete Room'}
      </button>

      {showRoom && <Room />} {/* Conditionally render the Room component */}
    </div>
  );
};

export default Body;
