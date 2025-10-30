"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface LogoContextType {
  logo: string;
  setLogo: (newLogo: string) => void;
}

const LogoContext = createContext<LogoContextType | undefined>(undefined);

export const LogoProvider = ({ children }: { children: ReactNode }) => {
  const [logo, setLogo] = useState("/images/smartrealtortool.svg"); // default
  return (
    <LogoContext.Provider value={{ logo, setLogo }}>
      {children}
    </LogoContext.Provider>
  );
};

export const useLogo = () => {
  const context = useContext(LogoContext);
  if (!context) throw new Error("useLogo must be used within a LogoProvider");
  return context;
};
