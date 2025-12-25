import React, { useContext } from 'react'
import Left from './Left';
import Right from './Right';
import { ThemeContext } from '../../contextApi/Theme';


const MainSection = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div
      className={`${
        theme ? "bg-zinc-900" : "bg-white text-black"
      }  `}
    >
      <div className=" flex md:flex-row h-[96vh] justify-center py-4 flex-col bg-amber-200 overflow-hidden">
        <div className="w-[34vw] ">
          <Left />
        </div>
        <div className='w-[62vw] '>
          <Right />
        </div>
      </div>
    </div>
  );
}

export default MainSection
