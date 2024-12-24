import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const GlobProvider = ({ children }) => {
  const [footer, setFooter] = useState(false);
  const toggleFooter = () => {
    setFooter((prev) => !prev);
  };
  return (
    <GlobalContext.Provider value={{ toggleFooter, footer }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => useContext(GlobalContext);
