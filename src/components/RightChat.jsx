import React from 'react'
import ChatNav from './ChatNav';
import Chat from './Chat';
import InputSend from './InputSend';

const RightChat = () => {
  return (
    <div className="w-[68vw] ">
      <div>
        <ChatNav />
      </div>
      <Chat />
      <div>
        <InputSend />
      </div>
    </div>
  );
}

export default RightChat
