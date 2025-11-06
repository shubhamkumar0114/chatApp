import React, { useContext } from 'react'
import ChatNav from '../../../components/ChatNav';
import Chat from '../../../components/Chat';
import InputSend from '../../../components/InputSend';
import { AuthUserClick } from '../../../contextApi/Context';

const Right = () => {
    const { selectedUser } = useContext(AuthUserClick);
  return (
    <div>
      <div className="w-[68vw]  bg-white p-1">
        <div>
          <ChatNav />
        </div>

        <div className="">
          {selectedUser ? (
            <Chat />
          ) : (
            <div className='h-[81vh] flex justify-center items-center'>
              <h2 className="text-center font-semibold">No start conversations</h2>
            </div>
          )}
        </div>

        <div>
          <InputSend />
        </div>
      </div>
    </div>
  );
}

export default Right
