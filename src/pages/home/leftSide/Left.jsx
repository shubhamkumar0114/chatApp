import React from 'react'
import LeftTopNav from '../../../components/LeftTopNav';
import AllUsers from '../../../components/AllUsers';

const Left = () => {
  return (
    <div>
      <div className='w-[30vw] p-1 space-y-2'>
        <div>
          <LeftTopNav />
        </div>

        <div>
          <AllUsers />
        </div>
      </div>
    </div>
  );
}

export default Left
