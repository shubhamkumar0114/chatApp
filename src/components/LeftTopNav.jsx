import React from 'react'
import { Link } from 'react-router-dom';

const LeftTopNav = () => {
  return (
    <div>
      <div className='flex justify-between items-center bg-white p-2 rounded-sm'>
        <h1>Whatsapps</h1>
        <Link to={"/profile"}>Profile</Link>
      </div>
    </div>
  );
}

export default LeftTopNav
