"use client"
import { useState,useEffect, createContext, useContext } from "react";

const heroContext = createContext();
export const useHeroContext = () => {
  return useContext(heroContext);
};

export const HeroContextProvider = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  const contextValue = {
    isOpen,
    setOpen,

  };



  return (
    <heroContext.Provider value={contextValue}>
      {children}
    </heroContext.Provider>
  );
};
