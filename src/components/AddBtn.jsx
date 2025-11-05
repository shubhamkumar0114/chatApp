import React from 'react'
import { Link } from 'react-router-dom'

const AddBtn = () => {
  return (
    <div className=''>
      <div className='flex justify-end mr-4 mb-4 '>
        <Link to={"/addfriend"} className='bg-blue-600 cursor-pointer text-white px-2 pb-1 text-xl rounded-md'>+</Link>
      </div>
    </div>
  )
}

export default AddBtn
