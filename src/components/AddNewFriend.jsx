import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const AddNewFriend = () => {
    const [phone , setPhone] = useState()
    
  return (
    <div className='flex justify-center items-center  h-screen'>
      <form action="">
        <div>
            <Link to={"/"}>{"<-"}</Link>
            <h2 className='text-center font-semibold text-gray-800'>Add New Friend</h2>
          <input
            type="Number"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            style={{
              display: "block",
              margin: "10px 0",
              padding: "8px",
              width: "100%",
              borderRadius: "8px",
              border: "1px solid gray",
            }}
          />
          <div className="flex flex-col items-center bg-blue-600 rounded-md text-white cursor-pointer">
            <button type="submit" style={{ padding: "8px 16px" }}>
              Add Friend
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddNewFriend
