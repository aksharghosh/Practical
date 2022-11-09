import React, { useState } from "react";

export const Context = React.createContext();

const ContextProvider = (props) => {
  const local = localStorage.getItem("isDark");
  if (local === null) {
    localStorage.setItem("isDark", "false");
  }
  const mode = localStorage.getItem("isDark");

  const [isDark, setIsDark] = useState(mode);

  return (
    <Context.Provider value={[isDark, setIsDark]}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
