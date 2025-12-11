import React, { useContext } from 'react'
import Left from './Left';
import Right from './Right';
import { ThemeContext } from '../../contextApi/Theme';


const MainSection = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div
      className={`${
        theme ? "bg-zinc-900" : "bg-white text-gray-950"
      }  `}
    >
      <div className=" flex md:flex-row flex-col">
        <div className="w-[36vw] ">
          <Left />
        </div>
        <div className='w-[64vw] '>
          <Right />
        </div>
      </div>
    </div>
  );
}

export default MainSection
