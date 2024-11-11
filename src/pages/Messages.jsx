import React, { useState } from 'react';
import './Messages.css';
import messages from '../../backend/mock/messages.json';
import messageOverlay from '../../backend/mock/messageOverlay.json';

const Messages = () => {
  const [showOverlay, setshowOverlay] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(null);

  const handlePopOut = (message, e) => {
    e.preventDefault();
    setSelectedGroup(message);
    setshowOverlay(true);
  };

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputSubmit = () => {
    if (inputValue.trim()) {
      console.log(inputValue);
      setInputValue('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleInputSubmit();
    }
  };

  return (
    <div className='messages'>
      {messages.map((message, index) => (
        <a 
          className='actual-messages' 
          key={index} 
          onClick={(e) => handlePopOut(message, e)}
        >
          <img src={message.profile} className='profile-pic' alt="Profile" />
          <div className='message-text'>
            <b>{message.groupName}</b>
            <div>{message.message}</div>
          </div>
        </a>
      ))}

      {showOverlay && selectedGroup && (
        <div className='message-overlay'>
          <div className='message-header'>
            <div className='cross-exit'>
              <button className='cross-exit-button' onClick={() => setshowOverlay(false)}>X</button>
            </div>
            <img src={selectedGroup.profile} className='profile-pic' alt="Profile" />
            <span className='group-name'>{selectedGroup.groupName}</span>
          </div>

          <div className='messages-container'>
            {messageOverlay.map((message, index) => (
              <div 
                key={index} 
                className={`message-bubble ${message.sender ? 'sender' : 'receiver'}`}
              >
                {message.message}
              </div>
            ))}
          </div>

          <div className='message-box'>
            <input
              className='input-box'
              type="text"
              placeholder="Type a message..."
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyPress}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Messages;