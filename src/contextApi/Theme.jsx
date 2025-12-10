import React, { createContext, useState } from "react";
export const ThemeContext = createContext();

const ThemeContexts = ({ children }) => {
  const themes = JSON.parse(localStorage.getItem("theme"))
  const [theme, setTheme] = useState(themes);
  localStorage.setItem("theme", JSON.stringify(theme));
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContexts;
