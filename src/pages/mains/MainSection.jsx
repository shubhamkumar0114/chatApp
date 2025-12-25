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
      <div className=" flex md:h-[96vh] h-screen justify-center py-4 md:bg-amber-200 overflow-hidden">
        <div className="w-full md:w-[34vw] ">
          <Left />
        </div>
        <div className='w-full md:w-[62vw] hidden md:block'>
          <Right />
        </div>
      </div>
    </div>
  );
}

export default MainSection
