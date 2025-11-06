import React from 'react'
import Left from './leftSide/Left'
import Right from './rightSide/Right'

const Main = () => {
  return (
    <div className='flex gap-1'>
      <div>
        <Left/>
      </div>
      <div>
        <Right/>
      </div>
    </div>
  )
}

export default Main
