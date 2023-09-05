import React, { useState } from 'react';
import './Room.css';

const Room = () => {
  const [dragging, setDragging] = useState(false);
  const [droppedFile, setDroppedFile] = useState(null);

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
    // Trigger the file input when the drag zone is clicked
    document.getElementById('roomInput').click();
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setDroppedFile(file);
  };

  const isImageType = (file) => {
    return file && file.type.startsWith('image/');
  };

  const handleclear = () => {
    setDroppedFile(null);
  };

  return (
    <div className="room-container">
      <h2>Colaborative  Space</h2>
      <div
        className={`room-drop-zone ${dragging ? 'dragging' : ''}`}
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
          id="roomInput"
        />
      </div>
      <button className="clear-room" onClick={handleclear}>Clear Room</button>
    </div>
  );
};

export default Room;
