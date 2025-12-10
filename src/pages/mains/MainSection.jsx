import React, { useContext } from 'react'
import Left from './Left';
import Right from './Right';
import { ThemeContext } from '../../contextApi/Theme';


const MainSection = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div
      className={`${
        theme ? "bg-black" : "bg-white text-gray-950"
      } h-screen top-mains`}
    >
      <div className="mains">
        <div className="">
          <Left />
        </div>
        <div>
          <Right />
        </div>
      </div>
    </div>
  );
}

export default MainSection
